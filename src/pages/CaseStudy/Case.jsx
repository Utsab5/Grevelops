import React from "react";
import { useLocation } from 'react-router-dom';
import Footer from "../../components/Footer";
import "./Case.css"
function Case(){
    const location = useLocation();
    const { heading } = location.state || { heading: 'Built an Admin panel for Mudryk' };
    return(
        <div>
            <div className="case__heading">
                {/* <h2>Built an Admin panel for Mudryk</h2> */}
                <h2>{heading}</h2>
                <p>An app that help users to manage their Finances and Budget for a better financial life</p>
            </div>
            <img src="../images/case1.png" alt="" />
            <a className="vls" href="/">Visit live Site</a>
            <div className="case__our-result">
                <h5>Our Result</h5>
                <img className="bigimg" src="../images/case2.png" alt="" />
                <div className="fl">
                    <img src="../images/case3.png" alt="" />
                    <img src="../images/case4.png" alt="" />
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
            </div>
            <Footer />
        </div>
    );
};
export default Case;