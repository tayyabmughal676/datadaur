import Navbar from "../components/navBar.tsx";
import FarooHero from "../components/farooCSHero.tsx";
import FarooContent from "../components/farooCSContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const FarooCase = () => {
    return (
        <>
            <Helmet>
                <title>Faroo Case Study | Pet Grooming Booking App UX/UI</title>
                <meta name="description"
                      content="Faroo’s 50 % faster booking & 4.8 ⭐ rating—see how DataDaur redesigned pet-grooming experiences for owners & groomers."/>
                <link rel="canonical" href="https://www.datadaur.com/faroo-case-study"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://www.datadaur.com/faroo-case-study"/>
                <meta property="og:title" content="Faroo Pet Grooming App UX/UI Case Study"/>
                <meta property="og:description"
                      content="50 % faster bookings & 30 % groomer-efficiency boost via UX research and design."/>
                <meta property="og:image" content="https://www.datadaur.com/og-faroo.png"/>
                <meta property="og:image:alt" content="Faroo app screens for pet owners & groomers"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:title" content="Faroo Pet Grooming App UX/UI Case Study"/>
                <meta name="twitter:description"
                      content="From 6-step chaos to one-tap booking—see the UX magic behind Faroo’s 4.8-star app."/>
                <meta name="twitter:image" content="https://www.datadaur.com/og-faroo.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context":"https://schema.org",
                          "@type":"Article",
                          "headline":"Faroo Pet Grooming App UX/UI Case Study",
                          "description":"UX redesign that cut booking time 50 % and raised groomer efficiency 30 %.",
                          "image":"https://www.datadaur.com/og-faroo.png",
                          "url":"https://www.datadaur.com/faroo-case-study",
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
                <FarooHero/>
                <FarooContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
