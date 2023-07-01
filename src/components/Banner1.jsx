import React from "react";
import img_banner1 from "../images/banner1.png"

function Banner1(){
    return (
        <div className="banner__1">
            <div className="banner__text">
                <h2>We Combine Code with Design to Craft your Online Business</h2>
            </div>
            <img src={img_banner1} alt="" />
        </div>
    );
};

export default Banner1;