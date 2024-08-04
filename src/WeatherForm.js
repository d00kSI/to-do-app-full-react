import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const WeatherForm = ({ city, setCity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="inputCity"
        placeholder="Please enter the city name"
        required
        value={city}
        onChange={(event) => setCity(event.target.value)}               // Update city state on input change
      />
      <button type="submit" className="submitButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
    </form>
  );
};

export default WeatherForm;