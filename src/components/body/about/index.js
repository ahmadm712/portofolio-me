import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Ahmad Muji</span>.<br /> 
          I love
          experimenting with the web.
          
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
