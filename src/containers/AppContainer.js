import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather, fetchForecast } from '../actions/actions';

import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';

class AppContainer extends Component {

  componentWillUpdate() {
    // need to use this so CurrentWeather & Forecast are not appending before
    // the search is performed.
  }

  _weatherSearch(input) {
    console.log(input.value);
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    input.value = '';
  	}

  render() {
    const getWeather = _.debounce(term => { this._weatherSearch(term); }, 300);
    return (
      <div className="application">
        <SearchBar getWeather={getWeather} />
        {Boolean(this.props.current) && <CurrentWeather weather={this.props.current.weatherData} isFetched={this.props.current.isFetched}/>}
        {Boolean(this.props.forecast) && <Forecast forecast={this.props.forecast.forecast} isFetched={this.props.forecast.isFetched}/>}
      </div>
    );
  }
}

const mapStateToProps = ({ current, forecast }) => {
  return { current, forecast };
};

export default connect(mapStateToProps, { fetchCurrentWeather, fetchForecast })(AppContainer);
