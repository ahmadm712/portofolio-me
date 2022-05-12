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
          Commonly called Ahmad, I am an Undergraduate student in Informatics
          Engineering with a concentration on Creative Information Development
          (CID). My hobbies are sports & playing games, Have good programming
          skills and have an interest in Web Development and Mobile Development,
          especially flutter.
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
