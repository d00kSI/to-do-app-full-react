import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

// Define the TodoForm component which receives addTodo as a prop
const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');                                                 // State to hold the current input value

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();                                                                 // Prevent the default form submission behavior
        if (input.trim()) {                                                                 // Check if the input is not just whitespace                 
            addTodo(input);                                                                 // Call the addTodo function passed as a prop with the current input   
            setInput('');                                                                   // Clear the input field after adding the todo
        } else {
            setInput('No input!');                                                          // Set an error message if the input is empty        
        }
    };

    return (
        <form onSubmit={handleSubmit}>                                                      {/* Attach the handleSubmit function to the form's onSubmit event */}
            <input 
                type="text" 
                className="todo-input" 
                placeholder="Task description" 
                value={input}
                onChange={(e) => setInput(e.target.value)}                                  // Update state on input change
            />
            <button className="todo-button" type="submit">                                  {/* Button to submit the form */}
                <FontAwesomeIcon icon={faSquarePlus} />
            </button>
        </form>
    );
};

export default TodoForm;                                                                    // Export the TodoForm component for use in other parts of the application (TodoApp)