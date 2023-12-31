import React from "react";
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';

//About.css
function TeamCard(props){
    return(
        <div className="team__container">
            <img src={props.image} alt="" />

            {/* <div className="name">
                <p>{props.name}</p>
                <a href={props.L_link}><BiLogoLinkedin color="white" size="1.7vw" /></a>
            </div>
            <div className="pos">
                <p>{props.pos}</p>
                <a href={props.T_link}><BiLogoTwitter color="white" size="1.7vw" /></a>
            </div> */}

            <div className="all">
                <div className="np">
                    <p className="n">{props.name}</p>
                    <p className="p">{props.pos}</p>
                    
                </div>
                <div className="logos">
                    <a href={props.L_link}><BiLogoLinkedin color="white" size="1.7vw" /></a>
                    <a href={props.T_link}><BiLogoTwitter color="white" size="1.7vw" /></a>
                </div>
            </div>
            
            
        </div>
    );
};
export default TeamCard;