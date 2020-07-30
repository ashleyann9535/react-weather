import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let temp = props.currentTemp
   return (
    <div className="Weather">
      <br />
      <div>
        <small>{temp}°</small> F|C
      </div>
    </div>
  );
   
}