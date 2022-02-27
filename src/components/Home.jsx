import React from "react";
import logo from "../assests/bright-future.png";
import Company from "./Company";
import SisterCompany from "./SisterCompany";
function Home() {
  return (
    <div className="Home-container">
      <div className="row">
        <div className="col-12 col-sm-6 contactUs-container">
          <React.Fragment>
            <h1>BRIGHT FUTURE</h1>
            <span>
              Welcome to Bright future businesss Services.Our company is
              consulting company that focuses on the support of private sector
              development
            </span>
            <br />
            <span>
              Our objective is to provide out clients with top level consulting
              Services to out esteemed customers. Exceptional and upper echelon
              skill of our staff supported by ongoing trading and development
              ensures the delivery of very high level professional services.
            </span>
            <br />
            <span>
              We take pride in out quality and customized and cusomter specific
              and timely delivery of our consulting services to our clients
            </span>
            <br />
            <button type="button" className="btn" action="submit" onClick="">
              Contact Us
            </button>
          </React.Fragment>
        </div>
        <div className="col-12 col-sm-6 companyLogo-container">
          <React.Fragment>
            <img
              className="company-logo"
              src={logo}
              alt="bright-future-logo"
              width="500px"
              height="500px"
            />
          </React.Fragment>
        </div>
      </div>
      <Company />
      <SisterCompany />
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
export default Home;
