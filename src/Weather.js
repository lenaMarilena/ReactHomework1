import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
function handleResponse(response) { 

}
    const apiKey = "48ce22c0123c292b5b6d36e5ddd78fb4";
    let city = "Berlin";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/> 
            </div>
             </div>
        </form>
       <h1>Madrid</h1> 
        <ul>
<li>Wednesday 7:00</li>
<li>Mostly Cloudy</li>
        </ul>
<div className="row mt-3">
    <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"
        />
<span className="temperature">25</span><span className="unit">°C</span>
    </div>
    <div className="col-6">
        <ul>
            <li>
                Precipitation: 15%
            </li>
            <li>
                Humidity: 75%
            </li>
            <li>
                Wind: 13 km/h
            </li>
        </ul>
    </div>
</div>
</div>
)
}