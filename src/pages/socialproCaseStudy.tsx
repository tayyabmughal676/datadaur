import Navbar from "../components/navBar.tsx";
import SocialProHero from "../components/socialproHero.tsx";
import SocialProContent from "../components/socialProContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';


export const SocialProCase = () => {
    return (
        <>
            <Helmet>
                <title>SocialPro Case Study | SaaS Platform for Social Procurement Reporting</title>
                <meta name="description"
                      content="How DataDaur improved SocialPro’s SaaS UX—boosting user engagement 25 % and cutting report time 30 % across $10 B+ projects."/>
                <link rel="canonical" href="https://www.datadaur.com/socialpro-case-study"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://www.datadaur.com/socialpro-case-study"/>
                <meta property="og:title" content="SocialPro SaaS UX Case Study"/>
                <meta property="og:description"
                      content="25 % higher engagement & 30 % faster reporting—see our SaaS UX overhaul for SocialPro."/>
                <meta property="og:image" content="https://www.datadaur.com/og-socialpro.png"/>
                <meta property="og:image:alt" content="SocialPro dashboard redesign"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:title" content="SocialPro SaaS UX Case Study"/>
                <meta name="twitter:description"
                      content="30 % faster reporting & 25 % engagement boost via user-centered design."/>
                <meta name="twitter:image" content="https://www.datadaur.com/og-socialpro.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context":"https://schema.org",
                          "@type":"Article",
                          "headline":"SocialPro SaaS UX Case Study",
                          "description":"User-centered redesign that increased engagement 25 % and reduced report time 30 %.",
                          "image":"https://www.datadaur.com/og-socialpro.png",
                          "url":"https://www.datadaur.com/socialpro-case-study",
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
                <SocialProHero/>
                <SocialProContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
