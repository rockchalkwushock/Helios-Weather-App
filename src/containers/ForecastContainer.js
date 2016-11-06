import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Forecast } from '../components/MyComponents';

class ForecastContainer extends Component {
  render() {
    const { hourlyforecast, isFetched } = this.props.forecast;
    return (
      <div className="forecast">
        <Forecast forecast={ hourlyforecast } isFetched={ isFetched }/>
      </div>
    );
  }
}

const mapStateToProps = ({ forecast }) => {return { forecast };};

export default connect(mapStateToProps)(ForecastContainer);
