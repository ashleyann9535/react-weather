import React from "react";
import "./WeatherInfo.css";
import axios from "axios"

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <h5> Weather Information </h5>
      <ul>
        <li> Description: Sunny </li>
        <li> Feels Like: 90° </li>
        <li> Humidity: 70% </li>
        <li> Wind Speed: 5mph </li>
      </ul>
    </div>
  );
}