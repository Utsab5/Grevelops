import React from "react";

function ZigZagCard(props){
    return (
        <div className="zzc" >
            <img src={props.img} style={{order:props.order}} alt="" />
            <div className="zzc_contents">
                <p className="zzc_sub">{props.sub}</p>
                <h2>{props.heading}</h2>
                <p className="zzc__p">{props.txt}</p>
            </div>
        </div>
    );
};
export default ZigZagCard;