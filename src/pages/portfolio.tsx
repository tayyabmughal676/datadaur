import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import PortHero from "../components/portHero.tsx";
import OurWork from "../components/portOurWork.tsx";
import FooterCompo from "../components/footer.tsx";



export const Portfolio = () => {

    useEffect(() => {
        setPageTitle("Portfolio");
    }, []);

    return (
        <div>
            <Navbar />
            <PortHero />
            <OurWork />
            <FooterCompo />
        </div>
    );
};


