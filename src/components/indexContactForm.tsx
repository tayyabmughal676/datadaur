declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

import React, {useState, useRef} from 'react';
import {z} from 'zod';
import {cn} from '../lib/utils';
import axios from 'axios';
import {countryData} from './countryData';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2'; // Import SweetAlert2

// Zod validation schema
const contactFormSchema = z.object({
    fullName: z.string()
        .min(2, 'Full name must be at least 2 characters')
        .max(50, 'Full name must be less than 50 characters')
        .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),

    company: z.string()
        .max(100, 'Company name must be less than 100 characters')
        .optional(),

    email: z.string()
        .email('Please enter a valid email address')
        .min(1, 'Email is required'),

    phone: z.string()
        .min(7, 'Phone number must be at least 7 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^\d+$/, 'Phone number can only contain digits'),

    countryCode: z.string()
        .min(1, 'Country code is required'),

    country: z.string()
        .min(1, 'Please select a country'),

    city: z.string()
        .min(2, 'City must be at least 2 characters')
        .max(50, 'City must be less than 50 characters')
        .optional(),

    interests: z.array(z.string())
        .min(1, 'Please select at least one interest'),

    budget: z.string()
        .min(1, 'Please select a budget range'),

    projectDescription: z.string()
        .min(10, 'Project description must be at least 10 characters')
        .max(1000, 'Project description must be less than 1000 characters')
});

interface FormData {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    countryCode: string;
    country: string;
    city: string;
    interests: string[];
    budget: string;
    projectDescription: string;
}

interface FormErrors {
    [key: string]: string;
}

// Define constants outside the component for better performance
const interestOptions = [
    'AI Agent Development',
    'Software as a Service (SaaS) Development',
    'MVP Development',
    'AI MCP Development',
    'No-code Software Development',
    'Web Application Development',
    'UX/UI Design',
    'Branding',
    'AI/ML'
];

const budgetOptions = [
    '$10K - $20K',
    '$30K - $40K',
    '$50K - $60K',
    '> $100K'
];

// Generate country options from countryData
const countryOptions = [
    {value: '', label: 'Select a country'},
    ...countryData.map(country => ({
        value: country.code.toLowerCase(),
        label: `${country.name} (${country.code})`
    }))
];

// Generate country codes from countryData
const countryCodes = [
    ...countryData.map(country => ({
        value: country.dialCode,
        label: `${country.dialCode} (${country.code})`
    }))
].sort((a, b) => a.label.localeCompare(b.label));

const IndexContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        countryCode: '+971',
        country: 'United Arab Emirates',
        city: '',
        interests: [],
        budget: '',
        projectDescription: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Function to show SweetAlert2 errors
    const showErrorAlert = (errors: FormErrors) => {
        const errorMessages = Object.values(errors).filter(Boolean);
        if (errorMessages.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                html: errorMessages.map(error => `• ${error}`).join('<br>'),
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                customClass: {
                    popup: 'colored-toast'
                }
            });
        }
    };

    // Function to show success alert
    const showSuccessAlert = (message: string) => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: message,
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                popup: 'colored-toast'
            }
        });
    };

    // Function to show error alert
    const showErrorMessage = (message: string) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            customClass: {
                popup: 'colored-toast'
            }
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const toggleInterest = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));

        // Clear interests error when user selects an interest
        if (errors.interests) {
            setErrors(prev => ({
                ...prev,
                interests: ''
            }));
        }
    };

    const selectBudget = (budget: string) => {
        setFormData(prev => ({
            ...prev,
            budget
        }));

        // Clear budget error when user selects a budget
        if (errors.budget) {
            setErrors(prev => ({
                ...prev,
                budget: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        try {
            contactFormSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formErrors: FormErrors = {};
                error.errors.forEach(err => {
                    if (err.path) {
                        formErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formErrors);
                // Show validation errors using SweetAlert2
                showErrorAlert(formErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        if (!recaptchaToken) {
            const recaptchaError = {recaptcha: 'Please complete the ReCAPTCHA challenge.'};
            setErrors(prev => ({...prev, ...recaptchaError}));
            showErrorAlert(recaptchaError);
            return;
        }

        setIsSubmitting(true);
        setResponseMessage(null);

        const dataToSend = {
            ...formData,
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "7606fa07-b450-4219-b7bb-5e78bdfc5897", // Use environment variable
            subject: `New Contact Form Submission from ${formData.fullName}`,
            from_name: "DataDaur",
        };

        try {
            const response = await axios.post('https://api.web3forms.com/submit', dataToSend);

            if (response.data.success) {
                const successMessage = 'Thank you! Your message has been sent successfully.';
                setResponseMessage({type: 'success', message: successMessage});
                showSuccessAlert(successMessage);

                if (window.gtag) {
                    window.gtag('event', 'generate_lead', {
                        'event_category': 'Contact Form',
                        'event_label': 'Main Contact Form Submission'
                    });
                }
                // Reset the form
                setFormData({
                    fullName: '', company: '', email: '', phone: '', countryCode: '+971',
                    country: '', city: '', interests: [], budget: '', projectDescription: ''
                });
                setErrors({});
                recaptchaRef.current?.reset();
                setRecaptchaToken(null);
            } else {
                const errorMessage = response.data.message || 'An error occurred. Please try again.';
                setResponseMessage({type: 'error', message: errorMessage});
                showErrorMessage(errorMessage);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            const errorMessage = 'An error occurred while sending the form. Please try again later.';
            setResponseMessage({type: 'error', message: errorMessage});
            showErrorMessage(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-open-sans text-black">
                    Have <span className="gradient-text">Great idea?</span>
                </h2>
                <p className="text-black/80 text-xl font-outfit">Tell us about it</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.fullName && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Company */}
                    <div>
                        <label
                            htmlFor="company"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter Company"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.company && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.company && (
                            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                        )}
                    </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.email && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Phone Number *
                        </label>
                        <div className="flex min-w-0">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                                className={cn(
                                    "px-2 sm:px-3 py-3 rounded-l-lg border-r-0 border min-w-0 flex-shrink-0",
                                    "bg-gray-50 border-gray-300 text-gray-500 font-outfit text-xs sm:text-sm",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                    errors.countryCode && "border-red-500 focus:ring-red-500"
                                )}
                            >
                                {countryCodes.map(code => (
                                    <option key={code.value} value={code.value}>
                                        {code.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                className={cn(
                                    "flex-1 min-w-0 px-2 sm:px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200",
                                    "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575] text-sm",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                    errors.phone && "border-red-500 focus:ring-red-500"
                                )}
                            />
                        </div>
                        {(errors.phone || errors.countryCode) && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone || errors.countryCode}</p>
                        )}
                    </div>
                </div>

                {/* Country and City */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Country */}
                    <div>
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Country *
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit text-gray-500",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.country && "border-red-500 focus:ring-red-500"
                            )}
                        >
                            {countryOptions.map(country => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                        {errors.country && (
                            <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                        )}
                    </div>

                    {/* City */}
                    <div>
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Dubai"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.city && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.city && (
                            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                        )}
                    </div>
                </div>

                {/* Interests */}
                <div>
                    <label className="block text-sm font-medium mb-4 font-outfit text-black">
                        I'm interested in... *
                    </label>

                    {/* Desktop version */}
                    <div className="hidden lg:block space-y-2 mr-10">
                        <div className="grid grid-cols-4 gap-2">
                            {interestOptions.slice(0, 4).map(interest => (
                                <button
                                    key={interest}
                                    type="button"
                                    onClick={() => toggleInterest(interest)}
                                    className={cn(
                                        "px-4 py-3 rounded-lg border text-xs text-center hover:shadow-md transition-all duration-200",
                                        "font-outfit",
                                        formData.interests.includes(interest)
                                            ? "gradient-bg text-white border-transparent"
                                            : "bg-gray-50 border-gray-300 text-gray-500 hover:border-gray-400",
                                        errors.interests && "border-red-500"
                                    )}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {interestOptions.slice(4).map(interest => (
                                <button
                                    key={interest}
                                    type="button"
                                    onClick={() => toggleInterest(interest)}
                                    className={cn(
                                        "px-4 py-3 rounded-lg border text-xs text-center hover:shadow-md transition-all duration-200",
                                        "font-outfit",
                                        formData.interests.includes(interest)
                                            ? "gradient-bg text-white border-transparent"
                                            : "bg-gray-50 border-gray-300 text-gray-500 hover:border-gray-400",
                                        errors.interests && "border-red-500"
                                    )}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile version */}
                    <div className="lg:hidden flex flex-wrap gap-2">
                        {interestOptions.map(interest => (
                            <button
                                key={interest}
                                type="button"
                                onClick={() => toggleInterest(interest)}
                                className={cn(
                                    "px-4 py-3 rounded-lg border text-xs text-center hover:shadow-md transition-all duration-200",
                                    "font-outfit whitespace-nowrap flex-shrink-0",
                                    formData.interests.includes(interest)
                                        ? "gradient-bg text-white border-transparent"
                                        : "bg-gray-50 border-gray-300 text-gray-500 hover:border-gray-400",
                                    errors.interests && "border-red-500"
                                )}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>

                    {errors.interests && (
                        <p className="mt-2 text-sm text-red-600">{errors.interests}</p>
                    )}
                </div>

                {/* Budget */}
                <div>
                    <label className="block text-sm font-medium mb-4 font-outfit text-black">
                        Project Budget (USD) *
                    </label>

                    {/* Desktop version */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-4 gap-2 w-1/2">
                            {budgetOptions.map(budget => (
                                <button
                                    key={budget}
                                    type="button"
                                    onClick={() => selectBudget(budget)}
                                    className={cn(
                                        "px-4 py-2 rounded-lg border text-sm text-center hover:shadow-md transition-all duration-200",
                                        "font-outfit",
                                        formData.budget === budget
                                            ? "gradient-bg text-white border-transparent"
                                            : "bg-gray-50 border-gray-300 text-gray-500 hover:border-gray-400",
                                        errors.budget && "border-red-500"
                                    )}
                                >
                                    {budget}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile version */}
                    <div className="lg:hidden flex flex-wrap gap-2">
                        {budgetOptions.map(budget => (
                            <button
                                key={budget}
                                type="button"
                                onClick={() => selectBudget(budget)}
                                className={cn(
                                    "px-4 py-2 rounded-lg border text-sm text-center hover:shadow-md transition-all duration-200",
                                    "font-outfit whitespace-nowrap flex-shrink-0",
                                    formData.budget === budget
                                        ? "gradient-bg text-white border-transparent"
                                        : "bg-gray-50 border-gray-300 text-gray-500 hover:border-gray-400",
                                    errors.budget && "border-red-500"
                                )}
                            >
                                {budget}
                            </button>
                        ))}
                    </div>

                    {errors.budget && (
                        <p className="mt-2 text-sm text-red-600">{errors.budget}</p>
                    )}

                    <p className="text-xs text-gray-500 mt-2 font-outfit">
                        This is the minimum starting price for any project. The final price will be determined based on
                        the project scope and timelines
                    </p>
                </div>

                {/* Project Description */}
                <div>
                    <label
                        htmlFor="projectDescription"
                        className="block text-sm font-medium mb-2 font-outfit text-black"
                    >
                        Tell us more about your project *
                    </label>
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={6}
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        placeholder="Something about your great idea..."
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none",
                            "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                            "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent", "custom-scrollbar",
                            errors.projectDescription && "border-red-500 focus:ring-red-500"
                        )}
                    />
                    {errors.projectDescription && (
                        <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>
                    )}
                </div>

                {/* ReCAPTCHA component */}
                <div className="pt-2 flex flex-col items-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_FALLBACK_SITE_KEY"}
                        onChange={(token) => {
                            setRecaptchaToken(token);
                            if (errors.recaptcha) {
                                setErrors(prev => ({...prev, recaptcha: ''}));
                            }
                        }}
                        onExpired={() => setRecaptchaToken(null)}
                    />
                    {errors.recaptcha && (
                        <p className="mt-1 text-sm text-red-600">{errors.recaptcha}</p>
                    )}
                </div>

                {/* Submit Button and Response Message */}
                <div className="flex flex-col items-center gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "gradient-bg text-white px-8 py-3 rounded-lg font-medium",
                            "hover:shadow-lg transition-all duration-200 font-outfit",
                            "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:ring-offset-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit the request'}
                    </button>

                    {responseMessage && (
                        <p className={cn(
                            "text-sm",
                            responseMessage.type === 'success' ? 'text-green-600' : 'text-red-600'
                        )}>
                            {responseMessage.message}
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
};

export default IndexContactForm;
