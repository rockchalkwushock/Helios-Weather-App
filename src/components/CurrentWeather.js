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
                    <td>{ weather.temp } <i className=' wi wi-fahrenheit'></i></td>
                    <td>{ weather.pressure } <i className='wi wi-barometer'></i></td>
                    <td>{ weather.humidity } <i className='wi wi-humidity'></i></td>
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
