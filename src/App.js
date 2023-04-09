import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        © 2023. All rights reserved by
        <a href="">{" "}Sajib Ahmed.</a>
      </div>
    </React.Fragment>
  );
}

export default App;
