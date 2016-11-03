import React, { propTypes } from 'react';

const Header = ({ isFetched, weather }) => {
  if (!isFetched) {
    return (
      <h1>Loading...</h1>
    );
  }
  return(
    <div className="header">
      <span><h1>{weather.name}</h1><i className={weather.icon}></i></span>
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
