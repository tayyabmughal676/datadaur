import Navbar from "../components/navBar.tsx";
import AboutHero from "../components/aboutHero.tsx";
import AboutOurStory from "../components/aboutOurStory.tsx";
import IndexTeamSection from "../components/indexTeamSection.tsx";
import IndexWhyDataDaur from "../components/indexWhyDataDaur.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const About = () => {
    return (
        <div>
            <Navbar />
            <AboutHero />
            <AboutOurStory />
            <IndexTeamSection />
            <IndexWhyDataDaur />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};

//hello