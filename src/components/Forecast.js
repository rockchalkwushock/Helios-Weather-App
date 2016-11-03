import React, { propTypes } from 'react';

const Forecast = ({ forecast, isFetched }) => {
  if (!isFetched) {
    return (
      <h1>Loading...</h1>
    );
  }
  const forecastData = forecast.map(data => {
    return(
      <tr key={data.time}>
        <td>{data.time}</td>
        <td><i className={data.icon}></i></td>
        <td>{data.temp} F</td>
        <td>{data.windspd} MPH {data.winddir}</td>
      </tr>
    );
  })

  return (
    <table className="table table-hover forecast">
      <thead>
        <tr>
          <td>Time</td>
          <td></td>
          <td>Temp</td>
          <td>Wind</td>
        </tr>
      </thead>
      <tbody>
        {forecastData}
      </tbody>
    </table>
  );
};

Forecast.propTypes = {
  forecast: React.PropTypes.arrayOf(React.PropTypes.object),
  forecast: React.PropTypes.arrayOf(React.PropTypes.shape({
    temp: React.PropTypes.number,
    time: React.PropTypes.string,
    winddir: React.PropTypes.string,
    windspd: React.PropTypes.number,
  })),
  isFetched: React.PropTypes.bool
}

export default Forecast;
