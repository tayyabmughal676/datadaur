import Navbar from "../components/navBar.tsx";
import PrivacyHero from "../components/privacyHero.tsx";
import PrivacyContent from "../components/privacyContact.tsx";
import FooterCompo from "../components/footer.tsx";


export const Privacy = () => {
    return (
        <div>
            <Navbar />
            <PrivacyHero />
            <PrivacyContent />
            <FooterCompo />
        </div>
    );
};