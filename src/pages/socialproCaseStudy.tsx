// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import SocialProHero from "../components/socialproHero.tsx";
import SocialProContent from "../components/socialProContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const SocialProCase = () => {

    // useEffect(() => {
    //     setPageTitle("Socialpro | Case Study");
    // }, []);

    return (
        <>
            <Helmet>
                <title>SocialPro UX Case Study | Streamlining Social Procurement Reporting</title>
                <meta
                    name="description"
                    content="Redesigned SocialPro’s reporting workflows to improve usability, reduce submission time, and boost platform adoption across $10B+ in projects."
                />
            </Helmet>
            <div>
                <Navbar/>
                <SocialProHero/>
                <SocialProContent/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
