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
          Commonly called Ahmad, I am a 5th semester collage student of
          Informatics Engineering with a Concentration in Creative Information
          Development, my hobby is sports & playing games, Has Good enough
          Programming Skills and Interest in Web Development and Mobile
          Development
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
