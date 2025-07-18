import Navbar from "../components/navBar.tsx";
import TeamHero from "../components/teamHero.tsx";
import OurTeamSection from "../components/teamOurTm.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';

export const Team = () => {
    return (
        <>
            <Helmet>
                {/* Core SEO */}
                <title>Meet the DataDaur Team | Experts in AI & Digital Design</title>
                <meta
                    name="description"
                    content="Get to know the creative minds behind DataDaur. Our expert team builds AI-powered, user-focused digital solutions with precision and passion."
                />
                <link rel="canonical" href="https://datadaur.com/team"/>

                {/* Open Graph */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="DataDaur"/>
                <meta property="og:url" content="https://datadaur.com/team"/>
                <meta property="og:title" content="Meet the DataDaur Team | Experts in AI & Digital Design"/>
                <meta
                    property="og:description"
                    content="Discover the DataDaur team—UX/UI designers, AI engineers & strategists delivering award-winning digital products."
                />
                <meta property="og:image" content="https://datadaur.com/og-team.png"/>
                <meta property="og:image:alt" content="DataDaur team portrait"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@datadaur"/>
                <meta name="twitter:creator" content="@datadaur"/>
                <meta name="twitter:url" content="https://datadaur.com/team"/>
                <meta name="twitter:title" content="Meet the DataDaur Team | Experts in AI & Digital Design"/>
                <meta
                    name="twitter:description"
                    content="Meet the talented team behind DataDaur’s AI-driven digital solutions."
                />
                <meta name="twitter:image" content="https://datadaur.com/og-team.png"/>

                {/* Team Structured Data */}
                <script type="application/ld+json">
                    {`
                      {
                        "@context":"https://schema.org",
                        "@type":"AboutPage",
                        "name":"Meet the DataDaur Team",
                        "description":"Learn about the DataDaur experts who build AI-powered, user-focused digital solutions.",
                        "url":"https://datadaur.com/team",
                        "mainEntity":{
                          "@type":"Organization",
                          "name":"DataDaur",
                          "url":"https://datadaur.com",
                          "logo":"https://datadaur.com/logo.svg",
                          "founder":{
                            "@type":"Person",
                            "name":"Tayyab Mughal"
                          },
                          "member":[
                            {
                              "@type":"Person",
                              "name":"Tayyab Mughal",
                              "jobTitle":"Chief AI Officer"
                            },
                            {
                              "@type":"Person",
                              "name":"Asim Qamar",
                              "jobTitle":"Co-Founder"
                            }
                          ]
                        }
                      }
                    `}
                </script>
            </Helmet>
            <div>
                <Navbar/>
                <TeamHero/>
                <OurTeamSection/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};


