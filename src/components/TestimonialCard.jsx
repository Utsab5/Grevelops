import React from "react";

const divStyle={
    width: "23rem",
    height: "17rem",
    flexShrink: 0,
    backgroundColor: "white",
    borderRadius: "8px",
    margin:"1rem 1rem"
}
const textStyle={
    fontSize:"14px",
    color: "rgba(23, 23, 23, 0.60)",
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: "20px",
    padding:"5rem 2rem 2rem 2rem"
}
const nameStyle={
    display:"flex",
    justifyContent:"center",
}
const postStyle={
    display:"flex",
    justifyContent:"center",
    paddingBottom:"3rem"
}

function TestimonialCard(props){
    return (
        <div className="card-component" style={divStyle}>
            <p style={textStyle}>{props.text}</p>
            <div className="author">
                <h4 style={nameStyle}>{props.name}</h4>
                <p style={postStyle}>{props.post}</p>
            </div>
        </div>
    );
};
export default TestimonialCard;