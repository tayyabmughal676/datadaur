import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import FarooHero from "../components/farooCSHero.tsx";
import FarooContent from "../components/farooCSContent.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const FarooCase = () => {

    useEffect(() => {
        setPageTitle("Faroo | Case Study");
    }, []);

    return (
        <div>
            <Navbar />
            <FarooHero />
            <FarooContent />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};
