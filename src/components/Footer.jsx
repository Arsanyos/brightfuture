import React from "react";
import "../style/Footer.css";
//importing componnets

import GetInTouch from "./GetInTouch";

function Footer() {
  return (
    <div className="footer">
      <div className="first-cont">
        <img
          className="bright-future-logo"
          src={require("../assests/bright-future.png")}
          alt="bright-future-logo"
          width="100px"
          height="100px"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident
        </p>
      </div>
      <div className="second-cont">
        <h1>Contact Info</h1>
        <GetInTouch />
      </div>
      <div className="third-cont">
        <h3>For more information follow us</h3>
        <div className="icons">
          <a href="#">
            <img
              className="icon facebook"
              src={require("../assests/icons/facebook.png")}
            />
          </a>
          <a href="#">
            {" "}
            <img
              className="icon facebook"
              src={require("../assests/icons/twitter.png")}
            />
          </a>

          <a href="#">
            <img
              className="icon facebook"
              src={require("../assests/icons/telegram.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
