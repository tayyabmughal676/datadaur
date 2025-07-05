// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import SaveInGoldHero from "../components/saveInGoldCSHero.tsx";
import SaveInGoldContent from "../components/saveInGoldContent.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const SaveInGoldCase = () => {

    // useEffect(() => {
    //     setPageTitle("Save In Gold | Case Study");
    // }, []);

    return (
        <>
            <Helmet>
                <title>SaveInGold App | UX/UI Redesign Case Study</title>
                <meta
                    name="description"
                    content="Redesigned the SaveInGold app to improve onboarding, user trust, and introduce a gold-linked debit card."
                />
            </Helmet>
            <div>
                <Navbar />
                <SaveInGoldHero />
                <SaveInGoldContent />
                <IndexContactForm />
                <FooterCompo />
            </div>
        </>
    );
};
