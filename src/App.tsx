import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Portfolio} from "./pages/portfolio.tsx";
import {Team} from "./pages/team.tsx";
import {About} from "./pages/about.tsx";
import {Contact} from "./pages/contact.tsx";
import {Privacy} from "./pages/privacyPolicy.tsx";
import {Terms} from "./pages/termsAndConditions.tsx";
import {Partners} from "./pages/partners.tsx";
import {Career} from "./pages/career.tsx";
import {SaveInGoldCase} from "./pages/saveInGoldCS.tsx"
import {SocialproCase} from "./pages/socialproCaseStudy.tsx";
import {AllHypeCase} from "./pages/allHypeCaseStudy.tsx";
import {FarooCase} from "./pages/farooCaseStudy.tsx";
import {NotFound} from "./pages/notFound.tsx";




function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/terms-and-conditions" element={<Terms />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/save-in-gold-case-study" element={<SaveInGoldCase />} />
                    <Route path="/socialpro-case-study" element={<SocialproCase />} />
                    <Route path="/all-hype-case-study" element={<AllHypeCase />} />
                    <Route path="/faroo-case-study" element={<FarooCase />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            {/*<div>*/}
            {/*  <a href="https://vite.dev" target="_blank">*/}
            {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
            {/*  </a>*/}
            {/*  <a href="https://react.dev" target="_blank">*/}
            {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*  Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}

export default App
