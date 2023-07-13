import React from "react";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import OverlayImageBanner from "../../components/OverlayImageBanner";
import TeamCard from "../../components/TeamCard";
import WpCards from "../../components/WpCards";
import ZigZagCard from "../../components/ZigZagCard";
import "./About.css"
function About(){
    return (
        <div className="about__container">
            <div className="about__heading">
                <p>We are Grevelops</p>
                <h4>At Grevelops, we are passionate about pushing the boundaries of web and App development and staying ahead of the latest trends and technologies.</h4>
            </div>
            <OverlayImageBanner />
            <div className="zzc_container">{/*ZigZag*/}
                <ZigZagCard flexD="row"/>
                <ZigZagCard flexD="row-reverse"/>                
            </div>
            <Heading 
                p="Work Process"
                h2="Our process to build or product"
            />
            <div className="wpCards__container">
                <WpCards 
                    index="01"
                    h4="Research"
                    p="At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings"
                />
                <WpCards 
                    index="01"
                    h4="Research"
                    p="At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings"
                />
                <WpCards 
                    index="01"
                    h4="Research"
                    p="At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings"
                />
                <WpCards 
                    index="01"
                    h4="Research"
                    p="At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings"
                />                
            </div>            
            <Heading 
                p="Team"
                h2="Meet the team behind Grevelops"
            />
            <div className="teamCards__container">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
            <Banner2 />
            <Footer/>
        </div>

    );
}
export default About;