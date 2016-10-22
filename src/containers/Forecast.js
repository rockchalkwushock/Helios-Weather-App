import React, {Component} from 'react';
import {connect} from 'react-redux';
import {degToCard, tempConverter, timeStampConverter, windSpeedConverter} from '../conversions/conversions';

export class Forecast extends Component {
    _renderWeather(cityData) {
      // Each const is an [5]
      const time = cityData.list.slice(0, 5).map(weather => weather.dt).map(timeStampConverter);
      const temp = cityData.list.slice(0, 5).map(weather => weather.main.temp).map(tempConverter);
      const speed = cityData.list.slice(0, 5).map(weather => weather.wind.speed).map(windSpeedConverter);
      const direction = cityData.list.slice(0, 5).map(weather => weather.wind.deg).map(degToCard);

      // let forecastObject = {
      //   time,
      //   temp,
      //   speed,
      //   direction
      // };
      //
      // console.log(forecastObject);

        return (
          <tr key={time}>
              <td>{time}</td>
              <td>{temp} F</td>
              <td>{speed} mph {direction}</td>
          </tr>
        );
    }
    render() {
        let listTable = [];
        if (this.props.forecast) {
            listTable = this.props.forecast.map(this._renderWeather);
        }

        return (
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th>Time</th>
                      <th>Temp</th>
                      <th>Wind</th>
                  </tr>
              </thead>
              <tbody>
                {this.props.forecast.map(this._renderWeather)}
              </tbody>
          </table>
        );
    }
}

function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps)(Forecast);
