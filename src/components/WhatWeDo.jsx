import React from "react";
import "../index.css"
import WhatWeDoCard from "./WhatWeDoCard";
import Pic from "../images/www.png"

function WhatWeDo(){
    return (
        <div className="container" style={{justifyContent:"center",display:"flex",marginTop:"7rem"}}>
            <div className="project" >
                <div className="project-card-wwd" >

                    <div className="wwd__div">
                        <p>What We Do</p>
                        <h3>We Bring Happiness using Services</h3>
                        <a class="SayHello" href="#">Say Hello</a>
                    </div>
                    <WhatWeDoCard 
                        img={Pic}
                        heading="Web Development"
                        text="The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil"
                    />
                    <WhatWeDoCard 
                        img={Pic}
                        heading="Web Development"
                        text="The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil"
                    />
                    <WhatWeDoCard 
                        img={Pic}
                        heading="Web Development"
                        text="The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil"
                    />
                    <WhatWeDoCard 
                        img={Pic}
                        heading="Web Development"
                        text="The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil"
                    />
                </div>
            </div>
        </div>
    );
}
export default WhatWeDo;

