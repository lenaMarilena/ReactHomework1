import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
return (
    <div className="Weather">
       <h1>Madrid</h1> 
        <ul>
<li>Wednesday 7:00</li>
<li>Mostly Cloudy</li>
        </ul>
<div className="row">
    <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"
        />

    </div>
</div>
        Hello from Weather</div>
)
}