import React, { useState } from "react";
import "./App.css";
import DateTime from "./DateTime";
import City from "./City";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import HourForecast from "./HourForecast";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({ready: false});
  const [city, setCity] = useState ("Chicago")

  function displayWeather(response){
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt*1000),
      highTemperature: Math.round(response.data.main.temp_max),
      lowTemperature: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function searchSubmit(event){
    event.preventDefault();
    search();
  }

  function searchCity(event){
    setCity(event.target.value);
  }

  function search(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d26daee782ed7569b86130dfdffeb3ee&units=imperial`;
    axios.get(url).then(displayWeather);
  }

  if (weather.ready){
    return (
      <div className="App">
        <h1>Today's Weather</h1>
        <div className="Search">
          <form onSubmit={searchSubmit} >
            <input type="search" placeholder="city" onChange={searchCity} />
            <input type="submit" value="search" />
          </form>
        </div>
        <DateTime date = {weather.date} />
        <br />
        <div className="row">
          <div className="col-md-3">
            <City displayCity={weather.city} highTemp={weather.highTemperature} lowTemp={weather.lowTemperature} />
          </div>
          <div className="col-md-9">
            <Weather fahrenheit={weather.temperature} mainIcon={weather.icon} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <WeatherInfo currentDescription={weather.description} feelsLikeTemp={weather.feelsLike} currentHumidity={weather.humidity} windSpeed={weather.wind} />
          </div>
          <div className="col-md-9 forecast">
            <HourForecast city={weather.city} />
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
    search();
    return "Loading"; 
  }
}
export default App;


