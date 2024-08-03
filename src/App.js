import React from 'react';
import TodoApp from './TodoApp';
import './styles.css';

const App = () => {
    console.log('Parent App component mounted');

    return (
        <div className="App">
            <TodoApp />
        </div>
    );
};

export default App;
