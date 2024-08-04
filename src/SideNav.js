import React from 'react';

function SideNav({ onDisplayApp }) {
  const closeNav = () => {
    onDisplayApp(null);
  };

  return (
    <div id="mySidenav" className="sidenav">
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