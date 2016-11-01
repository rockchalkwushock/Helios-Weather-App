import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBackground, fetchCurrentWeather, fetchForecast, fetchCurrentWeatherIcon } from '../actions/actions';


import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class AppContainer extends Component {

  componentWillUpdate() {

  }

  _weatherSearch(input) {
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    this.props.fetchCurrentWeatherIcon(input.value);
    this.props.fetchBackground(input.value);
    input.value = '';
  	}

  render() {
    const getWeather = _.debounce(term => { this._weatherSearch(term); }, 300);
    const { current, forecast, cw_image } = this.props;
    return (
      <div className="application">
        <SearchBar getWeather={ getWeather } />
        <Header props={ current.weatherData } icon={ cw_image.icon } isFetched={ current.isFetched }/>
        {Boolean(current) && <CurrentWeather weather={ current.weatherData } isFetched={ current.isFetched }/>}
        {Boolean(forecast) && <Forecast forecast={ forecast.hourlyforecast } isFetched={ forecast.isFetched }/>}
      </div>
    );
  }
}

const mapStateToProps = ({ background, current, forecast, cw_image }) => {
  return { background, current, forecast, cw_image };
};

export default connect(mapStateToProps,
  { fetchBackground, fetchCurrentWeather, fetchForecast, fetchCurrentWeatherIcon })(AppContainer);
