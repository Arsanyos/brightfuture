import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
//importing style
import "../style/App.css";
//importing components
import NavBar from "./NavBar.jsx";
import Home from "../routes/Home.jsx";
import Services from "../routes/Services.jsx";
import ContactUs from "../routes/ContactUs";
import AboutUs from "../routes/AboutUs.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
