import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather, /*fetchBackground,*/ fetchForecast } from '../actions/actions';

import { SearchBar } from '../components/MyComponents';

class SearchBarContainer extends Component {

  _weatherSearch(input) {
    // this.props.fetchBackground(input.value);
    this.props.fetchCurrentWeather(input.value);
    this.props.fetchForecast(input.value);
    input.value = '';
  	}

  render() {
    const fetchWeather = term => { this._weatherSearch(term); };
    return (<SearchBar fetchWeather={ fetchWeather }/>);
  }
}

export default connect(null, { fetchCurrentWeather, /*fetchBackground,*/ fetchForecast })(SearchBarContainer);
