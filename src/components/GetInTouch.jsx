import React from "react";
import "../style/Contact.css";
function GetInTouch() {
  return (
    <div className="intouch-container">
      <div className="cont location">
        <img
          src={require("../assests/icons/location.png")}
          alt="location-icon"
        />
        <div className="indv location-content">
          <h6>Location</h6>
          <p>Nudi tower,Goter infront of wongolait Bldg, 5th floor</p>
        </div>
      </div>
      <div className="cont tel">
        <img src={require("../assests/icons/ringer.png")} alt="tel-icon" />
        <div className=" indv tel-content">
          <h6>Telephone</h6>
          <p>+251911238221</p>
          <p>+251900078048</p>
          <p>+2510118889567</p>
        </div>
      </div>
      <div className="cont email">
        <img
          src={require("../assests/icons/icons8-email-50.png")}
          alt="tel-icon"
        />
        <div className="indv">
          <h6>Email</h6>
          <p>fitsumzelke@gmail.com</p>
          <p>solimportandexport@gmail.com</p>
        </div>
      </div>
      <div className="cont working-offices-hours">
        <img src={require("../assests/icons/last-24.png")} alt="tel-icon" />
        <div className="indv">
          <h6>Working and office hours</h6>
          <p>6 DAYS A WEEK</p>
          <p>Monday - Saturday 3:00 - 11:00</p>
        </div>
      </div>
    </div>
  );
}
export default GetInTouch;
