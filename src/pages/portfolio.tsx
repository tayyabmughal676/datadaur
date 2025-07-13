// import { useEffect } from "react";
// import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import PortHero from "../components/portHero.tsx";
import OurWork from "../components/portOurWork.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const Portfolio = () => {

    // useEffect(() => {
    //     setPageTitle("Portfolio");
    // }, []);

    return (
        <>
            <Helmet>
                <title>DataDaur Portfolio | UI/UX Case Studies & Digital Projects</title>
                <meta
                    name="description"
                    content="Explore real-world design solutions across fintech, e-commerce, travel, and social apps. See how we turn ideas into user-focused digital products."
                />
            </Helmet>
            <div>
                <Navbar/>
                <PortHero/>
                <OurWork/>
                <FooterCompo/>
            </div>
        </>
    );
};


