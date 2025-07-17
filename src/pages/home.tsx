import Navbar from "../components/navBar.tsx";
import Hero from "../components/indexHero.tsx";
import ProductLifeCycle from "../components/indexProductLifeCycle.tsx";
import ServiceWeOffer from "../components/IndexServiceWeOffer.tsx";
import PaymentOption from "../components/indexPaymentOption.tsx";
import TeamSection from "../components/indexTeamSection.tsx";
import ContactForm from "../components/indexContactForm.tsx";
import WhyDataDaur from "../components/indexWhyDataDaur.tsx";
// import DataDaurLogoImg from "../components/indexDataDaurImg.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const Home = () => {
    return (
        <>
            <Helmet>
                {/* === Core SEO === */}
                <title>DataDaur | AI Consulting & Development in Dubai</title>
                <meta
                    name="description"
                    content="DataDaur delivers AI-powered development, mobile apps, SaaS, and custom digital solutions for Fintech, Edutech, Healthtech, and more. Book your free 30-min consultation."
                />
                <link rel="canonical" href="https://datadaur.com/"/>

                {/* === Open Graph === */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/"/>
                <meta property="og:title" content="DataDaur | AI Consulting & Development in Dubai"/>
                <meta
                    property="og:description"
                    content="DataDaur delivers AI-powered development, mobile apps, SaaS, and custom digital solutions. Free 30-min consultation."
                />
                <meta property="og:image" content="https://datadaur.com/og-cover.png"/>
                <meta property="og:image:alt" content="DataDaur AI solutions preview"/>

                {/* === Twitter === */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/"/>
                <meta name="twitter:title" content="DataDaur | AI Consulting & Development in Dubai"/>
                <meta
                    name="twitter:description"
                    content="AI, web, mobile & SaaS solutions for Fintech, Edutech, Healthtech. Start with a free consultation."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-cover.png"/>
                <meta name="twitter:image:alt" content="DataDaur AI solutions preview"/>

                {/* === Structured Data (JSON-LD) === */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "DataDaur",
                        "url": "https://datadaur.com",
                        "description": "AI-powered development, mobile apps, SaaS and custom digital solutions.",
                        "publisher": {
                          "@type": "Organization",
                          "name": "DataDaur",
                          "logo": {
                            "@type": "ImageObject",
                            "url": "https://datadaur.com/logo.svg"
                          }
                        },
                        "potentialAction": {
                          "@type": "SearchAction",
                          "target": "https://datadaur.com/search?q={search_term_string}",
                          "query-input": "required name=search_term_string"
                        }
                      }
                   `}
                </script>
            </Helmet>

            <div>
                <Navbar/>
                <Hero/>
                <ProductLifeCycle/>
                <ServiceWeOffer/>
                <PaymentOption/>
                <WhyDataDaur/>
                <TeamSection/>
                <ContactForm/>
                {/*<DataDaurLogoImg />*/}
                <FooterCompo/>
            </div>
        </>

    );
};

