import React from "react";

function WpCards(props){
    return (
        <div className="wpCard_container">
            <p className="index">{props.index}</p>
            <h4 className="heading">{props.h4}</h4>
            <p className="txt">{props.p}</p>
        </div>
    );
};
export default WpCards;