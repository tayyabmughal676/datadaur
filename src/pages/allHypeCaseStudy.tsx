// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import AllHypeCaseStudyHero from "../components/allHypeHero.tsx";
import AllHypeContent from "../components/allHypeContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const AllHypeCase = () => {

    // useEffect(() => {
    //     setPageTitle("All Hype | Case Study");
    // }, []);

    return (
        <>
            <Helmet>
                <title>All Hype | UX/UI Case Study for a Travel Itinerary App</title>
                <meta
                    name="description"
                    content="Redesigned SocialPro’s reporting workflows to improve usability, reduce submission time, and boost platform adoption across $10B+ in projects."
                />
            </Helmet>
            <div>
                <Navbar/>
                <AllHypeCaseStudyHero/>
                <AllHypeContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
