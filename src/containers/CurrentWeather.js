import React, {Component} from 'react';
import {connect} from 'react-redux';
import {degToCard, pressureConverter, tempConverter, timeStampConverter} from '../conversions/conversions';

export class CurrentWeather extends Component {
    _renderWeather(cityData) {
        const name = cityData.name;
        const {temp, pressure, humidity} = cityData.main;
        const {speed, deg} = cityData.wind;
        const {sunrise, sunset} = cityData.sys;

        const windDir = degToCard(deg);
        const sunRise = timeStampConverter(sunrise);
        const sunSet = timeStampConverter(sunset);
        const pressureInches = pressureConverter(pressure);
        const farenheit = tempConverter(temp);
        console.log(`Wind Direction: ${windDir}`, `Sunrise: ${sunRise}`, `Sunset: ${sunSet}`);
        return (
            <div>
                <div className='header'>
                    <h2>{name}</h2>
                    <h6>
                        <span>Sunrise: {sunRise}</span>
                        <span>Sunset: {sunSet}</span>
                    </h6>
                </div>

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
                    <tr key={name}>
                        <td>{farenheit} F</td>
                        <td>{pressureInches}"</td>
                        <td>{humidity} %</td>
                        <td>{speed} mph {windDir}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        let listTable = [];
        if (this.props.current) {
            listTable = this.props.current.map(this._renderWeather);
        }

        return (
            <div>
              {listTable}
            </div>
        );
    }
}

function mapStateToProps({current}) {
    return {current};
}

export default connect(mapStateToProps)(CurrentWeather);
