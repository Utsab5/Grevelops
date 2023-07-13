import React from "react";
import img from "../images/zzc1.png";

function ZigZagCard(props){
    return (
        <div className="zzc" style={{flexDirection:props.flexD}}>
            <img src={img} alt="" />
            <div className="zzc_contents">
                <p className="zzc_sub">Our Mission</p>
                <h2>Building Better Digital Products for Future</h2>
                <p className="zzc__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, assumenda accusantium, explicabo deserunt delectus iure exercitationem nemo illum necessitatibus a hic quaerat dignissimos. Commodi magnam veniam itaque aliquid delectus molestiae?</p>
            </div>
        </div>
    );
};
export default ZigZagCard;