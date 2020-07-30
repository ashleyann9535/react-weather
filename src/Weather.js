import React from "react";
import "./Weather.css";

export default function Weather(props) {
   return (
    <div className="Weather">
      <br />
      <div>
        <small>{props.currentTemp}°</small> F|C
      </div>
    </div>
  );
   
}