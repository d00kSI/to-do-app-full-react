import React from 'react';

const CityInfo = ({ name, region }) => {
  return (
    <>
      <h2 className="city">{name}</h2>
      <h3 className="region">{region}</h3>
    </>
  );
};

export default CityInfo;