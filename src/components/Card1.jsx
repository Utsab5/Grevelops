import React from "react";
//Contact.css

function Card1(props)
{
    const linkStyle = {
        backgroundColor: props.green === 'yes' ? '#1CAE4E' : '',
        color: props.green === 'yes' ? 'white' : '',
        border: props.green === 'yes' ? '0px solid red' : '',
    };
    const handleHover = (event) => {
        event.target.style.backgroundColor = props.green === 'yes' ? 'darkgreen' : '';
    };
    
    const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = props.green === 'yes' ? '#1CAE4E' : '';
    };
    return (
        <div className="card1__container">
            <h3>{props.heading}</h3>
            <p>{props.txt}</p>
            <a  href={props.link} 
                style={linkStyle} 
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}>{props.btn}</a>
        </div>
    );
};
export default Card1;