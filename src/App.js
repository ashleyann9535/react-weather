import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import DateTime from "./DateTime";
import City from "./City";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import HourForecast from "./HourForecast"
import axios from "axios"

function App() {
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
      <div className="App">
        <h1>Weather</h1>
        <Search />
        <DateTime />
        <br />
        <div className="row">
          <div className="col-md-4">
            <City defaultCity="Chicago" />
          </div>
          <div className="col-md-8">
            <Weather currentTemp={setWeather.temperature} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <WeatherInfo />
          </div>
          <div className="col-md-9">
            <HourForecast />
          </div>
        </div>
        <br />
        <h6 className="gitSite">
          <a href="https://github.com/ashleyann9535/react-weather" target = "_blank">Open source code </a>
          by Ashley Johnson
        </h6>
      </div>
    );
  } else {
    let city = "Chicago"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d26daee782ed7569b86130dfdffeb3ee&units=imperial`;
    axios.get(url).then(displayWeather);
    return "Loading"; 
  }
}
export default App;


