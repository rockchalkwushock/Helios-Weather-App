import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unitConverter} from '../conversions/conversions_2.0.js';


class Forecast extends Component {
  _renderForecast(cityData){
    return cityData.list.slice(0,5).map(data => {
      return (
        <tr key={data.dt}>
          <td>{unitConverter.toGMT(data.dt)}</td>
          <td>{unitConverter.toFarenheit(data.main.temp)}</td>
          <td>{unitConverter.toMPH(data.wind.speed)} {unitConverter.toCardinal(data.wind.deg)}</td>
        </tr>
      );
    });
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Time</td>
            <td>Temp</td>
            <td>Wind</td>
          </tr>
        </thead>
        <tbody>
          {this.props.forecast.map(this._renderForecast)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps)(Forecast);
