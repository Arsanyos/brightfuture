import React, { Fragment } from "react";
import ReactDOM from "react-dom";
//importing style
import "../style/App.css";
//importing components
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}
export default App;
