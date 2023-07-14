import React from "react";

function OverlayImageBanner(props){
    return (
        <div className="oib">
            <div className="oib__text">
                <h2>{props.txt}</h2>
            </div>
            <div className="oib__overlay">

            </div>
            <img src={props.img} alt="" />
        </div>
    );

};
export default OverlayImageBanner;