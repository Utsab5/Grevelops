import React from 'react'

const divStyle={
    width: "25vw",
    height: "auto",
    flexShrink: 0,
    backgroundColor: "white",
    borderRadius: "8px",
}
const imgStyle={    
    width: "40px",
    height: "40px",
    margin:"1rem auto",
    marginLeft:"1rem",
    marginBottom:"3rem",
}
const headingStyle={
    fontSize:"1.3rem",
    margin:"1rem",
    fontWeight:"600",
}
const textStyle={
    fontSize:"0.7rem",
    color:"rgba(23, 23, 23, 0.60)",
    margin:"1rem",
}
// const buttonStyle={
//     fontSize:"1rem",
//     color:"#423efe",
//     padding: "0.5rem 2rem",
//     border: "2px solid #423efe",
//     borderRadius:"3rem",
// }


function WhatWeDoCard(props) {
  return (
    <div className='card-component' style={divStyle}>
        <img style={imgStyle} src={props.img} alt="" />
        <h4 style={headingStyle}>{props.heading}</h4>
        <p style={textStyle}>{props.text}</p>
        
        <br></br>
        
    </div>
  )
};

export default WhatWeDoCard;
