export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="left-panel">
        <h2>{weather.name}</h2>
        <h1>{Math.round(weather.main.temp)}°C</h1>
        <p>{weather.weather[0].description}</p>
      </div>

      <div className="right-panel">
        <img src={icon} alt="weather icon" />
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
        <p>Pressure: {weather.main.pressure} mb</p>
      </div>
    </div>
  );
}