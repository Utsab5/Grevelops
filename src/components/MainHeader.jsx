//css is present in home.css
import "../pages/Home/Home.css"
import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../images/Header_img1.png"
import Img2 from "../images/Header_img2.png"
import Img3 from "../images/Header_img3.png"
import Img4 from "../images/Header_img4.png"
import SparkleImg from "../images/sparkle.png"

function MainHeader(){
    return(
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h1>We Combine Code with Design to <span>Craft</span> your Online Business</h1>
                    <p>Helping Brands and Business to Create Apps and Website with our Expertise</p>
                    <div className="main__header-btns">
                        <button className="btn lg SH">SAY HELLO</button>
                        <Link to="/portfolios" className="btn lg SW">See our Works</Link>
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
                        <img src={SparkleImg} alt="sparkle-img" />
                    </div>
                    <div className="main__header-images">

                        <div class="main__header-images-left">
                            <img src={Img1} alt="Header-img1" />
                            <img src={Img3} alt="Header-img3" />
                        </div>
                        <div class="main__header-images-right">
                            <img src={Img2} alt="Header-img2" />
                            <img src={Img4} alt="Header-img4" />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </header>
    );
};
export default MainHeader;