import React, {Component} from 'react';
import { connect } from 'react-redux';

class CurrentWeather extends Component {
    _renderWeather(cityData) {
      const name = cityData.name;
      const temp = cityData.main.temp;
      const pressure = cityData.main.pressure; // hPa
      const humidity = cityData.main.humidity; // %
      const wind_spd = cityData.wind.speed;
      const wind_dir = cityData.wind.deg; // given as degrees must find way to come up with directional data.
      console.log(name, temp, pressure, humidity, wind_spd, wind_dir);
    }
    render() {
        return (

            <table className="table table-reflow">
                <thead>
                    <tr>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.current.map(this._renderWeather)}
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({current}) {
    return {current};
}

export default connect(mapStateToProps)(CurrentWeather);
