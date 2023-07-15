import React from 'react'
import "../index.css"
import {  Link } from 'react-router-dom';

const divStyle={
    width: "35vw",
    height: "auto",
    flexShrink: 0,
    backgroundColor: "white",    
    borderRadius:"10px",
    paddingTop:"1rem",
}
const imgStyle={
    // paddingTop:"1rem",
    width: "32vw",
    // height: "auto",
    margin:"0.8rem auto",
    marginTop:"0",
    borderRadius:"10px",
}
const headingStyle={
    fontSize:"1.5rem",
    textAlign:"center",
    margin:"1rem",
    fontWeight:"600",
}
const textStyle={
    fontSize:"1rem",
    color:"rgba(23, 23, 23, 0.60)",
    margin:"1rem",
}
const buttonStyle={
    fontSize:"1rem",
    color:"#423efe",
    padding: "0.5rem 2rem",
    border: "1px solid #423efe",
    borderRadius:"3rem",
}




function ProjectCard(props) {    

    const goToTop = () => {        
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

  return (
    <div className='card-component' style={divStyle}>
        <img style={imgStyle} src={props.img} alt="projectCardImg" />
        <h4 style={headingStyle}>{props.heading}</h4>
        <p style={textStyle}>{props.text}</p>
        <div style={{display:"flex",justifyContent:"center"}}>
            
            <Link to={{
                pathname: "/case",
                state: {
                heading: props.heading
                }
            }} style={buttonStyle} onClick={goToTop} >Read Case Study</Link>    

        </div>
        <br></br>
        
    </div>
  )
};

export default ProjectCard;
