import React from 'react';

const CurrentWeather = ({ weather }) => {
  if (!weather) {
    <h1>Loading...</h1>
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
                <tr>
                    <td>{ weather.temp } F</td>
                    <td>{ weather.pressure }"</td>
                    <td>{ weather.humidity }%</td>
                    <td>{ weather.windspd }mph { weather.winddir }</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CurrentWeather;
