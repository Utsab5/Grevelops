import React from "react";
import { Link } from "react-router-dom";
//css present in Home.css

function Footer(){
    return (
        <footer>
            <div className=" footer__container">
                <article>
                    <Link to="/" className="logo">
                        <p>Grevelops</p>
                    </Link>
                    <p className="textUnderLogo">A agency that helps business to create better apps and websites with modern Technology</p>
                    
                </article>
                <article>
                    <h4 className="">About</h4>
                    <a href="">Our Mission</a>
                    <a href="">Career</a>
                    {/* <a href="">About</a> */}
                </article>
                <article>
                    <h4 className="">Support</h4>
                    <a href="">FAQ's</a>
                    <a href="">Terms and Policy</a>
                    {/* <a href="">About</a> */}
                </article>
                <article>
                    <h4 className="">Follow Us</h4>
                    <a href="">Linkedin</a>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                </article>
            </div>
            <div className="footer__copyright">
                <small>Copywright &copy; Grevelops 2023. All right reserved </small>
            </div>
        </footer>
    );
};

export default Footer;