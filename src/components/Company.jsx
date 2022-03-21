import React from "react";

function Company() {
  return (
    <React.Fragment>
      <div className="company-container">
        <div className="header-container">
          <h1>Why Bright Future</h1>
          <h4>Providing bright solutions, To deliver profitable results</h4>
        </div>
        <div className="row row-cols-1 row-cols-md-2 ">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../assests/New folder (3)/Untitled-1.png")}
                class="card-img-top"
                alt="company-vision"
              />
              <h5>Vision</h5>
              <div className="card-body">
                <p className="card-text">
                  Bright future Business Services will be among the top notch
                  consulting firms in Ethiopian consulting market with
                  innovative services to the clients, while providing
                  consistency services; we do also provide stability and
                  opportunity to our staff and partners. We will always focus on
                  making a significant impact to our clients’ missions and other
                  stake holders as well.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../assests/New folder (3)/Untitled-2.png")}
                class="card-img-top"
                alt="company-mission"
              />
              <h5>Mission</h5>
              <div className="card-body">
                <p className="card-text">
                  Bright future Business Services will be an agent of change for
                  its clients, employees, and relevant stake holders. We will
                  seek to understand the unique needs of each of our clients,
                  offering a customized solution using highly motivated and high
                  caliber consultants. We will challenge the status quo and
                  establish connections that have a significant impact on our
                  clients, the lives of our consultants. Every employee staff
                  will benefit from our growth and success; we will undertake
                  and deliver any project, regardless of its size.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../assests/New folder (3)/Untitled-3.png")}
                class="card-img-top"
                alt="company-vision"
              />
              <h5>core values</h5>
              <div className="card-body">
                <p className="card-text">
                  The following are the underlying principles, core values that
                  will determine the way we do our business engagements I.e
                </p>
              </div>
            </div>
          </div>
          <div className="col moto">
            <div className="card">
              <div className="card-body">
                <ul className="company-moto-list">
                  <li>Collaboration</li>
                  <li>Transformation</li>
                  <li>Open + Honest Communication</li>
                  <li>Integrity</li>
                  <li>Value driven</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>What do we do?</h2>
              <div className="card-body">
                <p className="card-text">
                  Our people are crucial in the delivery of our services and
                  solution to our customers. In order to ensure that everyone is
                  equipped with the right skill, knowledge and attitude, a
                  comprehensive training program is put in placeto constantly
                  upgrade our people in operational, technical and management
                  skills.
                </p>
                <p>
                  We believe firmly in providing the right training and
                  practical knowledge for our people, in order for them to
                  execute their duties and responsibilities confidently. Our aim
                  is to stay relevant to the ever-changing market place and
                  customer's requirement.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Our service includes</h2>
              <div className="card-body">
                <ul className="company-service-list">
                  <li>Undertaking Pre-feasibility and feasibility studies</li>
                  <li>Formulation of Business and strategic plans</li>
                  <li>
                    Policy formulation and system development that includes the
                    preparation of manuals for range of functions.
                  </li>
                  <li>Performance and internal audit appraisals </li>
                  <li>The development of Key performance indicators (KPIs)</li>
                  <li>Support in preparation of annual report of companies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Company;
