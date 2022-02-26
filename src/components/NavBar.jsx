import React from "react";
import ReactDOM from "react-dom";
import logo from "../assests/bright-future.png";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <a class="navbar-brand">
            <img
              src={require("../assests/bright-future.png")}
              alt=""
              width="100px"
              height="100px"
            />
          </a>
        </div>
        {/* ------------------- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
