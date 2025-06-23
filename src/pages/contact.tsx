import Navbar from "../components/navBar.tsx";
import ContactHero from "../components/contactHero.tsx";
import TeamContactForm from "../components/teamContactForm.tsx";
import FooterCompo from "../components/footer.tsx";


export const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactHero />
            <TeamContactForm />
            <FooterCompo />
        </div>
    );
};