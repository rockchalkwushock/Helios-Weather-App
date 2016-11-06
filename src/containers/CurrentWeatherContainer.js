import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CurrentWeather } from '../components/MyComponents';

class CurrentWeatherContainer extends Component {
  render() {
    const { isFetched, weatherData } = this.props.current;
    return (
      <div className="weather">
        <CurrentWeather weather={ weatherData } isFetched={ isFetched }/>
      </div>
    );
  }
}

const mapStateToProps = ({ current }) => {return { current };};

export default connect(mapStateToProps)(CurrentWeatherContainer);
