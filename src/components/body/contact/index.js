import React from "react";
import "./contact.css";
import SocialContactMobile from "../../common/social-contact-mobile/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContactMobile />
        </div>
        <div className="download">
          <a download href={require("../../../assets/CV Ahmad.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download CV
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;
