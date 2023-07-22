import React from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/AboutUs/About"
import Contact from "./pages/ContactUs/Contact"
import Portfolios from "./pages/Portfolios/Portfolios"
import Navbar from "./components/Navbar";
import Case from "./pages/CaseStudy/Case";

function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />}/>
                <Route path="portfolios" element={<Portfolios />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="case/:heading" element={<Case />}/>
                <Route path="portfolios/case/:heading" element={<Case />}/>
            </Routes>
        </BrowserRouter>
    );
};
export default App;