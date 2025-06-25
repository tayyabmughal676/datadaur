import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import ContactHero from "../components/contactHero.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const Contact = () => {

    useEffect(() => {
        setPageTitle("Contact Us");
    }, []);

    return (
        <div>
            <Navbar />
            <ContactHero />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};

//hello