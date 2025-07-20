import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.svg';

const WHATSAPP_NUMBER = '971552025311';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppSticky: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            bottom: '100px',
            right: '18px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                borderRadius: '50%',
                background: '#E0E9F7',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 0.2s',
                animation: 'whatsapp-bounce 1.2s infinite',
                position: 'relative',
            }}
        >
            <img src={whatsappIcon} alt="WhatsApp"
                 style={{width: 36, height: 36, display: 'block', position: 'relative', zIndex: 2}}/>
        </a>
        <style>{`
      @keyframes whatsapp-bounce {
        0%, 100% { transform: translateY(0); }
        20% { transform: translateY(-8px); }
        40% { transform: translateY(0); }
        60% { transform: translateY(-4px); }
        80% { transform: translateY(0); }
      }
    `}</style>
    </div>
);

export default WhatsAppSticky;
