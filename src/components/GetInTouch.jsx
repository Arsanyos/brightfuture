import React from "react";
import { Fragment } from "react";
import "../style/Contact.css";
function GetInTouch() {
  return (
    <div className="intouch-container">
      <div className="cont location">
        <img src={require("../assests/time.png")} alt="location-icon" />
        <div className="intouch location-content">
          <h4>Location</h4>
          <p>Nudi tower,Goter infront of wongolait Bldg, 5th floor</p>
        </div>
      </div>
      <div className="cont tel">
        <img src={require("../assests/time.png")} alt="tel-icon" />
        <div className="intouch tel-content">
          <h4>Telephone</h4>
          <p>+251911238221</p>
          <p>+251900078048</p>
          <p>+2510118889567</p>
        </div>
      </div>
      <div className="cont email">
        <img src={require("../assests/time.png")} alt="tel-icon" />
        <div className="intouch tel-content">
          <h4>Email</h4>
          <p>fitsumzelke@gmail.com</p>
          <p>solimportandexport@gmail.com</p>
        </div>
      </div>
      <div className="working and offices hours">
        <img src={require("../assests/time.png")} alt="tel-icon" />
        <div className="intouch tel-content">
          <h4>Working and office hours</h4>
          <p>6 DAYS A WEEK</p>
          <p>Monday - Saturday 3:00 - 11:00</p>
        </div>
      </div>
    </div>
  );
}
export default GetInTouch;
