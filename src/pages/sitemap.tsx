import Navbar from "../components/navBar.tsx";
import SitemapHero from "../components/sitemapHero.tsx";
import SitemapContent from "../components/sitemapContent.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from 'react-helmet-async';

export const SitemapPage = () => {

    return (
        <>
            <Helmet>
                <title>Sitemap - DataDaur | Navigate Our Digital Ecosystem with Ease</title>
                <meta
                    name="description"
                    content="Discover all DataDaur has to offer — from innovative solutions to real-world case studies. Explore all pages across 4 categories and 5+ years of digital excellence."
                />
            </Helmet>
            <div>
                <Navbar/>
                <SitemapHero/>
                <SitemapContent/>
                <FooterCompo/>
            </div>
        </>

    );
};
