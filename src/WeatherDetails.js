import React from 'react';
import Image from './Image';
import Temperature from './Temperature';
import CityInfo from './CityInfo';
import WeatherDetail from './WeatherDetail';
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = ({ weather }) => {
  return (
    <div className="weather">
      <Image src={weather.icon} alt="Weather Icon" />
      <Temperature temp={weather.temp} />
      <CityInfo name={weather.name} region={weather.region} />

      <div className="details">
        <WeatherDetail icon={faDroplet} value={`${weather.humidity}%`} label="Humidity" />
        <WeatherDetail icon={faWind} value={`${weather.wind} km/h`} label="Wind Speed" />
      </div>
    </div>
  );
};

export default WeatherDetails;