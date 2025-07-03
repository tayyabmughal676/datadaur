import { useEffect } from "react";
import { setPageTitle } from "../lib/utils";

import Navbar from "../components/navBar.tsx";
import NotFoundSection from "../components/notFoundAll.tsx";
import FooterCompo from "../components/footer.tsx";


export const NotFound = () => {
    useEffect(() => {
        setPageTitle("Not Found");
    }, []);
    return (
        <div>
            <Navbar/>
            <NotFoundSection />
            <FooterCompo/>
        </div>
    );
};

//hello