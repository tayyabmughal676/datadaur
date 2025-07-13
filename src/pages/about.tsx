import Navbar from "../components/navBar.tsx";
import AboutHero from "../components/aboutHero.tsx";
import AboutOurStory from "../components/aboutOurStory.tsx";
import IndexWhyDataDaur from "../components/indexWhyDataDaur.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import FooterCompo from "../components/footer.tsx";
import {Helmet} from "react-helmet";


export const About = () => {


    return (
        <>
            <Helmet>
                <title>About DataDaur | AI-Driven Tech Solutions in the UAE</title>
                <meta
                    name="description"
                    content="Learn how DataDaur delivers smart, scalable, AI-powered digital solutions. We turn data into strategy to help businesses grow with confidence."
                />
            </Helmet>
            <div>
                <Navbar/>
                <AboutHero/>
                <AboutOurStory/>
                <IndexWhyDataDaur/>
                <IndexContactForm/>
                <FooterCompo/>
            </div>
        </>
    );
};
