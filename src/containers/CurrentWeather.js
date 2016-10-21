import React, {Component} from 'react';
import {connect} from 'react-redux';


export class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    _renderWeather(cityData) {
        const name = cityData.name;
        const {temp, pressure, humidity} = cityData.main;
        const {speed, deg} = cityData.wind; // deg: given as degrees must find way to come up with directional data.
        const {sunrise, sunset} = cityData.sys; // creat a newDate(sunrise/sunset)

        // console.log(name, `Temp: ${temp}`, `Pressure: ${pressure}`, `Humidity: ${humidity}`, `Wind Speed: ${speed}`, `Wind Direction: ${deg}`, `Sunrise: ${sunrise}`, `Sunset: ${sunset}`);
        return (
            <tr key={name}>
                <td>{temp}</td>
                <td>{pressure}</td>
                <td>{humidity}</td>
                <td>{speed}</td>
            </tr>
        );
    }
    render() {
        let listTable = [];
        if (this.props.current) {
            listTable = this.props.current.map(this._renderWeather);
        }

        return (
            <table className="table table-reflow">
                <thead>
                    <tr>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                        <th>Wind (mph)</th>
                    </tr>
                </thead>
                <tbody>
                    {listTable}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({current}) {
    return {current};
}

export default connect(mapStateToProps)(CurrentWeather);
