import Navbar from "../components/navBar.tsx";
import CareerHero from "../components/careerHero.tsx";
import CareerIntro from "../components/careerIntro.tsx";
import CoreServices from "../components/careerCoreServices.tsx";
import IndusWeServe from "../components/careerIndusWeServe.tsx";

import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Career = () => {


    return (
        <>
            <Helmet>
                <title>Careers at DataDaur | Join Our AI & Tech Innovation Team</title>
                <meta
                    name="description"
                    content="Build your future with DataDaur. We're hiring developers, designers, and AI experts to create impactful software solutions. Apply now and grow with us."
                />
            </Helmet>
            <div>
                <Navbar/>
                <CareerHero/>
                <CareerIntro/>
                <CoreServices/>
                <IndusWeServe/>
                <FooterCompo/>
            </div>
        </>
    );
};
