import React from "react";
import "./Home.css"
import MainHeader from "../../components/MainHeader"
import Project from "../../components/Project";
import Banner1 from "../../components/Banner1";
import WhatWeDo from "../../components/WhatWeDo";
import Testimonial from "../../components/Testimonial";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";


function Home(){
    return (
        <>
            <MainHeader />
            <Project />
            <Banner1 />
            <WhatWeDo />
            <Testimonial />
            <Banner2 />
            <Footer />
        </>
    );
}
export default Home;