//css is present in home.css
import "../pages/Home/Home.css"
import React from "react";
import { Link } from "react-router-dom";

function MainHeader(){

    const whatsapp=()=>{
        // window.open("https://wa.me/918100460390",'_blank')
        window.location.href="https://wa.me/918100460390"
    }

    return(
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1>We Combine Code with Design to <span>Craft</span> your Online Business</h1>
                    <p>Helping Brands and Business to Create Apps and Website with our Expertise</p>
                    <div className="main__header-btns">
                        <button className="btn SH" onClick={whatsapp}>SAY HELLO</button>
                        <Link to="/portfolios" className="btn SW">See our Works</Link>
                    </div>
                    <div className="main__header-success">
                        <p>Our Success Until Now</p>
                        <div className="main__header-success-1st">
                            <h4>25+</h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className="main__header-success-1st">
                            <h4>32+</h4>
                            <p>Work Delivered</p>
                        </div>                       
                    </div>
                    
                </div>
                <div className="main__header-right">
                    <div className="main__header-sparkle">
                        <img src="../images/sparkle.png" alt="sparkle-img" />
                    </div>
                    <div className="main__header-images">

                        <div className="main__header-images-left">
                            <img src="../images/Header_img1.png" alt="Header-img1" />
                            <img src="../images/Header_img3.png" alt="Header-img3" />
                        </div>
                        <div className="main__header-images-right">
                            <img src="../images/Header_img2.png" alt="Header-img2" />
                            <img src="../images/Header_img4.png" alt="Header-img4" />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </header>
    );
};
export default MainHeader;