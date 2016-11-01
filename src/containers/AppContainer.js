import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather, fetchForecast } from '../actions/actions';


import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class AppContainer extends Component {

  componentWillUpdate() {

  }

  // NOTE: All actions are processed here.
  _weatherSearch(input) {
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    input.value = '';
  	}

  render() {
    const getWeather = term => { this._weatherSearch(term); };
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

// NOTE: Reducers having new state mapped to props of AppContainer.
const mapStateToProps = ({ background, current, forecast, cw_image }) => {
  return { background, current, forecast, cw_image };
};

export default connect(mapStateToProps, { fetchCurrentWeather, fetchForecast })(AppContainer);
