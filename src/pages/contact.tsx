// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import ContactHero from "../components/contactHero.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Contact = () => {

    // useEffect(() => {
    //     setPageTitle("Contact Us");
    // }, []);

    return (
        <>
            <Helmet>
                <title>Contact DataDaur | Start Your AI-Powered Project Today</title>
                <meta
                    name="description"
                    content="Have an idea? Let’s talk! Contact DataDaur to discuss your AI, web, or app project. We're here to collaborate and bring your vision to life."
                />
            </Helmet>
            <div>
                <Navbar />
                <ContactHero />
                <IndexContactForm />
                <FooterCompo />
            </div>
        </>
    );
};

//hello