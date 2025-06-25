import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import AboutHero from "../components/aboutHero.tsx";
import AboutOurStory from "../components/aboutOurStory.tsx";
import AboutTeamSection from "../components/aboutTeamSection.tsx";
import IndexWhyDataDaur from "../components/indexWhyDataDaur.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const About = () => {

    useEffect(() => {
        setPageTitle("About Us");
    }, []);

    return (
        <div>
            <Navbar />
            <AboutHero />
            <AboutOurStory />
            <AboutTeamSection />
            <IndexWhyDataDaur />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};
