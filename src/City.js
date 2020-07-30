import React from "react";
import "./City.css";

function City(props) {
  return (
    <div className="City">
      <h2>
        {" "}
        <strong> {props.displayCity} </strong>{" "}
      </h2>
      <h5> {props.highTemp}° / {props.lowTemp}° </h5>
    </div>
  );
}

export default City;