import React from 'react';
import ListItem from './ListItem';
import './SideNav.css';

function SideNav({ isOpen, onDisplayApp, closeNav }) {
  return (
    <div id="mySidenav" className="sidenav" style={{ width: isOpen ? '350px' : '0' }}>
      <a href="#" className="closebtn" onClick={(e) => { e.preventDefault(); closeNav(); }}>&times;</a>
      <ul id="app-list" className="app-list">
        <ListItem appName="To Do List" appId="todo-list" onDisplayApp={onDisplayApp} />
        <ListItem appName="Weather App" appId="weather-app" onDisplayApp={onDisplayApp} />
        <ListItem appName="Random Joke Fetcher" appId="joke-app" onDisplayApp={onDisplayApp} />
      </ul>
    </div>
  );
}

export default SideNav;