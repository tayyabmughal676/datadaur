import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import CareerHero from "../components/careerHero.tsx";
import CareerIntro from "../components/careerIntro.tsx";
import CoreServices from "../components/careerCoreServices.tsx";
import IndusWeServe from "../components/careerIndusWeServe.tsx";

import FooterCompo from "../components/footer.tsx";


export const Career = () => {

    useEffect(() => {
        setPageTitle("Careers");
    }, []);

    return (
        <div>
            <Navbar />
            <CareerHero />
            <CareerIntro />
            <CoreServices />
            <IndusWeServe />
            <FooterCompo />
        </div>
    );
};