// useState is used to remember the current state of an element
import { useState, useEffect } from 'react';
import './JokeApp.css';

export default function JokeContainer() {
  // State variables to hold the joke data, category, and error message
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const apiURL = 'https://v2.jokeapi.dev/joke/Any';

  // Function to populate the joke
  function populateJoke() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Clears any previous error messages from the state variable
        setErrorMessage('');
        // Set the category and define the color
        const labelColor = defineColor(data.category);
        setCategory(data.category);

        // Handle different types of jokes
        if (data.type === 'single') {
          // Clear setup for single jokes
          setSetup('');
          // Set the joke and replace \n with <br>
          setDelivery(data.joke.replace(/\n/g, '<br />'));
        } else {
          // Set the setup and replace \n with <br>
          setSetup(data.setup.replace(/\n/g, '<br />'));
          // Set the delivery and replace \n with <br />
          setDelivery(data.delivery.replace(/\n/g, '<br />'));
        }
        
        // Store the joke parameters in localStorage after setting the state
        localStorage.setItem('setup', data.type === 'single' ? '' : data.setup.replace(/\n/g, '<br />'));
        localStorage.setItem('delivery', data.type === 'single' ? data.joke.replace(/\n/g, '<br />') : data.delivery.replace(/\n/g, '<br />'));
        localStorage.setItem('category', data.category);
      })
      
      // Catch any errors while fetching the joke
      .catch(error => {
        setErrorMessage(error.net);
        console.error(error);
      });
  }

  // Function to define the color based on the category
  function defineColor(category) {
    switch (category) {
      case 'Programming':
        return '#00008B';
      case 'Misc':
        return '#dc7d44';
      case 'Dark':
        return '#000000';
      case 'Spooky':
        return '#4B0082';
      case 'Christmas':
        return '#D6001C';
      case 'Pun':
        return '#3b3f54';
      default:
        // Default color if category is not matched - please adjust if needed
        return '#FFFFFF'; 
    }
  }

  // useEffect to fetch a joke when the component mounts and set an interval
  useEffect(() => {
    // Retrieve the joke from localStorage
    const storedSetup = localStorage.getItem('setup');
    const storedDelivery = localStorage.getItem('delivery');
    const storedCategory = localStorage.getItem('category');

    if (storedDelivery) {
      setSetup(storedSetup);
      setDelivery(storedDelivery);
      setCategory(storedCategory);
    } else {
      // Fetch a joke if there is no stored one
      populateJoke();
    }
    
    // Set an interval to fetch a new joke every 30 seconds
    const interval = setInterval(populateJoke, 30000);

    // clean interval on componennt unmount
    return () => clearInterval(interval); 
  }, []);

  return (
    <section>
      <div className="joke-container" id="joke-container">
        <div id="label" className="category" style={{ background: defineColor(category) }}>{category}</div>
        <div id="joke" className="joke">
          <p id="setup" className="setup" dangerouslySetInnerHTML={{ __html: setup }}></p>
          <p id="delivery" className="delivery" dangerouslySetInnerHTML={{ __html: delivery }}></p>
        </div>
      </div>
      <div id="errorMessage" className="error">{errorMessage}</div>
    </section>
  );
}
