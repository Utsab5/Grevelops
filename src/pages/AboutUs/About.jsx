import React from "react";
import OverlayImageBanner from "../../components/OverlayImageBanner";
import "./About.css"
function About(){
    return (
        <div className="about__container">
            <div className="about__heading">
                <p>We are Grevelops</p>
                <h4>At Grevelops, we are passionate about pushing the boundaries of web and App development and staying ahead of the latest trends and technologies.</h4>
            </div>
            <OverlayImageBanner />
        </div>

    );
}
export default About;