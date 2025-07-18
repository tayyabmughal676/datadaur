import React from 'react';

interface ResumeUploadModalProps {
    onClose: () => void;
}

const ResumeUploadModal: React.FC<ResumeUploadModalProps> = ({onClose}) => {
    return (
        // Backdrop with blur effect, closes modal on click
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            {/* Modal content, stops click from closing */}
            <div
                className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <svg className="w-16 h-16 mx-auto text-[#604CC3] mb-4" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                    Apply Directly via Email
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md mx-auto">
                    Our direct resume upload is currently being upgraded. To ensure we receive your application, please
                    send your resume and portfolio to:
                </p>
                <div className="mb-8">
                    <p className="text-lg sm:text-xl font-semibold text-[#2E245D] bg-gray-100 rounded-lg py-3 px-5 inline-block">
                        contact@datadaur.com
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                    Thanks!
                </button>
            </div>
        </div>
    );
};

export default ResumeUploadModal;


// import React, { useState } from 'react';
// import axios from 'axios';
//
// interface ResumeUploadModalProps {
//     onClose: () => void;
// }
//
// const ResumeUploadModal: React.FC<ResumeUploadModalProps> = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         address: '',
//         age: '',
//         gender: '',
//         working: '',
//         skills: '',
//     });
//     const [resumeFile, setResumeFile] = useState<File | null>(null);
//     const [errors, setErrors] = useState<Record<string, string>>({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitSuccess, setSubmitSuccess] = useState(false);
//
//     // --- FIX 1: Securely load the access key from environment variables ---
//     // This is safer and the correct way to handle secret keys.
//     const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };
//
//     const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };
//
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             const file = e.target.files[0];
//             const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//             const maxSize = 10 * 1024 * 1024; // 10MB
//
//             if (!validTypes.includes(file.type)) {
//                 setErrors(prev => ({ ...prev, resume: 'Please upload a PDF, DOC, or DOCX file only.' }));
//                 return;
//             }
//
//             if (file.size > maxSize) {
//                 setErrors(prev => ({ ...prev, resume: 'File size must be less than 10MB.' }));
//                 return;
//             }
//
//             setResumeFile(file);
//             setErrors(prev => ({ ...prev, resume: '' }));
//         }
//     };
//
//     const validateForm = () => {
//         const newErrors: Record<string, string> = {};
//
//         if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//         else if (formData.firstName.length < 2) newErrors.firstName = 'Name must be at least 2 characters long';
//
//         if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//         else if (formData.lastName.length < 2) newErrors.lastName = 'Name must be at least 2 characters long';
//
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
//
//         // In validateForm function, replace the phone validation with:
//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone number is required';
//         } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
//             newErrors.phone = 'Please enter a valid phone number';
//         }
//
//         if (!formData.address.trim()) newErrors.address = 'Address is required';
//         if (!formData.age) newErrors.age = 'Please select an age range';
//         if (!formData.gender) newErrors.gender = 'Please select a gender';
//         if (!formData.working) newErrors.working = 'Please select employment status';
//         if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
//         else if (formData.skills.length < 10) newErrors.skills = 'Please provide more details about your skills';
//         if (!resumeFile) newErrors.resume = 'Please upload your resume';
//
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!accessKey) {
//             setErrors({ form: 'Form submission is not configured correctly. Missing API key.' });
//             return;
//         }
//         if (!validateForm()) return;
//
//         setIsSubmitting(true);
//
//         try {
//             // Create form data
//             const formDataToSend = new FormData();
//
//             // Add all form fields
//             Object.entries(formData).forEach(([key, value]) => {
//                 formDataToSend.append(key, String(value)); // Convert value to string
//             });
//
//             // Add the file if it exists
//             if (resumeFile) {
//                 formDataToSend.append('resume', resumeFile);
//             }
//
//             // Add required Web3Forms fields
//             formDataToSend.append('access_key', accessKey);
//             formDataToSend.append('subject', `New Resume Submission from ${formData.firstName} ${formData.lastName}`);
//             formDataToSend.append('from_name', 'DataDaur Careers');
//
//             const response = await axios.post('https://api.web3forms.com/submit', formDataToSend, {
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             });
//
//             if (response.data.success) {
//                 setSubmitSuccess(true);
//                 // Close modal after 3 seconds
//                 setTimeout(() => {
//                     onClose();
//                 }, 3000);
//             } else {
//                 throw new Error(response.data.message || 'Submission failed');
//             }
//         } catch (error) {
//             const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
//                 ? error.response.data.message
//                 : 'An error occurred while submitting the form. Please try again later.';
//             setErrors({ form: errorMessage });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
//
//     return (
//         // The backdrop now closes the modal on click for better UX
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
//             {/* By stopping propagation, clicking inside the modal won't close it */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
//                 {submitSuccess ? (
//                     <div className="text-center">
//                         <svg className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                         <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Application Submitted!</h3>
//                         <p className="text-gray-600 mb-4">Thank you for your interest. We'll review your application and get back to you soon.</p>
//                         <button
//                             onClick={onClose}
//                             className="bg-[#604CC3] text-white px-6 py-2 rounded-lg hover:bg-[#2E245D] transition-colors"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 ) : (
//                     <>
//                         {/* The rest of your form JSX remains the same... */}
//                         <div className="flex justify-between items-center mb-6">
//                             <h1 className="text-3xl sm:text-4xl font-bold text-black">Resume Upload</h1>
//                             <button
//                                 onClick={onClose}
//                                 className="text-gray-500 hover:text-gray-700"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                         <p className="text-gray-600 text-base sm:text-lg mb-6">Join our team - we'd love to hear from you!</p>
//
//                         {errors.form && (
//                             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                                 {errors.form}
//                             </div>
//                         )}
//
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Personal Information Section */}
//                             <div className="border-b border-gray-200 pb-6">
//                                 <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 flex items-center">
//                                     <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#604CC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//                                     </svg>
//                                     Personal Information
//                                 </h2>
//
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">First Name *</label>
//                                         <input
//                                             type="text"
//                                             id="firstName"
//                                             name="firstName"
//                                             value={formData.firstName}
//                                             onChange={handleInputChange}
//                                             className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                             placeholder="Enter your first name"
//                                         />
//                                         {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
//                                     </div>
//                                     <div>
//                                         <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">Last Name *</label>
//                                         <input
//                                             type="text"
//                                             id="lastName"
//                                             name="lastName"
//                                             value={formData.lastName}
//                                             onChange={handleInputChange}
//                                             className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                             placeholder="Enter your last name"
//                                         />
//                                         {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
//                                     </div>
//                                 </div>
//
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                     <div>
//                                         <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email Address *</label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleInputChange}
//                                             className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                             placeholder="your.email@example.com"
//                                         />
//                                         {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                     </div>
//                                     <div>
//                                         <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">Phone Number *</label>
//                                         <input
//                                             type="tel"
//                                             id="phone"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleInputChange}
//                                             className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                             placeholder="+1 (555) 123-4567"
//                                         />
//                                         {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                                     </div>
//                                 </div>
//
//                                 <div className="mb-6">
//                                     <label htmlFor="address" className="block text-sm font-medium text-black mb-2">Address *</label>
//                                     <textarea
//                                         id="address"
//                                         name="address"
//                                         rows={3}
//                                         value={formData.address}
//                                         onChange={handleInputChange}
//                                         className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                         placeholder="Enter your full address"
//                                     />
//                                     {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
//                                 </div>
//
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-black mb-4">Age Range *</label>
//                                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                                         {['under-20', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-plus'].map(age => (
//                                             <label key={age} className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                                 <input
//                                                     type="radio"
//                                                     name="age"
//                                                     value={age}
//                                                     checked={formData.age === age}
//                                                     onChange={handleRadioChange}
//                                                     className="sr-only"
//                                                 />
//                                                 <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.age === age ? 'border-[#604CC3]' : 'border-gray-300'}`}>
//                                                     {formData.age === age && <div className="w-2 h-2 rounded-full bg-[#604CC3]"></div>}
//                                                 </div>
//                                                 <span className="text-sm font-medium text-black">
//                                                     {age === 'under-20' ? 'Under 20' :
//                                                         age === '50-plus' ? '50+' :
//                                                             age.replace('-', '-')}
//                                                 </span>
//                                             </label>
//                                         ))}
//                                     </div>
//                                     {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
//                                 </div>
//
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-black mb-4">Gender *</label>
//                                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                                         <label className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="gender"
//                                                 value="male"
//                                                 checked={formData.gender === 'male'}
//                                                 onChange={handleRadioChange}
//                                                 className="sr-only"
//                                             />
//                                             <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.gender === 'male' ? 'border-[#2E245D]' : 'border-gray-300'}`}>
//                                                 {formData.gender === 'male' && <div className="w-2 h-2 rounded-full bg-[#2E245D]"></div>}
//                                             </div>
//                                             <span className="text-sm font-medium text-black">Male</span>
//                                         </label>
//                                         <label className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="gender"
//                                                 value="female"
//                                                 checked={formData.gender === 'female'}
//                                                 onChange={handleRadioChange}
//                                                 className="sr-only"
//                                             />
//                                             <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.gender === 'female' ? 'border-[#2E245D]' : 'border-gray-300'}`}>
//                                                 {formData.gender === 'female' && <div className="w-2 h-2 rounded-full bg-[#2E245D]"></div>}
//                                             </div>
//                                             <span className="text-sm font-medium text-black">Female</span>
//                                         </label>
//                                         <label className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="gender"
//                                                 value="prefer-not-to-say"
//                                                 checked={formData.gender === 'prefer-not-to-say'}
//                                                 onChange={handleRadioChange}
//                                                 className="sr-only"
//                                             />
//                                             <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.gender === 'prefer-not-to-say' ? 'border-[#2E245D]' : 'border-gray-300'}`}>
//                                                 {formData.gender === 'prefer-not-to-say' && <div className="w-2 h-2 rounded-full bg-[#2E245D]"></div>}
//                                             </div>
//                                             <span className="text-sm font-medium text-black">Prefer not to say</span>
//                                         </label>
//                                     </div>
//                                     {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
//                                 </div>
//                             </div>
//
//                             {/* Professional Information Section */}
//                             <div className="border-b border-gray-200 pb-6">
//                                 <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 flex items-center">
//                                     <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#2E245D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
//                                     </svg>
//                                     Professional Information
//                                 </h2>
//
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-black mb-4">Are you currently working? *</label>
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
//                                         <label className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="working"
//                                                 value="yes"
//                                                 checked={formData.working === 'yes'}
//                                                 onChange={handleRadioChange}
//                                                 className="sr-only"
//                                             />
//                                             <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.working === 'yes' ? 'border-[#604CC3]' : 'border-gray-300'}`}>
//                                                 {formData.working === 'yes' && <div className="w-2 h-2 rounded-full bg-[#604CC3]"></div>}
//                                             </div>
//                                             <span className="text-sm font-medium text-black">Yes, I'm currently employed</span>
//                                         </label>
//                                         <label className="relative flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="working"
//                                                 value="no"
//                                                 checked={formData.working === 'no'}
//                                                 onChange={handleRadioChange}
//                                                 className="sr-only"
//                                             />
//                                             <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.working === 'no' ? 'border-[#604CC3]' : 'border-gray-300'}`}>
//                                                 {formData.working === 'no' && <div className="w-2 h-2 rounded-full bg-[#604CC3]"></div>}
//                                             </div>
//                                             <span className="text-sm font-medium text-black">No, I'm looking for opportunities</span>
//                                         </label>
//                                     </div>
//                                     {errors.working && <p className="mt-1 text-sm text-red-600">{errors.working}</p>}
//                                 </div>
//
//                                 <div className="mb-6">
//                                     <label htmlFor="skills" className="block text-sm font-medium text-black mb-2">Technical Skills & Tools *</label>
//                                     <p className="text-sm text-gray-500 mb-3">List the platforms, operating systems, programming languages, architectures, frameworks, and tools you use</p>
//                                     <textarea
//                                         id="skills"
//                                         name="skills"
//                                         rows={4}
//                                         value={formData.skills}
//                                         onChange={handleInputChange}
//                                         className={`w-full px-4 py-3 rounded-lg border ${errors.skills ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#604CC3] focus:border-transparent`}
//                                         placeholder="e.g., JavaScript, React, Node.js, Python, AWS, Docker, PostgreSQL, Git, Linux, Windows, REST APIs, GraphQL..."
//                                     />
//                                     {errors.skills && <p className="mt-1 text-sm text-red-600">{errors.skills}</p>}
//                                 </div>
//                             </div>
//
//                             {/* File Upload Section */}
//                             <div className="pb-6">
//                                 <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 flex items-center">
//                                     <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-[#604CC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
//                                     </svg>
//                                     Upload Your Resume
//                                 </h2>
//
//                                 <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
//                                     <input
//                                         type="file"
//                                         id="resume"
//                                         name="resume"
//                                         accept=".pdf,.doc,.docx"
//                                         onChange={handleFileChange}
//                                         className="hidden"
//                                     />
//                                     {!resumeFile ? (
//                                         <div className="upload-content">
//                                             <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
//                                             </svg>
//                                             <p className="text-base sm:text-lg font-medium text-black mb-2">Click to upload or drag and drop</p>
//                                             <p className="text-sm text-gray-500">PDF, DOC, or DOCX files only (Max 10MB)</p>
//                                         </div>
//                                     ) : (
//                                         <div className="upload-success">
//                                             <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                             </svg>
//                                             <p className="text-base sm:text-lg font-medium text-green-700 mb-2">File uploaded successfully!</p>
//                                             <p className="text-sm text-green-600">{resumeFile.name}</p>
//                                         </div>
//                                     )}
//                                 </label>
//                                 {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume}</p>}
//                             </div>
//
//                             {/* Submit Button */}
//                             <div className="flex justify-center pt-4">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#604CC3] focus:ring-opacity-30 w-full sm:w-auto disabled:opacity-50"
//                                 >
//                                     {isSubmitting ? (
//                                         <>
//                                             <svg className="animate-spin w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Processing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <svg className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                                             </svg>
//                                             Submit Application
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </form>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default ResumeUploadModal;
//
//
//
