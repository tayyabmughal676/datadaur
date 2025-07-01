import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import SaveInGoldHero from "../components/saveInGoldCSHero.tsx";
import SaveInGoldContent from "../components/saveInGoldContent.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const SaveInGoldCase = () => {

    useEffect(() => {
        setPageTitle("Save In Gold | Case Study");
    }, []);

    return (
        <div>
            <Navbar />
            <SaveInGoldHero />
            <SaveInGoldContent />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};
