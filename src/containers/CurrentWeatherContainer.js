import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CurrentWeather, DashButton, ForecastButton } from '../components/index';

class CurrentWeatherContainer extends Component {
  render() {
    const { isFetched, weatherData } = this.props.current;
    return (
      <div className="weather">
        <CurrentWeather weather={weatherData} isFetched={isFetched} />
        <DashButton />
        <ForecastButton />
      </div>
    );
  }
}

const mapStateToProps = ({ current }) => ({ current });

export default connect(mapStateToProps)(CurrentWeatherContainer);
