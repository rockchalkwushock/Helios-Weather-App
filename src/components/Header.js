import React, { propTypes } from 'react'; // eslint-disable-line

import { Load } from './index';

const Header = ({ isFetched, weather }) => {
  if (!isFetched) {
    return (
      <Load />
    );
  }
  return (
    <div className='row header'>
      <h1>{weather.name}</h1>
      <span>
        <i className='wi wi-sunrise' /> {weather.sunrise}
        <i className='wi wi-sunset' /> {weather.sunset}
      </span>
    </div>
  );
};

Header.propTypes = {
  isFetched: React.PropTypes.bool,
  weather: React.PropTypes.shape({
    name: React.PropTypes.string,
    sunrise: React.PropTypes.string,
    sunset: React.PropTypes.string,
  })
};

export default Header;
