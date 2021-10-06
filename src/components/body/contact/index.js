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
      <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  );
}

export default Contact;
