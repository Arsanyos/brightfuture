import React from "react";

function Company() {
  return (
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
              src={require("../assests/eye.png")}
              class="card-img-top"
              alt="company-vision"
            />
            <h5>Vision</h5>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src={require("../assests/target.png")}
              class="card-img-top"
              alt="company-mission"
            />
            <h5>Mission</h5>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src={require("../assests/atom.png")}
              class="card-img-top"
              alt="company-vision"
            />
            <h5>core values</h5>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h2>Our service includes</h2>
            <div className="card-body">
              <ul className="company-service-list">
                <li>Collaboration</li>
                <li>Transformation</li>
                <li>Open + Honest Communication</li>
                <li>Integrity</li>
                <li>Value driven</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Company;
