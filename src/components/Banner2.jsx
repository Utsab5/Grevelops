import React from "react";
import img_banner2 from "../images/banner2.png"

function Banner2(){
    return (
        <div className="container banner__1 banner2">
            <div className="banner__text banner2__text">
                <h2>Have an Idea in mind ? Let’s Work Together. </h2>
                
            </div>
            <div className="banner__text banner2__btn">
                <a class="SayHello banner2SH" href="#">Say Hello</a>
            </div>
            <img src={img_banner2} alt="" />
        </div>
    );
};
export default Banner2;