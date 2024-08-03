import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {                                 // Define the TodoList component, receiving todos, deleteTodo, and completeTodo as props
    return (
        <ul className="todo-list">                                                          {/* Unordered list to display the list of todos */}
            {todos.map((todo, index) => (                                                   // Map over the todos array to create a TodoItem for each todo                    
                <TodoItem 
                    key={index}                                                             // Usong index as a unique key for each TodoItemx    
                    todo={todo}                                                             // Pass the current todo object to the TodoItem
                    deleteTodo={deleteTodo}                                                 // Pass the deleteTodo function to the TodoItem
                    completeTodo={completeTodo}                                             // Pass the completeTodo function to the TodoItem
                />
            ))}
        </ul>
    );
};

export default TodoList;                                                                    // Export the TodoList component for use in other parts of the application (TodoApp)