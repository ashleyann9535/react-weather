import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h5> Weather Information </h5>
      <ul className="text-capitalize">
        <li> Description: {props.currentDescription} </li>
        <li> Feels Like: {props.feelsLikeTemp}°F </li>
        <li> Humidity: {props.currentHumidity}% </li>
        <li> Wind Speed: {props.windSpeed}mph </li>
      </ul>
    </div>
  );
}