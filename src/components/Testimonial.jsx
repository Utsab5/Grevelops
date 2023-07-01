import React from "react";
import TestimonialCard from "./TestimonialCard";

/*To start the animation, go to Home.css .RightToLEft and remove the comment frm animation*/

function Testimonial(){
    return(
        <>
            <div className="container testi-heading">
                <p>Testimonials</p>
                <h2>Proof of love by Clients</h2>
            </div>
            <div className="testi_container">
            <div className="scroll">
                <div className="RightToLeft">
                    
                    {/* 9cards */}
                    
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                </div>
                <div className="LeftToRight">
                    
                    {/* 9cards */}
                    
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                    <TestimonialCard
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas."
                        name="Robert Brown"
                        post="Software engineer"
                    />
                </div>
            </div>
            </div>
        </>
    );
};
export default Testimonial;

