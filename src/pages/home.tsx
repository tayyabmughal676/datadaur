import Navbar from "../components/navBar.tsx";
import Hero from "../components/indexHero.tsx";
import ProductLifeCycle from "../components/indexProductLifeCycle.tsx";
import ServiceWeOffer from "../components/IndexServiceWeOffer.tsx";
import PaymentOption from "../components/indexPaymentOption.tsx";
import TeamSection from "../components/indexTeamSection.tsx";
import ContactForm from "../components/indexContactForm.tsx";
import WhyDatadaur from "../components/indexWhyDataDaur.tsx";
// import DataDaurLogoImg from "../components/indexDataDaurImg.tsx";
import FooterCompo from "../components/footer.tsx";


export const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProductLifeCycle />
            <ServiceWeOffer />
            <PaymentOption />
            <WhyDatadaur />
            <TeamSection />
            <ContactForm />
            {/*<DataDaurLogoImg />*/}
            <FooterCompo />
        </div>
    );
};

