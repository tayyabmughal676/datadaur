import Navbar from "../components/navBar.tsx";
import PrivacyHero from "../components/privacyHero.tsx";
import PrivacyContent from "../components/privacyContent.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const Privacy = () => {
    return (
        <>
            <Helmet>
                {/* Core SEO */}
                <title>Partner with DataDaur | B2B & B2C Collaboration Models</title>
                <meta
                    name="description"
                    content="Join forces with DataDaur for B2B and B2C partnerships. Offer white-label solutions, data strategies, and cloud services tailored to your goals."
                />
                <link rel="canonical" href="https://datadaur.com/partners"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/partners"/>
                <meta property="og:title" content="Partner with DataDaur | B2B & B2C Collaboration Models"/>
                <meta
                    property="og:description"
                    content="Explore white-label AI, SaaS, and cloud solutions for B2B & B2C partnerships with DataDaur."
                />
                <meta property="og:image" content="https://datadaur.com/og-partners.png"/>
                <meta property="og:image:alt" content="DataDaur partnership opportunities"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/partners"/>
                <meta name="twitter:title" content="Partner with DataDaur | B2B & B2C Collaboration Models"/>
                <meta
                    name="twitter:description"
                    content="White-label AI, SaaS, and cloud services for B2B & B2C partnerships."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-partners.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context":"https://schema.org",
                        "@type":"WebPage",
                        "name":"Partner with DataDaur",
                        "description":"Explore B2B and B2C partnership models with DataDaur—white-label AI, SaaS, and cloud solutions.",
                        "url":"https://datadaur.com/partners",
                        "mainEntity":{
                          "@type":"Organization",
                          "@id":"https://datadaur.com#org",
                          "name":"DataDaur",
                          "url":"https://datadaur.com",
                          "logo":"https://datadaur.com/logo.svg",
                          "contactPoint":{
                            "@type":"ContactPoint",
                            "contactType":"Partnerships",
                            "email":"hello@datadaur.com",
                            "url":"https://datadaur.com/partners"
                          }
                        }
                      }
                    `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <PrivacyHero/>
                <PrivacyContent/>
                <FooterCompo/>
            </div>
        </>
    );
};
