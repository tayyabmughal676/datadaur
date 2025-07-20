import express from 'express';
import axios from 'axios';
import cors from 'cors';
import 'dotenv/config'; // Allows reading from .env file at the project root

const app = express();

// Middleware
app.use(express.json());

// Configure CORS to allow requests only from your frontend domain
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? 'https://www.datadaur.com' // Your production frontend URL
        : 'http://localhost:5173'   // Your development frontend URL
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;
const RECAPTCHA_V3_SECRET_KEY = process.env.VITE_RECAPTCHA_V3_SECRET_KEY;

if (!RECAPTCHA_V3_SECRET_KEY) {
    console.error("FATAL: VITE_RECAPTCHA_V3_SECRET_KEY is not defined.");
    process.exit(1);
}

app.post('/api/contact', async (req, res) => {
    const { recaptchaToken, ...formData } = req.body;

    if (!recaptchaToken) {
        return res.status(400).json({ success: false, message: 'reCAPTCHA token is missing.' });
    }

    try {
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_V3_SECRET_KEY}&response=${recaptchaToken}`;
        const response = await axios.post(googleVerifyUrl);
        const { success, score } = response.data;

        if (success && score >= 0.5) {
            console.log('reCAPTCHA verified. Form data:', formData);
            // TODO: Add your logic to send an email (e.g., using Nodemailer)
            return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
        } else {
            return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
        }
    } catch (error) {
        console.error('Server error during reCAPTCHA verification:', error);
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});