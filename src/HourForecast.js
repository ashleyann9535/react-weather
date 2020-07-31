import React, { useState } from "react";
import "./HourForecast.css";
import axios from "axios"
import ForecastPreview from "./ForecastPreview";


function HourForecast (props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function hourlyForecastResponse(response){
        console.log(response.data);
        setForecast(response.data);
        setLoaded(true); 
    }
    
    if (loaded && props.city === forecast.city.name){
        return (
            <div className="row">
                <ForecastPreview data={forecast.list[0]} />
                <ForecastPreview data={forecast.list[1]} />
                <ForecastPreview data={forecast.list[2]} />
            </div>
        );
    }else {
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=d26daee782ed7569b86130dfdffeb3ee&units=imperial`
        axios.get(apiUrl).then(hourlyForecastResponse);
        return null
    } 
}



export default HourForecast 