import React, { propTypes } from 'react';

const Header = ({ props, icon, isFetched }) => {
  if (!isFetched) {
    return (
      <h1>Loading...</h1>
    );
  }
  return(
    <div className="header">
      <h1>{props.name}</h1>
      <i className={icon}></i>
      <span><strong>Sunrise:</strong> {props.sunrise} <strong>Sunset:</strong> {props.sunset}</span>
    </div>
  );
}

Header.propTypes = {
  isFetched: React.PropTypes.bool,
  props: React.PropTypes.object,
  props: React.PropTypes.shape({
    name: React.PropTypes.string,
    sunrise: React.PropTypes.string,
    sunset: React.PropTypes.string,
  })
}

export default Header;
