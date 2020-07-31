import React from "react"; 

export default function ForecastPreview(props){
    const icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`

    function temperature(){
        let temperature = Math.round(props.data.main.temp)
        return temperature 
    }

    function hours (){
        let time = new Date (props.data.dt*1000);
        let hours = time.getHours();
        return hours
    }

    return(
        <div className="col-1">
            <header> 
                 <img src={icon} className="card-img-top" alt=""/>
            </header>
            <h5>{temperature()}°F</h5>
            <p >{hours()}:00 </p>
         </div>
    )
}

