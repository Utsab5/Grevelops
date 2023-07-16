import React from "react";
import "../index.css"
import WhatWeDoCard from "./WhatWeDoCard";

const wwd_content=[
    {
        img:"../images/www.png",
        heading:"Web Development",
        text:"The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil",
    },
    {
        img:"../images/www.png",
        heading:"Web Development",
        text:"The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil",
    },
    {
        img:"../images/www.png",
        heading:"Web Development",
        text:"The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil",
    },
    {
        img:"../images/www.png",
        heading:"Web Development",
        text:"The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil",
    },
    {
        img:"../images/www.png",
        heading:"Web Development",
        text:"The elements of a website made solely using HTML and CSS would normally be present on a Watch Collection website buil",
    },
]

function WhatWeDo(){
    const WWDW=wwd_content.map((data)=>{
        return <WhatWeDoCard
                    img={data.img}
                    heading={data.heading}
                    text={data.text}
                />
    });
    return (
        <div className="container" style={{justifyContent:"center",display:"flex",marginTop:"7rem"}}>
            <div className="project" >
                <div className="project-card-wwd" >

                    <div className="wwd__div">
                        <p>What We Do</p>
                        <h3>We Bring Happiness using Services</h3>
                        <a class="SayHello" href="https://">Say Hello</a>
                    </div>
                    {WWDW}
                </div>
            </div>
        </div>
    );
}
export default WhatWeDo;

