import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DashButton, Forecast } from '../components/index';

class ForecastContainer extends Component {
  render() {
    const { hourlyforecast, isFetched } = this.props.forecast;
    return (
      <div className="forecast">
        <Forecast forecast={hourlyforecast} isFetched={isFetched} />
        <DashButton />
      </div>
    );
  }
}

const mapStateToProps = ({ forecast }) => ({ forecast });

export default connect(mapStateToProps)(ForecastContainer);
