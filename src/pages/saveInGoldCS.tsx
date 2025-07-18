import Navbar from "../components/navBar.tsx";
import SaveInGoldHero from "../components/saveInGoldCSHero.tsx";
import SaveInGoldContent from "../components/saveInGoldContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';

export const SaveInGoldCase = () => {
    return (
        <>
            <Helmet>
                <title>SaveInGold Case Study | FinTech UX/UI Redesign by DataDaur</title>
                <meta name="description"
                      content="See how DataDaur redesigned SaveInGold’s gold-trading app—cutting drop-offs 40 % with in-app onboarding and a gold-linked debit card."/>
                <link rel="canonical" href="https://www.datadaur.com/save-in-gold-case-study"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://www.datadaur.com/save-in-gold-case-study"/>
                <meta property="og:title" content="SaveInGold Case Study | FinTech UX/UI Redesign"/>
                <meta property="og:description"
                      content="From cluttered flows to 5-star ratings—our UX/UI overhaul for SaveInGold boosted conversions and user trust."/>
                <meta property="og:image" content="https://www.datadaur.com/og-save-in-gold.png"/>
                <meta property="og:image:alt" content="SaveInGold app before-and-after screenshots"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:title" content="SaveInGold Case Study | FinTech UX/UI Redesign"/>
                <meta name="twitter:description"
                      content="40 % drop-off reduction through UX research, wireframes & gold-linked debit card feature."/>
                <meta name="twitter:image" content="https://www.datadaur.com/og-save-in-gold.png"/>

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context":"https://schema.org",
                          "@type":"Article",
                          "headline":"SaveInGold UAE FinTech App UX/UI Case Study",
                          "description":"FinTech mobile-app redesign that cut onboarding drop-offs by 40 %.",
                          "image":"https://www.datadaur.com/og-save-in-gold.png",
                          "url":"https://www.datadaur.com/save-in-gold-case-study",
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
                <SaveInGoldHero/>
                <SaveInGoldContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
