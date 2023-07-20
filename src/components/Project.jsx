import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
import ProjectCard from "./ProjectCard";
const project__content=[
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Dora ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
        id:"1",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Harry ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
        id:"2",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Jhon ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
        id:"3",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Jane ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
        id:"4",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Prince ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
        id:"5",
    },
]

function Project(){
    const P=project__content.map((data)=>{
        return <ProjectCard
                    img={data.img}
                    heading={data.heading}
                    text={data.text}
                    id={data.id}
                    key={data.id}
                />
    })

    const goToTop = () => {        
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    
    return (
        <div className="container project__container" style={{justifyContent:"center",display:"flex",marginTop:"2rem"}}>
            <div className="project" >
                <div className="project-heading">
                    <h2>Latest Projects for Clients</h2>
                    <p>Helping Brands and Businesses to create Apps and Website With our Expertise</p>
                </div>
                <div className="project-card" >{P}</div>
                <div className="allProj">
                    <Link to="/portfolios" onClick={goToTop} className="project__a">View All Projects</Link>
                </div>
            </div>
        </div>
    );
}
export default Project;

