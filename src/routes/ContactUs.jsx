import React from "react";
import "../style/Contact.css";

import Form from "../components/FormN.jsx";
import GetInTouch from "../components/GetInTouch";
function ContactUs() {
  return (
    <div className="contactus">
      <div className="contactus-content-container">
        <div className="contactus-header-container">
          <h1 className="heading">Contact Us</h1>
          <h5 className="sub-heading">Contact for Premium Business Services</h5>
        </div>
        <h3>Contact us we will replay</h3>
        <div className="contact-info-container">
          <Form />
          <div className="map-location"></div>
          <div className="socials-container">
            <GetInTouch />
          </div>
        </div>
      </div>
      <img
        className="work-with-bright"
        src={require("../assests/web titel A.png")}
        alt="start-project-with-bright-future"
        width="800px"
        height="130px"
      />
    </div>
  );
}
export default ContactUs;
