import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link to="/" class="navbar-brand">
            <img
              src={require("../assests/bright-future.png")}
              alt=""
              width="100px"
              height="100px"
            />
          </Link>
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
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/AboutUs" className="nav-link">
                About us
              </Link>
              <Link to="/Services" className="nav-link">
                Services
              </Link>
              <Link to="/ContactUs" className="nav-link">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
