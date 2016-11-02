import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeatherContainer from './CurrentWeatherContainer';
import ForecastContainer from './ForecastContainer';

class BackgroundContainer extends Component {


  render() {
    const { image } = this.props.background;
    return (
      <div id='BackgroundContainer' className={image}>
        <CurrentWeatherContainer />
        <ForecastContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ background }) => {
  return { background };
};

export default connect(mapStateToProps)(BackgroundContainer);
