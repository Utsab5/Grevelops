import React from "react";
import "../index.css"
import ProjectCard from "./ProjectCard";
const project__content=[
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Dora ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Harry ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Jhon ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Jane ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
    },
    {
        img:"../images/project-card.png",
        heading:"Admin Dashboard For Prince ",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!",
    },
]

function Project(){
    const P=project__content.map((data)=>{
        return <ProjectCard
                    img={data.img}
                    heading={data.heading}
                    text={data.text}
                />
    })
    return (
        <div className="container" style={{justifyContent:"center",display:"flex",marginTop:"10vw"}}>
            <div className="project" >
                <div className="project-heading">
                    <h2>Latest Projects for Clients</h2>
                    <p>Helping Brands and Businesses to create Apps and Website With our Expertise</p>
                </div>
                <div className="project-card" >{P}</div>
                <div className="allProj">
                    <a href="/portfolios">View All Projects</a>
                </div>
            </div>
        </div>
    );
}
export default Project;

