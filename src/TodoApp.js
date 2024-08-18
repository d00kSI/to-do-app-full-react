import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './TodoApp.css';

const TodoApp = () => {
    console.log('TodoApp component mounted');

    // States to hold the list of todos and the current filter
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    // Effect to load todos from local storage when the component mounts if there are any and set let appropriately
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        console.log('Loaded todos:', storedTodos);
        setTodos(storedTodos);
    }, []);                                                                                         // Empty dependency array ensures that this runs only once on mount

    // Effect to save todos to the local storage whenever the todos state changes
    useEffect(() => {
        console.log('Saving todos:', todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Function to add a new todo
    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    // Function to delete a todo
    const deleteTodo = (text) => {
        setTodos(todos.map(todo => {
            if (todo.text === text){
                return {...todo, fall:true };                                                       // Set the fall style to true for the deleted todo
            }
            return todo;
        }));
        
        setTimeout(() => {
            setTodos(todos.filter(todo => todo.text !== text));                                     // Remove the todo after the fall transition
        }, 300);       
    };

    // Function to mark a todo as completed
    const completeTodo = (text) => {
        setTodos(todos.map(todo => 
            todo.text === text ? { ...todo, completed: true } : todo
        ));
    };

    // Funtion to filter todos based on the selected filter
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;                                          // Show only completed todos
        if (filter === 'uncompleted') return !todo.completed;                                       // Show only uncompleted todos
        return true;                                                                                // Show all todos is filter is 'all' 
    });

    return (
        <div className="content">  
            <div className='input-field'>
                <TodoForm addTodo={addTodo} />                                                      {/* Form to add new todos */}
                
                <div className='select'>                        
                    <select onChange={(e) => setFilter(e.target.value)} className="filter-todo">    {/* Dropdown to select a view filter */}
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>    
                
                <Button                                                                             // Button to delete all todos with a trash icon 
                    onClick={() => setTodos([])} 
                    icon={faTrash}
                    className="empty-button"
                    text="Delete All"
                    type="button"
                />
            </div>

            <TodoList 
                todos={filteredTodos}                                                               // Pass the filtered todos to TodoList
                deleteTodo={deleteTodo}                                                             // Pass the delete function to TodoList
                completeTodo={completeTodo}                                                         // Pass the complete function to TodoList
            />
        </div>
    );
};

export default TodoApp;                                                                             // Export the TodoApp component to be used in other parts of the application (App)