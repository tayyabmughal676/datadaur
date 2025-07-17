import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {Home} from "./pages/home.jsx";
import {Portfolio} from "./pages/portfolio.tsx";
import {Team} from "./pages/team.tsx";
import {About} from "./pages/about.tsx";
import {Contact} from "./pages/contact.tsx";
import {Privacy} from "./pages/privacyPolicy.tsx";
import {Terms} from "./pages/termsAndConditions.tsx";
import {Partners} from "./pages/partners.tsx";
import {Career} from "./pages/career.tsx";
import {SitemapPage} from "./pages/sitemap.tsx";
import {SaveInGoldCase} from "./pages/saveInGoldCS.tsx"
import {SocialproCase} from "./pages/socialproCaseStudy.tsx";
import {AllHypeCase} from "./pages/allHypeCaseStudy.tsx";
import {FarooCase} from "./pages/farooCaseStudy.tsx";
import {NotFound} from "./pages/notFound.tsx";
import WhatsAppSticky from './components/WhatsAppSticky';




function App() {
    const recaptchaV3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;

     if (!recaptchaV3SiteKey) {
         console.error("Fatal: VITE_RECAPTCHA_V3_SITE_KEY is not defined in .env");
         return <div>Configuration error: Application cannot start.</div>;
     }

     return (

             <GoogleReCaptchaProvider reCaptchaKey={recaptchaV3SiteKey}>
                 <BrowserRouter>

                     <Routes>
                         <Route index element={<Home />} />
                         <Route path="/portfolio" element={<Portfolio />} />
                         <Route path="/team" element={<Team />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/contact-us" element={<Contact />} />
                         <Route path="/privacy-policy" element={<Privacy />} />
                         <Route path="/terms-and-conditions" element={<Terms />} />
                         <Route path="/partnership" element={<Partners />} />
                         <Route path="/careers" element={<Career />} />
                         <Route path="/sitemap" element={<SitemapPage />} />
                         <Route path="/save-in-gold-case-study" element={<SaveInGoldCase />} />
                         <Route path="/socialpro-case-study" element={<SocialproCase />} />
                         <Route path="/all-hype-case-study" element={<AllHypeCase />} />
                         <Route path="/faroo-case-study" element={<FarooCase />} />
                         <Route path="*" element={<NotFound />} />
                     </Routes>
                 </BrowserRouter>
                 <WhatsAppSticky />

             </GoogleReCaptchaProvider>
    )
}

export default App
