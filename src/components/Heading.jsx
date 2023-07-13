import React from "react";
//About.css
function Heading(props){
    return (
        <div className="heading_div">
            <p>{props.p}</p>
            <h2>{props.h2}</h2>
        </div>
    );
};
export default Heading;