import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import TeamHero from "../components/teamHero.tsx";
import OurTeamSection from "../components/teamOurTm.tsx";



import FooterCompo from "../components/footer.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";


export const Team = () => {

    useEffect(() => {
        setPageTitle("Our Team");
    }, []);

    return (
        <div>
            <Navbar />
            <TeamHero />
            <OurTeamSection />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};


