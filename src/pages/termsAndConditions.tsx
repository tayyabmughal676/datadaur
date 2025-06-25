import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import FooterCompo from "../components/footer.tsx";
import TermsHero from "../components/termsHero.tsx";
import TermsContent from "../components/termsContent.tsx";


export const Terms = () => {

    useEffect(() => {
        setPageTitle("Terms & Conditions");
    }, []);

    return (
        <div>
            <Navbar />
            <TermsHero />
            <TermsContent />
            <FooterCompo />
        </div>
    );
};


//hello