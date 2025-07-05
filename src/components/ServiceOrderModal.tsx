import React, { useState } from 'react';
import { z } from 'zod';
import axios from 'axios';

interface ServiceOrderModalProps {
    onClose: () => void;
    serviceTitle: string;
    serviceDescription: string[];
}

const serviceOrderSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(7, 'Phone number must be at least 7 digits'),
    startDate: z.string().min(1, 'Start date is required'),
    deadline: z.string().min(1, 'Deadline is required'),
    projectDetails: z.string().min(10, 'Project details must be at least 10 characters'),
});

const ServiceOrderModal: React.FC<ServiceOrderModalProps> = ({ onClose, serviceTitle, serviceDescription }) => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        startDate: '',
        deadline: '',
        projectDetails: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        try {
            serviceOrderSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formErrors: Record<string, string> = {};
                error.errors.forEach(err => {
                    if (err.path) {
                        formErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

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
                setSubmitSuccess(true);
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                throw new Error(response.data.message || 'Submission failed');
            }
        } catch (error) {
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
                ? error.response.data.message
                : 'An error occurred while submitting the form. Please try again later.';
            setErrors({ form: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {submitSuccess ? (
                    <div className="text-center">
                        <svg className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Order Submitted!</h3>
                        <p className="text-gray-600 mb-4">Thank you for your interest. We'll contact you soon to discuss the details.</p>
                        <button onClick={onClose} className="bg-[#604CC3] text-white px-6 py-2 rounded-lg hover:bg-[#2E245D] transition-colors">
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black">{serviceTitle}</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Service Details:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {serviceDescription.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
                                    placeholder="97112345678 (without any -,+, or space)"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-black mb-2">Estimated Start Date *</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
                                    />
                                    {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>}
                                </div>

                                <div>
                                    <label htmlFor="deadline" className="block text-sm font-medium text-black mb-2">Deadline *</label>
                                    <input
                                        type="date"
                                        id="deadline"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
                                    />
                                    {errors.deadline && <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="projectDetails" className="block text-sm font-medium text-black mb-2">Project Details *</label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    rows={4}
                                    value={formData.projectDetails}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.projectDetails ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
                                    placeholder="Please provide details about your project requirements..."
                                />
                                {errors.projectDetails && <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Order'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceOrderModal;