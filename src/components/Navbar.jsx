import React from "react";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {links} from "../data"
import {FaBars} from "react-icons/fa"
import {MdOutlineClose} from "react-icons/md"

function Navbar(){

    const goToTop = () => {        
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    const [isNavShowing, setIsNavShowing] =useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                    <img src="../images/Logo.png" alt="logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__Nav"}`}>
                    {
                        links.map(({name, path}, index) =>{
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={ ({isActive}) => isActive ? "active-nav" : ""}   
                                    onClick={()=> 
                                    {
                                        setIsNavShowing(prev => !prev);
                                        goToTop();
                                    }} >{name}</NavLink>
                                </li>
                            )
                        })
                    }
                    <li className="nav__links">
                        <a className="say_hello SH" href="https://wa.me/918100460390">Say Hello</a>
                    </li>
                </ul>
                <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    );
}

export default Navbar;