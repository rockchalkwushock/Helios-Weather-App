import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unitConverter} from '../conversions/conversions_2.0';

export class CurrentWeather extends Component {
    _renderCurrentWeather(cityData) {
        const name = cityData.name;
        const {temp, pressure, humidity} = cityData.main;
        const {speed, deg} = cityData.wind;
        const {sunrise, sunset} = cityData.sys;
        return (
            <tr key={name}>
                <td>{unitConverter.toFarenheit(temp)} F</td>
                <td>{unitConverter.toInchesHG(pressure)}"</td>
                <td>{humidity}%</td>
                <td>{unitConverter.toMPH(speed)}mph {unitConverter.toCardinal(deg)}</td>
            </tr>
        );
    }

    render() {
        let currentWeatherData = [];
        if (this.props.current) {
            currentWeatherData = this.props.current.map(this._renderCurrentWeather);
        }
        return (
            <table className="table table-reflow">
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                        <th>Wind</th>
                    </tr>
                </thead>
                <tbody>
                    {currentWeatherData}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({current}) {
    return {current};
}

export default connect(mapStateToProps)(CurrentWeather);
