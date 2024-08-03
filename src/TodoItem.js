import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {                                  // Define the TodoItem component, receiving todo, deleteTodo, and completeTodo as props
    return (
        <div className={`todo ${todo.fall ? 'fall' : ''}`}>                                 {/* Div container for the todo item, gets the fall style if completed */}
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {todo.text}                                                                 {/* Display the todo text */}    
            </li>
            <button className="complete-btn" onClick={() => completeTodo(todo.text)}>       {/* Button to mark the todo as completed */}
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="trash-btn" onClick={() => deleteTodo(todo.text)}>            {/* Button to delete the todo */}
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};
export default TodoItem;                                                                    // Export the TodoItem component for use in other parts of the application (TodoList)