import React from "react";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import OverlayImageBanner from "../../components/OverlayImageBanner";
import TeamCard from "../../components/TeamCard";
import WpCards from "../../components/WpCards";
import ZigZagCard from "../../components/ZigZagCard";
import "./About.css"

const wp__content=[
    {
        index:"01",
        h4:"Research",
        p:"At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings",
    },
    {
        index:"02",
        h4:"Research",
        p:"At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings",
    },
    {
        index:"03",
        h4:"Research",
        p:"At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings",
    },
    {
        index:"04",
        h4:"Research",
        p:"At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings",
    },
]

const team__content = [
    {
      id: "1",
      img: "../images/team1.png",
      name: "Ayush Mittal",
      pos: "Co-founder & CEO",
      linkedin: "www.linkedin.com",
      twitter: "www.twitter.com",
    },
    {
      id: "2",
      img: "../images/team2.png",
      name: "Ayush Mittal",
      pos: "Co-founder & CEO",
      linkedin: "www.linkedin.com",
      twitter: "www.twitter.com",
    },
    {
      id: "3",
      img: "../images/team3.png",
      name: "Ayush Mittal",
      pos: "Co-founder & CEO",
      linkedin: "www.linkedin.com",
      twitter: "www.twitter.com",
    },
  ];

  const zzc__content = [
    {
      id: "1",
      order: "0",
      img: "../images/zzc1.png",
      sub: "Our Mission",
      heading: "Building Better Digital Products for Future",
      txt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, assumenda accusantium, explicabo deserunt delectus iure exercitationem nemo illum necessitatibus a hic quaerat dignissimos. Commodi magnam veniam itaque aliquid delectus molestiae?",
    },
    {
      id: "2",
      order: "1", // reverse
      img: "../images/zzc2.png",
      sub: "Our Story",
      heading: "Building Better Digital Products for Future",
      txt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, assumenda accusantium, explicabo deserunt delectus iure exercitationem nemo illum necessitatibus a hic quaerat dignissimos. Commodi magnam veniam itaque aliquid delectus molestiae?",
    },
  ];

function About(){
    
    const WP = wp__content.map((data)=>{
        return <WpCards 
                    index={data.index}
                    key={data.index}
                    h4={data.h4}
                    p={data.p}
                />    
    })
    const TC = team__content.map((data)=>{
        return <TeamCard 
                    key={data.id}
                    image={data.img}
                    name={data.name}
                    pos={data.pos}
                    L_link={data.linkedin}
                    T_link={data.twitter}
                />    
    })
    const ZZC = zzc__content.map((data)=>{
        return <ZigZagCard 
                    key={data.id}
                    order={data.order}
                    img={data.img}
                    sub={data.sub}
                    heading={data.heading}
                    txt={data.txt}
                />    
    })
    return (
        <div className="about__container">
            <div className="about__heading">
                <p>We are Grevelops</p>
                <h4>At Grevelops, we are passionate about pushing the boundaries of web and App development and staying ahead of the latest trends and technologies.</h4>
            </div>
            <OverlayImageBanner 
                img="../images/oibImg1.png" 
                txt="A TEAM THAT ALWAYS FOCUS ON YOUR GROWTH"
            />
            <div className="zzc_container">{ZZC}</div>
            <Heading 
                p="Work Process"
                h2="Our process to build or product"
            />
            <div className="wpCards__container">{WP}</div>            
            <Heading 
                p="Team"
                h2="Meet the team behind Grevelops"
            />
            <div className="teamCards__container">{TC}</div>
            <Banner2 />
            <Footer/>
        </div>

    );
}
export default About;