import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import PartnersHero from "../components/partnersHero.tsx";
import PartnersWith from "../components/partnersWithDataDaur.tsx";
import FooterCompo from "../components/footer.tsx";



export const Partners = () => {

    useEffect(() => {
        setPageTitle("Our Partners");
    }, []);

    return (
        <div>
            <Navbar />
            <PartnersHero />
            <PartnersWith />
            <FooterCompo />
        </div>
    );
};
