import React from "react";
import img from "../images/oibImg.png"

function OverlayImageBanner(){
    return (
        <div className="oib">
            <div className="oib__text">
                <h2>A TEAM THAT ALWAYS FOCUS ON YOUR GROWTH</h2>
            </div>
            <div className="oib__overlay">

            </div>
            <img src={img} alt="" />
        </div>
    );

};
export default OverlayImageBanner;