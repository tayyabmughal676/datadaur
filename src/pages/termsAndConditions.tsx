import Navbar from "../components/navBar.tsx";
import FooterCompo from "../components/footer.tsx";
import TermsHero from "../components/termsHero.tsx";
import TermsContent from "../components/termsContent.tsx";
import {Helmet} from 'react-helmet-async';

export const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | DataDaur – Trusted Digital Solutions Provider</title>
                <meta
                    name="description"
                    content="Review DataDaur’s Terms & Conditions to understand the rules, responsibilities, and legal agreements for using our website and services."
                />
            </Helmet>
            <div>
                <Navbar/>
                <TermsHero/>
                <TermsContent/>
                <FooterCompo/>
            </div>
        </>

    );
};
