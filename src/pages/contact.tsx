import Navbar from "../components/navBar.tsx";
import ContactHero from "../components/contactHero.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const Contact = () => {
    return (
        <>
            <Helmet>
                {/* --- Core SEO --- */}
                <title>Contact DataDaur | Start Your AI-Powered Project Today</title>
                <meta
                    name="description"
                    content="Have an idea? Let’s talk! Contact DataDaur to discuss your AI, web, mobile, or SaaS project. We specialize in custom software solutions for Fintech, Edutech, Healthtech, and more."
                />
                <link rel="canonical" href="https://datadaur.com/contact-us"/>
                <meta name="robots" content="index, follow"/>

                {/* --- Open Graph --- */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/contact-us"/>
                <meta property="og:title" content="Contact DataDaur | Start Your AI-Powered Project Today"/>
                <meta
                    property="og:description"
                    content="Reach out to DataDaur to explore how AI, web, or mobile development can accelerate your growth. Free consultation available."
                />
                <meta property="og:image" content="https://datadaur.com/og-cover.png"/>
                <meta property="og:image:alt" content="DataDaur - AI consulting services"/>

                {/* --- Twitter --- */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/contact-us"/>
                <meta name="twitter:title" content="Contact DataDaur | Start Your AI-Powered Project Today"/>
                <meta
                    name="twitter:description"
                    content="Let’s collaborate on AI, SaaS, and mobile projects. Contact us for a free consultation."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-cover.png"/>
                <meta name="twitter:image:alt" content="DataDaur - AI consulting services"/>

                {/* --- Structured Data --- */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact DataDaur",
                        "description": "Get in touch with DataDaur for AI, web, mobile, or SaaS project inquiries.",
                        "url": "https://datadaur.com/contact-us",
                        "mainEntity": {
                          "@type": "Organization",
                          "@id": "https://datadaur.com#org",
                          "name": "DataDaur",
                          "url": "https://datadaur.com",
                          "logo": "https://datadaur.com/logo.svg",
                          "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "Sales & Support",
                            "email": "contact@datadaur.com",
                            "url": "https://datadaur.com/contact-us"
                          }
                        }
                      }
                   `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <ContactHero/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
