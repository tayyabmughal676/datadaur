import Navbar from "../components/navBar.tsx";
import AboutHero from "../components/aboutHero.tsx";
import AboutOurStory from "../components/aboutOurStory.tsx";
import IndexWhyDataDaur from "../components/indexWhyDataDaur.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet-async";


export const About = () => {
    return (
        <>
            <Helmet>
                {/* === SEO Core === */}
                <title>About DataDaur | AI-Driven Tech Solutions in the UAE</title>
                <meta
                    name="description"
                    content="Learn how DataDaur delivers smart, scalable, AI-powered digital solutions. We turn data into strategy to help businesses grow with confidence."
                />
                <link rel="canonical" href="https://datadaur.com/about"/>

                {/* === Open Graph / Facebook === */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/about"/>
                <meta property="og:title" content="About DataDaur | AI-Driven Tech Solutions in the UAE"/>
                <meta
                    property="og:description"
                    content="Learn how DataDaur delivers smart, scalable, AI-powered digital solutions. We turn data into strategy to help businesses grow with confidence."
                />
                <meta property="og:image" content="https://datadaur.com/og-about.png"/>
                <meta property="og:image:alt" content="DataDaur team working on AI solutions"/>

                {/* === Twitter === */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/about"/>
                <meta name="twitter:title" content="About DataDaur | AI-Driven Tech Solutions in the UAE"/>
                <meta
                    name="twitter:description"
                    content="Learn how DataDaur delivers smart, scalable, AI-powered digital solutions. We turn data into strategy to help businesses grow with confidence."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-about.png"/>
                <meta name="twitter:image:alt" content="DataDaur team working on AI solutions"/>

                {/* === Wikipedia / AI / LLM hints === */}
                <meta name="description" property="mw:PageProp/shortdesc"
                      content="DataDaur: UAE-based AI consultancy delivering end-to-end digital solutions."/>
                <meta name="license" content="CC-BY-SA-4.0"/>
                <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large"/>
                <meta name="GPTBot" content="index,follow"/>
                <meta name="ClaudeBot" content="index,follow"/>
                <meta name="OAI-SearchBot" content="index,follow"/>

                {/* === Structured Data (JSON-LD) === */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About DataDaur",
                        "description": "Learn how DataDaur delivers smart, scalable, AI-powered digital solutions. We turn data into strategy to help businesses grow with confidence.",
                        "url": "https://datadaur.com/about",
                        "mainEntity": {
                          "@type": "Organization",
                          "@id": "https://datadaur.com#org",
                          "name": "DataDaur",
                          "url": "https://datadaur.com",
                          "logo": "https://datadaur.com/logo.svg",
                          "founder": {
                            "@type": "Person",
                            "name": "Tayyab Mughal"
                          },
                          "sameAs": [
                            "https://www.linkedin.com/company/datadaur",
                            "https://twitter.com/datadaur",
                            "https://www.youtube.com/@DataDaurAISchool"
                          ]
                        }
                      }
                   `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <AboutHero/>
                <AboutOurStory/>
                <IndexWhyDataDaur/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
