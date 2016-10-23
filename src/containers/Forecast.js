import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unitConverter} from '../conversions/conversions_2.0';


export class Forecast extends Component {
  _renderForecast(cityData){
    return cityData.list.slice(0,5).map(data => {
      return (
        <tr key={data.dt}>
          <td>{unitConverter.toGMT(data.dt)}</td>
          <td>{unitConverter.toFarenheit(data.main.temp)} F</td>
          <td>{unitConverter.toMPH(data.wind.speed)} {unitConverter.toCardinal(data.wind.deg)}</td>
        </tr>
      );
    });
  }

  render(){
    let forecastData = [];
    if (this.props.forecast) {
       forecastData = this.props.forecast.map(this._renderForecast);
    }
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
          {forecastData}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps)(Forecast);
