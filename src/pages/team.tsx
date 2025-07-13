// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import TeamHero from "../components/teamHero.tsx";
import OurTeamSection from "../components/teamOurTm.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Team = () => {

    // useEffect(() => {
    //     setPageTitle("Our Team");
    // }, []);

    return (
        <>
            <Helmet>
                <title>Meet the DataDaur Team | Experts in AI & Digital Design</title>
                <meta
                    name="description"
                    content="Get to know the creative minds behind DataDaur. Our expert team builds AI-powered, user-focused digital solutions with precision and passion."
                />
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


