import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import TodoApp from './TodoApp';
import WeatherApp from './WeatherApp';
import JokeApp from './JokeApp';
import './styles.css';

function App() {
  const [activeApp, setActiveApp] = useState('todo-list');
  const [appTitle, setAppTitle] = useState('ToDo List');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const savedActiveApp = localStorage.getItem('activeApp');
    if (savedActiveApp) {
      setActiveApp(savedActiveApp);
      displayApp(savedActiveApp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeApp', activeApp);
  }, [activeApp]);

  const displayApp = (app) => {
    setActiveApp(app);
    switch (app) {
      case 'todo-list':
        setAppTitle('To Do List');
        break;
      case 'weather-app':
        setAppTitle('Weather App');
        break;
      case 'joke-app':
        setAppTitle('Random Joke Fetcher');
        break;
      default:
        setAppTitle('To Do List');
    }
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <span className="menu-icon" onClick={openNav}>&#9776; App List</span>

      <header>
        <h1 id="appTitle">{appTitle}</h1>
      </header>

      <SideNav isOpen={isNavOpen} onDisplayApp={displayApp} closeNav={closeNav} />

      <div id="appArea" className="appArea">
        {activeApp === 'todo-list' && <TodoApp />}
        {activeApp === 'weather-app' && <WeatherApp />}
        {activeApp === 'joke-app' && <JokeApp />}
      </div>
    </div>
  );
}

export default App;