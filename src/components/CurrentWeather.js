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

CurrentWeather.propTypes = {
  isFetched: React.PropTypes.bool,
  weather: React.PropTypes.object,
  weather: React.PropTypes.shape({
    humidity: React.PropTypes.number,
    pressure: React.PropTypes.number,
    temp: React.PropTypes.number,
    winddir: React.PropTypes.string,
    windspd: React.PropTypes.number
  })
}

export default CurrentWeather;
