import React from "react";
import Card1 from "../../components/Card1";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";
import OverlayImageBanner from "../../components/OverlayImageBanner";
import "./Contact.css"

const card_content=[
    {
        id:1,
        heading:"Call Our Expert",
        txt:"You can call and talk to Our Expert at 78936-73973",
        btn:"Call Now",
        link:"",
        green:"no",
    },
    {
        id:2,
        heading:"Message us",
        txt:"Chat with our WhatsApp Assistant immediately or leave a message",
        btn:"Say Hello!",
        link:"",
        green:"yes",
    },
    {
        id:3,
        heading:"Send an Email",
        txt:"Prefer to mail? Send us an email we will back to you soon ",
        btn:"Send email",
        link:"",
        green:"no",
    },
]
function Contact(){

    const C=card_content.map((data) => {
        return <Card1
                    heading={data.heading}
                    txt={data.txt}
                    btn={data.btn}
                    link={data.link}
                    green={data.green}
                />
    })
    return (
        <div className="contact__container">
            <OverlayImageBanner 
                img="../images/oibImg2.png" 
                txt="WE ARE GREVELOPS, LET’S TALK"
            />
            <div className="contact__heading">
                <h3>Want to know more? Reach out us</h3>
            </div>
            <div className="contact__btn">
                <a href="/">Recommend</a>
            </div>
            <div className="contact__cards">{C}</div>
            <div className="contact__get_in_touch">
                <div className="git__content">
                    <h4>Get in Touch with us!</h4>
                    <h3>Grevelopers HQ</h3>
                    <p className="address">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    <p className="ph">(603) 555-0123</p>
                    <p className="email">curtis.weaver@example.com</p>
                </div>
                <img src="../images/GetInTouch.png" alt="" />
            </div>
            <Banner2 />
            <Footer/>
        </div>
    );
};
export default Contact;