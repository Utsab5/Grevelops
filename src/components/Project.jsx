import React from "react";
import "../index.css"
import ProjectCard from "./ProjectCard";
import Pic from "../images/project-card.png"

function Project(){
    return (
        <div className="container" style={{justifyContent:"center",display:"flex",marginTop:"10vw"}}>
            <div className="project" >
                <div className="project-heading">
                    <h2>Latest Projects for Clients</h2>
                    <p>Helping Brands and Businesses to create Apps and Website With our Expertise</p>
                </div>
                <div className="project-card" >
                    <ProjectCard 
                        img={Pic}
                        heading="Admin Dashboard For Dora "
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!"
                        button="#"
                    />
                    <ProjectCard 
                        img={Pic}
                        heading="Admin Dashboard For Dora "
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!"
                        button="#"
                    />
                    <ProjectCard 
                        img={Pic}
                        heading="Admin Dashboard For Dora "
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!"
                        button="#"
                    />
                    <ProjectCard 
                        img={Pic}
                        heading="Admin Dashboard For Dora "
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod praesentium voluptates tenetur hic blanditiis unde corporis laboriosam saepe itaque!"
                        button="#"
                    />
                </div>
                <div className="allProj">
                    <a href="https://">View All Projects</a>
                </div>
            </div>
        </div>
    );
}
export default Project;

