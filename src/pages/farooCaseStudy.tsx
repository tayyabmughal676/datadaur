import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import FooterCompo from "../components/footer.tsx";


export const FarooCase = () => {

    useEffect(() => {
        setPageTitle("Faroo | Case Study");
    }, []);

    return (
        <div>
            <Navbar />
            <FooterCompo />
        </div>
    );
};
