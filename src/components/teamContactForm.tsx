import React, {useState} from 'react';
import {cn} from '../lib/utils';

//hello
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

const teamContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        countryCode: '+971',
        country: '',
        city: '',
        interests: [],
        budget: '',
        projectDescription: ''
    });

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
        '$5K - $10K',
        '$10K - $15K',

    ];

    const countryOptions = [
        {value: '', label: 'United Arab Emirates (UAE)'},
        {value: 'us', label: 'United States'},
        {value: 'uk', label: 'United Kingdom'},
        {value: 'pk', label: 'Pakistan'}
    ];

    const countryCodes = [
        {value: '+971', label: '+971'},
        {value: '+1', label: '+1'},
        {value: '+44', label: '+44'},
        {value: '+92', label: '+92'}
    ];

    const teamhandleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleInterest = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const selectBudget = (budget: string) => {
        setFormData(prev => ({
            ...prev,
            budget
        }));
    };

    const teamHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
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
            <form onSubmit={teamHandleSubmit} className="space-y-8">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required={true}
                            value={formData.fullName}
                            onChange={teamhandleInputChange}
                            placeholder="Full Name"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                            )}
                        />
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
                            required={true}
                            value={formData.company}
                            onChange={teamhandleInputChange}
                            placeholder="Enter Company"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                            )}
                        />
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
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required={true}
                            value={formData.email}
                            onChange={teamhandleInputChange}
                            placeholder="Email"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                            )}
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2 font-outfit text-black"
                        >
                            Phone Number
                        </label>
                        <div className="flex">
                            <select
                                name="countryCode"
                                required={true}
                                value={formData.countryCode}
                                onChange={teamhandleInputChange}
                                className={cn(
                                    "px-3 py-3 rounded-l-lg border-r-0 border",
                                    "bg-gray-50 border-gray-300 text-gray-500 font-outfit",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
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
                                required={true}
                                value={formData.phone}
                                onChange={teamhandleInputChange}
                                placeholder="Phone Number"
                                className={cn(
                                    "flex-1 px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200",
                                    "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                    "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                                )}
                            />
                        </div>
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
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            required={true}
                            onChange={teamhandleInputChange}
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit text-gray-500",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                            )}
                        >
                            {countryOptions.map(country => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
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
                            onChange={teamhandleInputChange}
                            placeholder="Dubai"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border transition-colors duration-200",
                                "bg-gray-50 border-gray-300 font-outfit placeholder-[#757575]",
                                "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                            )}
                        />
                    </div>
                </div>

                {/* Interests */}
                <div>
                    <label className="block text-sm font-medium mb-4 font-outfit text-black">
                        I'm interested in...
                    </label>
                    {/* Desktop version (1024px and above) - Keep existing grid layout */}
                    <div className="hidden lg:block space-y-2 mr-10">
                        {/* First row - 4 buttons */}
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
                                            ? "gradient-bg text-[#757575] border-transparent"
                                            : "bg-[#F7FAFC] border-[#CBD5E0] text-[#757575] hover:border-[#757575]"
                                    )}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                        {/* Second row - remaining 5 buttons */}
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
                                            ? "gradient-bg text-[#757575] border-transparent"
                                            : "bg-[#F7FAFC] border-[#CBD5E0] text-[#757575] hover:border-[#757575]"
                                    )}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet version (below 1024px) - Flexible wrapping layout */}
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
                                        ? "gradient-bg text-[#757575] border-transparent"
                                        : "bg-[#F7FAFC] border-[#CBD5E0] text-[#757575] hover:border-[#757575]"
                                )}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>


                {/* Budget */}
                <div>
                    <label className="block text-sm font-medium mb-4 font-outfit text-black">
                        Project Budget (USD)
                    </label>
                    {/* Desktop version (1024px and above) - Single row layout */}
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
                                            ? "gradient-bg text-[#757575] border-transparent"
                                            : "bg-[#F7FAFC] border-[#CBD5E0] text-[#757575] hover:border-[#757575]"
                                    )}
                                >
                                    {budget}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet version (below 1024px) - Flexible wrapping layout */}
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
                                        ? "gradient-bg text-[#757575] border-transparent"
                                        : "bg-[#F7FAFC] border-[#CBD5E0] text-[#757575] hover:border-[#757575]"
                                )}
                            >
                                {budget}
                            </button>
                        ))}
                    </div>

                    {/*<p className="text-sm text-black mt-2 font-outfit">*/}
                    {/*    This is the minimum starting price for any project. The final price will be determined based on the*/}
                    {/*    project scope and timelines.*/}
                    {/*</p>*/}
                </div>

                {/* Project Description */}
                <div>
                    <label
                        htmlFor="projectDescription"
                        className="block text-sm font-medium mb-2 font-outfit text-black"
                    >
                        Tell us more about your project
                    </label>
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={6}
                        value={formData.projectDescription}
                        onChange={teamhandleInputChange}
                        placeholder="Something about your great idea..."
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none",
                            "bg-[#F7FAFC] border-[#CBD5E0] font-outfit placeholder-[#757575]",
                            "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:border-transparent"
                        )}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                    <button
                        type="submit"
                        className={cn(
                            "gradient-bg text-white px-8 py-3 rounded-lg font-medium",
                            "hover:shadow-lg transition-shadow duration-200 font-outfit",
                            "focus:outline-none focus:ring-1 focus:ring-[#604CC3] focus:ring-offset-2"
                        )}
                    >
                        Submit the request
                    </button>
                </div>
            </form>
        </section>
    );
};

export default teamContactForm;
