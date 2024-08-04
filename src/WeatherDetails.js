import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = ({ weather }) => {
  return (
    <div className="weather">
      <img src={weather.icon} alt="Weather Icon" className="weather-icon" />
      <h1 className="temp">{weather.temp}°C</h1>
      <h2 className="city">{weather.name}</h2>
      <h3 className="region">{weather.region}</h3>

      <div className="details">
        <div className="col">
          <div className="symbol-left">
            <FontAwesomeIcon icon={faDroplet} size="2x" />
          </div>
          <div>
            <p className="humidity">{weather.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>

        <div className="col">
          <div className="symbol-right">
            <FontAwesomeIcon icon={faWind} size="2x" />
          </div>
          <div>
            <p className="wind">{weather.wind} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;