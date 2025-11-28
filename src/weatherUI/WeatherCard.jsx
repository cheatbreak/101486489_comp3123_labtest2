export default function WeatherCard({ weather }) {
    // if api not working
  if (!weather) {
    return (
      <div className="weather-card placeholder">
        <h2>Weather</h2>
        <p>Search for a city.</p>
      </div>
    );
  }

  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="wc-left">
        <h2 className="wc-city">{weather.name}</h2>
        <h1 className="wc-temp">{Math.round(weather.main.temp)}°C</h1>
        <p className="wc-desc">{weather.weather[0].description}</p>
      </div>

      <div className="wc-right">
        <img className="wc-icon" src={icon} alt="Weather Icon" />

        <div className="wc-details">
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind:</strong> {weather.wind.speed} km/h</p>
          <p><strong>Pressure:</strong> {weather.main.pressure} mb</p>
        </div>
      </div>
    </div>
  );
}