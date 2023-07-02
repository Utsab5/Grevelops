import React from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/AboutUs/About"
import Contact from "./pages/ContactUs/Contact"
import Portfolios from "./pages/Portfolios/Portfolios"
import Services from "./pages/Services/Services"
import Navbar from "./components/Navbar";

function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />}/>
                <Route path="portfolios" element={<Portfolios />}/>
                <Route path="services" element={<Services />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    );
};
export default App;