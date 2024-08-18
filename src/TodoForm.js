import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Form from './Form';
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
        <Form onSubmit={handleSubmit}>                                                      {/* Attach the handleSubmit function to the form's onSubmit event */}
            <Input 
                type="text"
                placeholder="Task description"  
                value={input}
                onChange={(e) => setInput(e.target.value)}                                  // Update state on input change
                className="todo-input"
                required
            />
            <Button                                                                         // Submit button to submit the form
                icon={faSquarePlus}
                className="todo-button"
                type="submit"
            />
        </Form>
    );
};

export default TodoForm;                                                                    // Export the TodoForm component for use in other parts of the application (TodoApp)