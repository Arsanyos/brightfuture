import React from "react";
import ReactDOM from "react-dom";
import logo from "../assests/bright-future.png";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a class="navbar-brand">
            <img
              src={require("../assests/bright-future.png")}
              alt=""
              width="100px"
              height="100px"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
              <a className="nav-link">About us</a>
              <a className="nav-link">Services</a>
              <a className="nav-link">Contact us</a>
            </div>
          </div>
          {/* ------------------- */}
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
