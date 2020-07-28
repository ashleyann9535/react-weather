import React, { useState } from "react";
import "./Weather.css";
import axios from "axios"

export default function Weather() {
  let [weather, setWeather] = useState({ready: false});

  function displayWeather(response){
    console.log (response.data)
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
    });
  }


  if (weather.ready){
   return (
    <div className="Weather">
      <br />
      <div>
        <small>{Math.round(setWeather.temperature)} </small> F|C
      </div>
    </div>
  );
   } else {
    let city = "Chicago"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d26daee782ed7569b86130dfdffeb3ee&units=imperial`;
    axios.get(url).then(displayWeather);
    return "Loading"; 
   }
}