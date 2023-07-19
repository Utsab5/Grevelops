import React from "react";
import { useState } from "react";
import PortfolioHeading from "../../components/PortfolioHeading";
import ProjectCard from "../../components/ProjectCard";
import "./Portfolios.css"
import Footer from "../../components/Footer"
import Banner2 from "../../components/Banner2";

const data=[
    {
        id:6,
        item:"WD",//Web Development
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"Features of HTML",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"/",
    },
    {
        id:7,
        item:"AD",//App Development
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"ReactNative or Flutter ?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"$",
    },
    {
        id:8,
        item:"UI",//UI/UX
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"How to design in Figma ?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"$",
    },
    {
        id:9,
        item:"WD",//Web Development
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"Features of HTML",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"/",
    },
    {
        id:10,
        item:"AD",//App Development
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"ReactNative or Flutter ?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"$",
    },
    {
        id:11,
        item:"UI",//UI/UX
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3qEToYKdCNo7h7WiEc191etn-rxUBm6cXw&usqp=CAU",
        heading:"How to design in Figma ?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi ipsam porro, corrupti consectetur voluptas?",
        link:"$",
    },
];


function Portfolios(){
    const [tab, setTab]=useState(1);
    function activeTab(tabNumber){
        setTab(tabNumber);
    }

    const all = data.filter((product) => (product.item==="WD" || product.item==="AD" || product.item==="UI"));
    const wd = data.filter((product) => product.item==="WD");
    const ad = data.filter((product) => product.item==="AD");
    const ui = data.filter((product) => product.item==="UI");
    const d = tab===1?all : tab===2?wd : tab===3?ad : tab===4?ui :null;
    return (
        <>
            <div className="container">
                <PortfolioHeading />
                <div className="category">
                    <div onClick={() => activeTab(1)} style={{background:tab===1?"#423EFE":"",color:tab===1?"white":""}}>All</div>
                    <div onClick={() => activeTab(2)} style={{background:tab===2?"#423EFE":"",color:tab===2?"white":""}}>Web Development</div>
                    <div onClick={() => activeTab(3)} style={{background:tab===3?"#423EFE":"",color:tab===3?"white":""}}>App Development</div>
                    <div onClick={() => activeTab(4)} style={{background:tab===4?"#423EFE":"",color:tab===4?"white":""}}>UI/UX</div>
                </div>
                <div className="items">
                    {d && d.map((value) => {
                        return (
                            <div>
                                <ProjectCard
                                        key={value.id}
                                        img={value.img}
                                        heading={value.heading}
                                        text={value.text}
                                        button={value.link}
                                        id={value.id}
                                    />
                            </div>
                            
                        );
                    })}
                </div>
            </div>
            <Banner2/>
            <Footer />
        </>
    );
}
export default Portfolios;