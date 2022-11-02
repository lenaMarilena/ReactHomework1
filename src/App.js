import React from "react";
import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project coded by 
<a href="https://github.com/lenaMarilena"> Olena Ovcharenko </a>
</footer>
</div>
</div>
);
}