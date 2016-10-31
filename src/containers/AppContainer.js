import _ from 'lodash';
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

  _weatherSearch(input) {
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    input.value = '';
  	}

  render() {
    const getWeather = _.debounce(term => { this._weatherSearch(term); }, 300);
    const { current, forecast } = this.props;
    return (
      <div className="application">
        <SearchBar getWeather={getWeather} />
        <Header props={current.weatherData} isFetched={ current.isFetched }/>
        {Boolean(current) && <CurrentWeather weather={ current.weatherData } isFetched={ current.isFetched }/>}
        {Boolean(forecast) && <Forecast forecast={ forecast.hourlyforecast } isFetched={ forecast.isFetched }/>}
      </div>
    );
  }
}

const mapStateToProps = ({ current, forecast }) => {
  return { current, forecast };
};

export default connect(mapStateToProps, { fetchCurrentWeather, fetchForecast })(AppContainer);
