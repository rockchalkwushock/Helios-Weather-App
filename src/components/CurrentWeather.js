import React, { propTypes } from 'react';

const CurrentWeather = ({ weather, isFetched }) => {
  if (!isFetched) {
    return (
      <h1>Loading...</h1>
    );
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

// CurrentWeather.propTypes = {
//   weather: React.PropTypes.object,
//   weather: {
//     temp: React.PropTypes.xyz,
//     pressure: React.PropTypes.xyz,
//     humidity: React.PropTypes.xyz,
//     windspd: React.PropTypes.xyz,
//     winddir: React.PropTypes.xyz
//   }
// }

export default CurrentWeather;
