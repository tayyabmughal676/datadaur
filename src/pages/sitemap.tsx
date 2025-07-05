import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import SitemapHero from "../components/sitemapHero.tsx";
import SitemapContent from "../components/sitemapContent.tsx";
import FooterCompo from "../components/footer.tsx";


export const SitemapPage = () => {

    useEffect(() => {
        setPageTitle("Privacy Policy");
    }, []);

    return (
        <div>
            <Navbar />
            <SitemapHero />
            <SitemapContent />
            <FooterCompo />
        </div>
    );
};