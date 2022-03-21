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
              Bright future Business Services has been in operational existence
              since the beginning of 2009 with its main focus in the private
              sector of the economy. We have over 20 consultants drawn from
              different walks of life that inCludes Finance, Management,
              Engineering, Agriculture and so on.
            </p>
          </div>
          <div className="indv-cards">
            <h1>Our Vision</h1>
            <hr />
            <p>
              Bright future Business Services will be among the top notch
              consulting firms in Ethiopian consulting market with innovative
              services to the clients, while providing consistency services; we
              do also provide stability and opportunity to our staff and
              partners. We will always focus on making a significant impact to
              our clients’ missions and other stake holders as well.
            </p>
          </div>
          <div className="indv-cards">
            <h1>Our Mission</h1>
            <hr />
            <p>
              Bright future Business Services will be an agent of change for its
              clients, employees, and relevant stake holders. We will seek to
              understand the unique needs of each of our clients, offering a
              customized solution using highly motivated and high caliber
              consultants. We will challenge the status quo and establish
              connections that have a significant impact on our clients, the
              lives of our consultants. Every employee staff will benefit from
              our growth and success; we will undertake and deliver any project,
              regardless of its size.
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
                Bright future Business Services Is a private limited company
                established as per the governing lows of Ethiopia The company
                has been in operational existence during the past year We have
                been working in the provision of financial management, business
                planning system development, investmen advisory performance
                appraisal services predominantly to private sector companies in
                Add s Ababa, More over we have decided to provide support in the
                preparation of annual reports and many other similar soft skill
                services.
              </p>
            </div>
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
export default AboutUs;
