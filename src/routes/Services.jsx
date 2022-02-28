import React from "react";
import "../style/Services.css";
//importing components
import SisterCompany from "../components/SisterCompany";

function Services() {
  return (
    <div className="services">
      <div className="service-container">
        <div className="services-container-heading">
          <h1 className="heading">Services</h1>
          <h5 className="sub-heading">We provide a wide range of services</h5>
          <p className="para-content">
            Our people are crucial in the delivery of our services and solution
            to our customers
          </p>
        </div>
        <div className="services-to-prov">
          <h2>How can we help you?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate
          </p>
        </div>
        <div className="services-provided">
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>Undertaking pre-feasiblity and feasiblity studies</p>
          </div>
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>Formulation of Business and strategic plans</p>
          </div>
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>
              Policy formulation and system development that includes the
              preparation of manuals for range of functions
            </p>
          </div>
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>Performance and internal audit appraisals</p>
          </div>
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>The development of key Performance indicators(KPIS)</p>
          </div>
          <div className="service">
            <img src={require("../assests/google-analytics.png")} />
            <p>Support in perparation of annual report of compnaies</p>
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
export default Services;
