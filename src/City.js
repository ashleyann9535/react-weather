import React from "react";
import "./City.css";

function City(props) {
  return (
    <div className="City">
      <h2>
        {" "}
        <strong> {props.defaultCity} </strong>{" "}
      </h2>
      <h5> 90° / 68° </h5>
    </div>
  );
}

export default City;