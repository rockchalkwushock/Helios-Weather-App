import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather, fetchForecast } from '../actions/actions';

import { CurrentWeather, Forecast, SearchBar } from '../components/MyComponents';

class AppContainer extends Component {
  render() {
    return (
      <div className="application">
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps,
  { fetchCurrentWeather, fetchForecast })(AppContainer);
