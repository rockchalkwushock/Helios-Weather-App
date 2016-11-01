import React, { Component } from 'react';

import CurrentWeatherContainer from '../containers/CurrentWeatherContainer';
import ForecastContainer from '../containers/ForecastContainer';
import HeaderContainer from '../containers/HeaderContainer';
import SearchBarContainer from '../containers/SearchBarContainer';


export default class App extends Component {
  render() {
    return (
      <div className='test'>
        <SearchBarContainer />
        <HeaderContainer />
        <CurrentWeatherContainer />
        <ForecastContainer />
      </div>
    );
  }
}
