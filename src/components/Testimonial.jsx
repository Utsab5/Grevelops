import React from "react";
import TestimonialCard from "./TestimonialCard";

/*To start the animation, go to Home.css .RightToLEft and remove the comment frm animation*/

const test__content=[
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Guy Hawkins",
        post:"Design head, Sony",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Jacob Jones",
        post:"Facebook",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Wade Warren",
        post:"CEO, Big Kahuna Burger Ltd.",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Guy Hawkins",
        post:"Design head, Sony",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Jacob Jones",
        post:"Facebook",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Wade Warren",
        post:"CEO, Big Kahuna Burger Ltd.",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Guy Hawkins",
        post:"Design head, Sony",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Jacob Jones",
        post:"Facebook",
    },
    {
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptas.",
        name:"Wade Warren",
        post:"CEO, Big Kahuna Burger Ltd.",
    },
    
]

function Testimonial(){

    const TC=test__content.map((data)=>{
        return <TestimonialCard
                    text={data.text}
                    name={data.name}
                    post={data.post}
                />
    });
    return(
        <>
            <div className="container testi-heading">
                <p>Testimonials</p>
                <h2>Proof of love by Clients</h2>
            </div>
            <div className="asasasas1">
            
                <div className="asasasas2">
                    {/* 2. */}
                <div className="asasasas3">
                {/* 3 */}
                {TC}
                {TC}
            </div>
            </div>
            </div>

            <div className="asasasas1">
            
                <div className="asasasas2">
                    {/* 2. */}
                <div className="asasasas4">
                {/* 3 */}
                {TC}
                {TC}
            </div>
            </div>
            </div>           
           
        </>
    );
};
export default Testimonial;

