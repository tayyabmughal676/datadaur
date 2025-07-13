import Navbar from "../components/navBar.tsx";
import NotFoundSection from "../components/notFoundAll.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet-async";

export const NotFound = () => (
    <>
        <Helmet>
            <title>404 – Page Not Found | DataDaur</title>
            <meta name="description"
                  content="The page you’re looking for doesn’t exist. Let us help you get back on track."/>
            <meta name="robots" content="noindex, follow"/>
        </Helmet>

        <Navbar/>
        <NotFoundSection/>
        <FooterCompo/>
    </>
);
