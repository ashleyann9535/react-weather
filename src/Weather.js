import React, { useState} from "react";
import "./Weather.css";

export default function Weather(props) {
  const [unit, setUnit] = useState("fahrenheit") 

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
  }

  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function equation(){
    return((props.fahrenheit - 32) * (5/9))

  }

  
  if (unit ==="fahrenheit") {
    return (
      <div className="Weather">
        <br />
        <div>
          <img src={props.mainIcon} className="card-img-top" alt=""/>
          <br />
          <small className="currentTemp">{props.fahrenheit}°</small> 
          <span>F | 
            <a href="/" onClick={showCelsius}> C</a></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <br />
        <div>
          <img src={props.mainIcon} className="card-img-top" alt="" />
          <br />
          <small className="currentTemp">{Math.round(equation())}°</small> 
          <span><a href="/" onClick={showFahrenheit}>F </a>
           | C</span>
        </div>
      </div>
    );
  }
   
}