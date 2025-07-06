import React, { useState, useRef } from 'react'; // Import useRef
import { z } from 'zod';
import axios from 'axios';
import { cn } from '../lib/utils';
import { countryData } from './countryData';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha'; // 1. Import ReCAPTCHA

// Zod schema remains the same
const serviceOrderSchema = z.object({
    email: z.string().trim().min(1, { message: 'Email is required.' }).email({ message: 'Please enter a valid email address.' }),
    countryCode: z.string().min(1, { message: 'Country code is required.' }),
    phone: z.string().trim().min(7, { message: 'Phone number must be at least 7 digits.' }).regex(/^\d+$/, { message: 'Phone number can only contain digits.' }),
    startDate: z.string().min(1, { message: 'Start date is required.' }),
    deadline: z.string().min(1, { message: 'Deadline is required.' }),
    projectDetails: z.string().trim().min(20, { message: 'Project details must be at least 20 characters.' }),
});

// Constants remain the same
const countryCodes = [...new Map(countryData.map(item => [item.dialCode, item])).values()]
    .map(country => ({
        key: `${country.dialCode}-${country.code}`,
        value: country.dialCode,
        label: `${country.dialCode} (${country.code})`
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

interface ServiceOrderModalProps {
    onClose: () => void;
    serviceTitle: string;
    serviceDescription: string[];
}

const ServiceOrderModal: React.FC<ServiceOrderModalProps> = ({ onClose, serviceTitle, serviceDescription }) => {
    const [formData, setFormData] = useState({
        email: '',
        countryCode: '+971',
        phone: '',
        startDate: '',
        deadline: '',
        projectDetails: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Add state and ref for ReCAPTCHA
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const result = serviceOrderSchema.safeParse(formData);
        if (!result.success) {
            const formErrors: Record<string, string> = {};
            result.error.errors.forEach(err => {
                if (err.path[0]) {
                    formErrors[err.path[0]] = err.message;
                }
            });
            setErrors(formErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        // 3. Validate that ReCAPTCHA has been completed
        if (!recaptchaToken) {
            setErrors(prev => ({ ...prev, recaptcha: 'Please complete the ReCAPTCHA challenge.' }));
            return;
        }

        setIsSubmitting(true);

        try {
            const dataToSend = {
                ...formData,
                service: serviceTitle,
                access_key: accessKey,
                subject: `New Service Order: ${serviceTitle}`,
                from_name: "DataDaur Services",
            };

            const response = await axios.post('https://api.web3forms.com/submit', dataToSend);

            if (response.data.success) {
                Toast.fire({
                    icon: 'success',
                    title: 'Your order has been submitted!'
                });

                if (window.gtag) {
                    window.gtag('event', 'generate_lead', {
                        'event_category': 'Contact Form',
                        'event_label': 'Main Contact Form Submission'
                    });
                }

                // 4. Reset ReCAPTCHA on success
                recaptchaRef.current?.reset();
                setRecaptchaToken(null);

                setTimeout(() => {
                    onClose();
                }, 1500);
            } else {
                throw new Error(response.data.message || 'Submission failed');
            }
        } catch (error) {
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
                ? error.response.data.message
                : 'An error occurred. Please try again.';
            Toast.fire({
                icon: 'error',
                title: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">{serviceTitle}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1 rounded-full transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="mb-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Service Details:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {serviceDescription.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email and Phone fields are unchanged */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 font-outfit text-black">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                errors.email && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 font-outfit text-black">Phone Number *</label>
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
                                    <option key={code.key} value={code.value}>
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
                                placeholder="551234567"
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

                    {/* Date fields are unchanged */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium mb-2 font-outfit text-black">Estimated Start Date *</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                className={cn(
                                    "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                    "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                    errors.startDate && "border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>}
                        </div>
                        <div>
                            <label htmlFor="deadline" className="block text-sm font-medium mb-2 font-outfit text-black">Deadline *</label>
                            <input
                                type="date"
                                id="deadline"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleInputChange}
                                className={cn(
                                    "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                    "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent",
                                    errors.deadline && "border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.deadline && <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>}
                        </div>
                    </div>

                    {/* Project Details field is unchanged */}
                    <div>
                        <label htmlFor="projectDetails" className="block text-sm font-medium mb-2 font-outfit text-black">Project Details *</label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows={4}
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            placeholder="Please provide details about your project requirements..."
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent","custom-scrollbar",
                                errors.projectDetails && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.projectDetails && <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>}
                    </div>

                    {/* 5. Add the ReCAPTCHA component */}
                    <div className="pt-2">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                            onChange={(token) => {
                                setRecaptchaToken(token);
                                if (errors.recaptcha) {
                                    setErrors(prev => ({ ...prev, recaptcha: '' }));
                                }
                            }}
                            onExpired={() => setRecaptchaToken(null)}
                        />
                        {errors.recaptcha && (
                            <p className="mt-1 text-sm text-red-600">{errors.recaptcha}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold",
                            "hover:shadow-lg transition-all duration-200 font-outfit",
                            "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:ring-offset-2",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Order'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceOrderModal;