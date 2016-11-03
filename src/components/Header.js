import React, { propTypes } from 'react';

import { Load } from './MyComponents';

const Header = ({ isFetched, weather }) => {
  if (!isFetched) {
    return (
      <Load />
    );
  }
  return(
    <div className='row header'>
      <h1>{weather.name}</h1>
      <span><i className='wi wi-sunrise'></i> {weather.sunrise} <i className='wi wi-sunset'></i> {weather.sunset}</span>
    </div>
  );
}

Header.propTypes = {
  isFetched: React.PropTypes.bool,
  weather: React.PropTypes.object,
  weather: React.PropTypes.shape({
    name: React.PropTypes.string,
    sunrise: React.PropTypes.string,
    sunset: React.PropTypes.string,
  })
}

export default Header;
