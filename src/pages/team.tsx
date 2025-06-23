import Navbar from "../components/navBar.tsx";
import TeamHero from "../components/teamHero.tsx";
import OurTeamSection from "../components/teamOurTm.tsx";



import FooterCompo from "../components/footer.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";


export const Team = () => {
    return (
        <div>
            <Navbar />
            <TeamHero />
            <OurTeamSection />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};


//hello