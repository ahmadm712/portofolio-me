import React from "react";
import "./contact.css";
import SocialContactMobile from "../../common/social-contact-mobile/index";
import Separator from "../../common/separator/index";
function Contact() {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      
      .catch((error) => alert(error));
  };
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
      <form
        data-netlify="true"
        name="pizzaOrder"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="pizzaOrder" />
        <label>
          What order did the pizza give to the pineapple?
          <input name="order" type="text"  />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
