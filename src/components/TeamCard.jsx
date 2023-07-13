import React from "react";
import pic from "../images/team1.png"
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';

//About.css
function TeamCard(props){
    return(
        <div className="team__container">
            <img src={pic} alt="" />
            <div className="name">
                <p>Ayush Mittal</p>
                <a href="#"><BiLogoLinkedin color="white" size="1.7vw" /></a>
            </div>
            <div className="pos">
                <p>Co-founder & CEO</p>
                <a href=""><BiLogoTwitter color="white" size="1.7vw" /></a>
            </div>
        </div>
    );
};
export default TeamCard;