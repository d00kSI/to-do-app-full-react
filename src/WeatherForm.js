import React from 'react';
import Input from './Input';
import Button from './Button';
import Form from './Form';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const WeatherForm = ({ city, setCity, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className="form">
      <Input
        type="text"
        placeholder="Please enter the city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}               // Update city state on input change
        className="inputCity"
        required
      />
      <Button 
        icon={faMagnifyingGlass} 
        className="submitButton"
        type="submit" 
        size="xl"                            
      />
    </Form>
  );
};

export default WeatherForm;