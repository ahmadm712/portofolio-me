import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Ahmad Muji</span>.
          <br />
          Commonly called Ahmad, I'm Mobile Application Developer with around 1
          years experience in software development lifecycle (SDLC) including
          analysis, design, development, and testing. Experience in Mobile
          Application Framework Flutter ,Skilled, motivated and product-oriented
          mobile application developer with strong Object Oriented Programming
          Concepts and design skills.
          <SocialContact />
        </div>

        <div className="about-photo">
          <img
            src={require("../../../assets/image/ahmad.png").default}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
