// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import FarooHero from "../components/farooCSHero.tsx";
import FarooContent from "../components/farooCSContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const FarooCase = () => {

    // useEffect(() => {
    //     setPageTitle("Faroo | Case Study");
    // }, []);

    return (
        <>
            <Helmet>
                <title>Faroo | UX Case Study for a Pet Grooming Booking Platform</title>
                <meta
                    name="description"
                    content="Redesigned Faroo’s booking and service flow to simplify pet grooming appointments, improve user trust, and boost groomer efficiency by 30%."
                />
            </Helmet>
            <div>
                <Navbar />
                <FarooHero />
                <FarooContent />
                <IndexContactForm />
                <FooterCompo />
            </div>
        </>
    );
};
