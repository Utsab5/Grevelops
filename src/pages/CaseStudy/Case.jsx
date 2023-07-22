import React from "react";
import { useParams, useLocation} from 'react-router-dom';
import Footer from "../../components/Footer";
import "./Case.css"
import {cdata} from "./case_data"
function Case(){

    const { heading } = useParams();
    const projectData = cdata.find((item) => item.heading === heading);

    const location = useLocation();
    const { pathname } = location;
    const hasPortfolios = pathname.includes('portfolios')? 'Portfolios' : 'Home';

    return(
        <>
        <div>
            <div className="case__heading">
                <p className="url">{hasPortfolios} / {heading}</p>
                <h2>{heading}</h2>
                <p>An app that help users to manage their Finances and Budget for a better financial life</p>
            </div>
            <img className="case__afterHeader" src={`${process.env.PUBLIC_URL}/${projectData.imgH}`} alt="" />
            <a className="vls" href="/">Visit live Site</a>
            <div className="case__our-result">
                <h5>Our Result</h5>
                <img className="bigimg" src={`${process.env.PUBLIC_URL}/${projectData.img1}`} alt="" />
                <div className="fl">
                    <img src={`${process.env.PUBLIC_URL}/${projectData.img2}`} alt="" />
                    <img src={`${process.env.PUBLIC_URL}/${projectData.img3}`} alt="" />
                </div>
                <h5>Overview</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id consequuntur suscipit, totam mollitia vel earum repellat molestias nisi nulla, reprehenderit assumenda doloremque ratione. Minus temporibus odio alias sint, beatae dolorem a eos sapiente minima? Officia, sunt soluta et, tenetur atque in ut officiis modi nihil doloribus eos aperiam debitis?</p>
                <div className="overview">
                    <div className="overview_contents">
                        <h4>Time Duration</h4>
                        <p>4-5 weeks</p>
                    </div>
                    <div className="overview_contents">
                        <h4>Scopes</h4>
                        <p>Web development</p>
                        <p>Copy Writing</p>
                        <p>UI/UX design</p>
                        <p>Web maintenance</p>
                    </div>
                    <div className="overview_contents">
                        <h4>Tools and Framework</h4>
                        <p>VS Code</p>
                        <p>Notion</p>
                        <p>Figma</p>
                        <p>React Native</p>
                        <p>Node Js</p>
                    </div>
                    <div className="overview_contents">
                        <h4>Built For</h4>
                        <p>Web app</p>
                        <p>Website</p>
                    </div>
                </div>
                <h5>Challenge</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id consequuntur suscipit, totam mollitia vel earum repellat molestias nisi nulla, reprehenderit assumenda doloremque ratione. Minus temporibus odio alias sint, beatae dolorem a eos sapiente minima? Officia, sunt soluta et, tenetur atque in ut officiis modi nihil doloribus eos aperiam debitis?</p>
                <h5>Our Solution</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id consequuntur suscipit, totam mollitia vel earum repellat molestias nisi nulla, reprehenderit assumenda doloremque ratione. Minus temporibus odio alias sint, beatae dolorem a eos sapiente minima? Officia, sunt soluta et, tenetur atque in ut officiis modi nihil doloribus eos aperiam debitis?</p>
                <img className="ourSolutionImg" src={`${process.env.PUBLIC_URL}/${projectData.imgH}`} alt="ourSolutionImg" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odit quibusdam quod voluptate alias, eligendi laudantium pariatur est fugit nostrum corrupti molestias explicabo ratione fugiat, magni tenetur unde cumque quidem delectus. Iusto iure deserunt quod!</p>
            </div>
            
        </div>
        <Footer />
        </>
    );
};
export default Case;