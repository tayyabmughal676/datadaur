import Navbar from "../components/navBar.tsx";
import AllHypeCaseStudyHero from "../components/allHypeHero.tsx";
import AllHypeContent from "../components/allHypeContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const AllHypeCase = () => {
    return (
        <>
            <Helmet>
                <title>All Hype Case Study | Travel Itinerary App UX/UI</title>
                <meta name="description"
                      content="End-to-end UX/UI for All Hype—an intuitive travel-planning app with real-time navigation, itinerary reuse, and seamless sharing."/>
                <link rel="canonical" href="https://www.datadaur.com/all-hype-case-study"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://www.datadaur.com/all-hype-case-study"/>
                <meta property="og:title" content="All Hype Travel App UX/UI Case Study"/>
                <meta property="og:description"
                      content="From sketches to 5-star ratings—see how we crafted an intuitive travel-planning experience."/>
                <meta property="og:image" content="https://www.datadaur.com/og-all-hype.png"/>
                <meta property="og:image:alt" content="All Hype app high-fidelity screens"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:title" content="All Hype Travel App UX/UI Case Study"/>
                <meta name="twitter:description"
                      content="Real-time navigation, reusable itineraries & seamless sharing—crafted for modern travellers."/>
                <meta name="twitter:image" content="https://www.datadaur.com/og-all-hype.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context":"https://schema.org",
                          "@type":"Article",
                          "headline":"All Hype Travel App UX/UI Case Study",
                          "description":"Complete UX/UI design journey for an intuitive travel-planning application.",
                          "image":"https://www.datadaur.com/og-all-hype.png",
                          "url":"https://www.datadaur.com/all-hype-case-study",
                          "author":{
                            "@type":"Organization",
                            "name":"DataDaur",
                            "url":"https://www.datadaur.com"
                          },
                          "publisher":{
                            "@type":"Organization",
                            "name":"DataDaur",
                            "logo":{
                              "@type":"ImageObject",
                              "url":"https://www.datadaur.com/logo.svg"
                            }
                          },
                        }
                    `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <AllHypeCaseStudyHero/>
                <AllHypeContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
