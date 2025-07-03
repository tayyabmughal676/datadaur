import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import AllHypeCaseStudyHero from "../components/allHypeHero.tsx";
import AllHypeContent from "../components/allHypeContent.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const AllHypeCase = () => {

    useEffect(() => {
        setPageTitle("All Hype | Case Study");
    }, []);

    return (
        <div>
            <Navbar />
            <AllHypeCaseStudyHero />
            <AllHypeContent />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};
