import React from 'react'
import { SiWebpack } from 'react-icons/si';

const divStyle={
    width: "25vw",
    maxWidth:"25rem",
    height: "auto",
    flexShrink: 0,
    backgroundColor: "white",
    borderRadius: "8px",
}
const imgStyle={    
    width: "35px",
    height: "35px",
    margin:"1rem auto",
    marginLeft:"1rem",
    marginBottom:"1rem",
    color:"#423EFE"
}
const headingStyle={
    fontSize:"1.3rem",
    margin:"1rem",
    fontWeight:"500",
}
const textStyle={
    fontSize:"1rem",
    color:"rgba(23, 23, 23, 0.60)",
    margin:"1rem",
}


function WhatWeDoCard(props) {
  return (
    <div className='card-component__wwd' style={divStyle}>
        {/* <img style={imgStyle} src={props.img} alt="" /> */}
        <SiWebpack style={imgStyle}/>
        <h4 style={headingStyle}>{props.heading}</h4>
        <p style={textStyle}>{props.text}</p>
        
        <br></br>
        
    </div>
  )
};

export default WhatWeDoCard;
