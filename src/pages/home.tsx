import Navbar from "../components/navBar.tsx";
import IndexHero from "../components/indexHero.tsx";
import IndexServiceWeOffer from "../components/IndexServiceWeOffer.tsx";
import IndexProductLifeCycle from "../components/indexProductLifeCycle.tsx";
import IndexPaymentOption from "../components/indexPaymentOption.tsx";
import IndexTeamSection from "../components/indexTeamSection.tsx";
import IndexContactForm from "../components/indexContactForm.tsx";
import WhyDatadaur from "../components/indexWhyDataDaur.tsx";
import DataDaurLogoImg from "../components/indexDataDaurImg.tsx";
import FooterCompo from "../components/footer.tsx";


export const Home = () => {
    return (
        <div>
            <Navbar />
            <IndexHero />
            <IndexProductLifeCycle />
            <IndexServiceWeOffer />
            <IndexPaymentOption />
            <WhyDatadaur />
            <IndexTeamSection />
            <IndexContactForm />
            <DataDaurLogoImg />
            <FooterCompo />
        </div>
    );
};