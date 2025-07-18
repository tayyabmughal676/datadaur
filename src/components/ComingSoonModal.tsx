import React from 'react';

interface ComingSoonModalProps {
    onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({onClose}) => {
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>

                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                    Great Things Are Coming!
                </h2>

                <p className="text-gray-600 text-base sm:text-lg mb-8">
                    We're currently building our dedicated careers page to bring you exciting opportunities. Stay tuned
                    for new job openings and be a part of our journey.
                </p>

                <button
                    onClick={onClose}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                    Got it, thanks!
                </button>
            </div>
        </div>
    );
};

export default ComingSoonModal;
