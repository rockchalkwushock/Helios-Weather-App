import React, { Component } from 'react';

import CurrentWeather from '../containers/CurrentWeather';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dash'>
        <CurrentWeather />
      </div>
    );
  }
}
