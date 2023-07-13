import React from "react";
import img from "../images/zzc1.png";

function ZigZagCard(props){
    return (
        <div className="zzc" style={{flexDirection:props.flexD}}>
            <img src={props.img} alt="" />
            <div className="zzc_contents">
                <p className="zzc_sub">{props.sub}</p>
                <h2>{props.heading}</h2>
                <p className="zzc__p">{props.txt}</p>
            </div>
        </div>
    );
};
export default ZigZagCard;