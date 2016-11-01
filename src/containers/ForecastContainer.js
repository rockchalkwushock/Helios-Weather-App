import React, { Component } from 'react';
import { connect } from 'react-redux';

import Forecast from '../components/Forecast';

class ForecastContainer extends Component {
  render() {
    const { hourlyforecast, isFetched } = this.props.forecast;
    return (
      <Forecast forecast={ hourlyforecast } isFetched={ isFetched }/>
    );
  }
}

const mapStateToProps = ({ forecast }) => {return { forecast };};

export default connect(mapStateToProps)(ForecastContainer);
