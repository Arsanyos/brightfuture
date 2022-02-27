import { Fragment } from "react";
import React from "react";
import "../style/About.css";
//importing components
import SisterCompany from "../components/SisterCompany";

function AboutUs() {
  return (
    <div className="AboutUs-container">
      <div className="AboutUs-content-container">
        <div className="AboutUs-container-header">
          <div className="AboutUs-container-content">
            <h1 className="heading">About us</h1>
            <h5 className="sub-heading">
              Welcome to Bright Future Business Services
            </h5>
            <p className="para-content">
              Bright Future Business Services vices to both public and private
              sector players
            </p>
          </div>
        </div>

        <div className="info-cards-container">
          <div className="indv-cards">
            <h1>Who are we</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias
            </p>
          </div>
          <div className="indv-cards">
            <h1>Our Vision</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias
            </p>
          </div>
          <div className="indv-cards">
            <h1>Our Mission</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias
            </p>
          </div>
        </div>
        <div className="princples-container">
          <div className="para-container">
            <p className="para-princples">
              The following are the underlying princples, core values that will
              determine the way we do our business engagement i.e
            </p>
          </div>

          <div className="core-values-container">
            <div className="indv-values">
              <h1>1</h1>
              <div className="values">
                <p className="values-title">Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
              </div>
            </div>
            <div className="indv-values">
              <h1>2</h1>
              <div className="values">
                <p className="values-title">Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
              </div>
            </div>
            <div className="indv-values">
              <h1>3</h1>
              <div className="values">
                <p className="values-title">Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
              </div>
            </div>
            <div className="indv-values">
              <h1>4</h1>
              <div className="values">
                <p className="values-title">Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
              </div>
            </div>
            <div className="indv-values">
              <h1>5</h1>
              <div className="values">
                <p className="values-title">Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
              </div>
            </div>
          </div>
          <div className="whyBright-container">
            <div className="img-container"></div>
            <div className="whyBright-words">
              <h1>Why choose us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              </p>
            </div>
          </div>
        </div>
      </div>

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
export default AboutUs;
