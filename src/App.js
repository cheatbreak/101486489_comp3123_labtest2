import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./weatherUI/SearchBar";
import WeatherCard from "./weatherUI/WeatherCard";

import "./App.css";

const API_KEY = "c0383d042922194fccf1bf41f01730ad";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found!");
    }
  };

  useEffect(() => {
    fetchWeather("Toronto");
  }, []);

  return (
    <div className="app-container">
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;