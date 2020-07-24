import React from "react";
import "./App.css";
import Search from "./Search";
import DateTime from "./DateTime";
import City from "./City";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Search />
      <DateTime />
      <br />
      <div className="row">
        <div className="col-md-4">
          <City />
        </div>
        <div className="col-md-8">
          <Weather />
        </div>
      </div>
      <WeatherInfo />
      <br />
      <h6 className="gitSite">
        <a href="https://github.com/ashleyann9535/react-weather">Open source code </a>
        by Ashley Johnson
      </h6>
    </div>
  );
}
export default App;


