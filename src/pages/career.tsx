import Navbar from "../components/navBar.tsx";
import CareerHero from "../components/careerHero.tsx";
import CareerIntro from "../components/careerIntro.tsx";
import CoreServices from "../components/careerCoreServices.tsx";
import IndusWeServe from "../components/careerIndusWeServe.tsx";

import FooterCompo from "../components/footer.tsx";


export const Career = () => {
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