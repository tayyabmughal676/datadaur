import Navbar from "../components/navBar.tsx";
import PortHero from "../components/portHero.tsx";
import OurWork from "../components/portOurWork.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>DataDaur Portfolio | UI/UX Case Studies & Digital Projects</title>
                <meta
                    name="description"
                    content="Explore real-world design solutions across fintech, e-commerce, travel, and social apps. See how we turn ideas into user-focused digital products."
                />
                <link rel="canonical" href="https://datadaur.com/portfolio"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/portfolio"/>
                <meta property="og:title" content="DataDaur Portfolio | UI/UX Case Studies & Digital Projects"/>
                <meta
                    property="og:description"
                    content="Explore real-world design solutions across fintech, e-commerce, travel, and social apps. See how we turn ideas into user-focused digital products."
                />
                <meta property="og:image" content="https://datadaur.com/og-portfolio.png"/>
                <meta property="og:image:alt" content="DataDaur portfolio showcase"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/portfolio"/>
                <meta name="twitter:title" content="DataDaur Portfolio | UI/UX Case Studies & Digital Projects"/>
                <meta
                    name="twitter:description"
                    content="Explore real-world design solutions across fintech, e-commerce, travel, and social apps."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-portfolio.png"/>
                <meta name="twitter:image:alt" content="DataDaur portfolio showcase"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "CollectionPage",
                          "name": "DataDaur Portfolio",
                          "description": "Real-world UI/UX case studies and digital projects across fintech, e-commerce, travel & social apps.",
                          "url": "https://datadaur.com/portfolio",
                          "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "position": 1,
                                "url": "https://www.datadaur.com/save-in-gold-case-study",
                                "name": "SaveInGold – FinTech Mobile App"
                              },
                              {
                                "@type": "ListItem",
                                "position": 2,
                                "url": "https://www.datadaur.com/socialpro-case-study",
                                "name": "SocialPro – Social Procurement SaaS"
                              },
                              {
                                "@type": "ListItem",
                                "position": 3,
                                "url": "https://www.datadaur.com/all-hype-case-study",
                                "name": "All Hype – Travel Itinerary App"
                              },
                              {
                                "@type": "ListItem",
                                "position": 4,
                                "url": "https://www.datadaur.com/faroo-case-study",
                                "name": "Faroo – Pet Grooming Booking App"
                              }
                            ]
                          }
                        }
                  `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <PortHero/>
                <OurWork/>
                <FooterCompo/>
            </div>
        </>
    );
};


