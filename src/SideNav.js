import React from 'react';
import './SideNav.css';

function SideNav({ isOpen, onDisplayApp, closeNav }) {
  return (
    <div id="mySidenav" className="sidenav" style={{ width: isOpen ? '350px' : '0' }}>
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
      <ul id="app-list" className="app-list">
        <li><a href="#" onClick={() => onDisplayApp('todo-list')}>To Do List</a></li>
        <li><a href="#" onClick={() => onDisplayApp('weather-app')}>Weather App</a></li>
        <li><a href="#" onClick={() => onDisplayApp('joke-app')}>Random Joke Fetcher</a></li>
      </ul>
    </div>
  );
}

export default SideNav;