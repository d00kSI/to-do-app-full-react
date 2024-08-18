import React from 'react';
import Button from './Button';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {                                  // Define the TodoItem component, receiving todo, deleteTodo, and completeTodo as props
    return (
        <div className={`todo ${todo.fall ? 'fall' : ''}`}>                                 {/* Div container for the todo item, gets the fall style if completed */}
            <li className={`todo-label ${todo.completed ? 'completed' : ''}`}>
                {todo.text}                                                                 {/* Display the todo text */}    
            </li>
            <Button                                                                         // Button to mark the todo as completed
                icon={faCheck}
                className="complete-btn" 
                onClick={() => completeTodo(todo.text)}       
            />
            <Button                                                                         // Button to delete the todo
                icon={faTrash} 
                className="trash-btn" 
                onClick={() => deleteTodo(todo.text)}            
            />
        </div>
    );
};
export default TodoItem;                                                                    // Export the TodoItem component for use in other parts of the application (TodoList)