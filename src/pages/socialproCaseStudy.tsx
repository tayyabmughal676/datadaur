import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import SocialProHero from "../components/socialproHero.tsx";
import SocialProContent from "../components/socialProContent.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const SocialproCase = () => {

    useEffect(() => {
        setPageTitle("Socialpro | Case Study");
    }, []);

    return (
        <div>
            <Navbar />
            <SocialProHero />
            <SocialProContent />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};
