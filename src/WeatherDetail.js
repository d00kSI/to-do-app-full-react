import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherDetail = ({ icon, value, label }) => {
  return (
    <div className="col">
      <div className="symbol-left">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <div>
        <p className={label.toLowerCase()}>{value}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default WeatherDetail;