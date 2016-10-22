import React, { Component } from 'react';

import CurrentWeather from '../containers/CurrentWeather';
import Forecast from '../containers/Forecast';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dash'>
        <CurrentWeather />
        <Forecast />
      </div>
    );
  }
}
