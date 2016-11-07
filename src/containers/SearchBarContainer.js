import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchCurrentWeather, fetchForecast } from '../actions/actions';

import { SearchBar } from '../components/MyComponents';

class SearchBarContainer extends Component {

  _weatherSearch(input) {
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    input.value = '';
    const path = '/dashboard';
    browserHistory.push(path);
  	}

  render() {
    const fetchWeather = term => { this._weatherSearch(term); };
    return (<SearchBar fetchWeather={ fetchWeather }/>);
  }
}

export default connect(null, { fetchCurrentWeather, fetchForecast })(SearchBarContainer);
