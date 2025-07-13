// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import PartnersHero from "../components/partnersHero.tsx";
import PartnersWith from "../components/partnersWithDataDaur.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Partners = () => {

    // useEffect(() => {
    //     setPageTitle("Our Partners");
    // }, []);

    return (
        <>
            <Helmet>
                <title>Partner with DataDaur | B2B & B2C Collaboration Models</title>
                <meta
                    name="description"
                    content="Join forces with DataDaur for B2B and B2C partnerships. Offer white-label solutions, data strategies, and cloud services tailored to your goals."
                />
            </Helmet>
            <div>
                <Navbar/>
                <PartnersHero/>
                <PartnersWith/>
                <FooterCompo/>
            </div>
        </>
    );
};
