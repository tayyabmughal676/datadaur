// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import PrivacyHero from "../components/privacyHero.tsx";
import PrivacyContent from "../components/privacyContent.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Privacy = () => {

    // useEffect(() => {
    //     setPageTitle("Privacy Policy");
    // }, []);

    return (
        <>
            <Helmet>
                <title>Privacy Policy | DataDaur – Your Data, Our Responsibility</title>
                <meta
                    name="description"
                    content="Read DataDaur's Privacy Policy to learn how we collect, use, and protect your personal data. We’re committed to transparency, security, and compliance."
                />
            </Helmet>
            <div>
                <Navbar />
                <PrivacyHero />
                <PrivacyContent />
                <FooterCompo />
            </div>
        </>
    );
};