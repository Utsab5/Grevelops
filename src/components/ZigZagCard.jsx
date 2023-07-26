import React from "react";

function ZigZagCard(props){
    const gridTemplateColumns = props.order === "0" ? "1fr 1.5fr" : "1.5fr 1fr";
    console.log(gridTemplateColumns)
    return (
        <div className="zzc" style={{display:"grid" ,gridTemplateColumns: gridTemplateColumns}}>
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