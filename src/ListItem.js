import React from 'react';

const ListItem = ({ appName, appId, onDisplayApp }) => {
  return (
    <li>
      <a href="#" onClick={(e) => { e.preventDefault(); onDisplayApp(appId); }}>
        {appName}
      </a>
    </li>
  );
};

export default ListItem;