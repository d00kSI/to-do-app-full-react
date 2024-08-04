// useState is used to remember the current state of an element
import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDetails from "./WeatherDetails";
import ErrorMessage from "./ErrorMessage";
import './WeatherApp.css';

const apiKey = "504fb05cd7cd4ac38d5213023231806";
const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);                                           // Initialize error as null

  useEffect(() => {
    // Retrieve the last searched city from localStorage on component mount
    const storedCity = localStorage.getItem("lastSearchedCity");

    // Fetch the weather data for the storedCity if there is one
    if (storedCity) {
      setCity(storedCity);
      fetchWeatherData(storedCity);
    }
  }, []);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(apiUrl + cityName + `&key=${apiKey}`);
      const data = await response.json();
      console.log(data);

      // Check if the response contains an error
      if (data.error) {
        // Set the error message
        setError(data.error.message);
        setWeather(null);
      } else {
        // Set the weather variable with the fetched data
        setWeather({
          name: data.location.name,
          region: data.location.region,
          temp: data.current.temp_c,
          humidity: data.current.humidity,
          wind: data.current.wind_kph,
          icon: data.current.condition.icon,
        });
        // Clear any previous error messages
        setError(null);

        // Store the last searched city in localStorage
        localStorage.setItem("lastSearchedCity", cityName);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("An error occurred while fetching weather data.");                         // Set error message
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchWeatherData(city);
  };

  return (
    <div className="card">
      {/* Display the weather form and handle the submit */}
      <WeatherForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {/* Display the error message if an error occured */}
      {error && <ErrorMessage message={error} />}
      {/* Display the weather details if a valid city was provided */}
      {weather && <WeatherDetails weather={weather} />}
    </div>
  );
}