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
        <td>{data.temp} F</td>
        <td>{data.windspd} MPH {data.winddir}</td>
      </tr>
    );
  })

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>Time</td>
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

// Forecast.propTypes = {
//   forecast: React.PropTypes.arrayOf(React.PropTypes.object),
//   forecast: {
//     time: React.PropTypes.xyz,
//     temp: React.PropTypes.xyz,
//     windspd: React.PropTypes.xyz,
//     winddir: React.PropTypes.xyz,
//   }
// }

export default Forecast;

// export class Forecast extends Component {
//   _renderForecast(cityData){
//     return cityData.list.slice(0,5).map(data => {
//       return (
//         <tr key={data.dt}>
//           <td>{unitConverter.toGMT(data.dt)}</td>
//           <td>{unitConverter.toFarenheit(data.main.temp)} F</td>
//           <td>{unitConverter.toMPH(data.wind.speed)} {unitConverter.toCardinal(data.wind.deg)}</td>
//         </tr>
//       );
//     });
//   }
//
//   render(){
//     let forecastData = [];
//     if (this.props.forecast) {
//        forecastData = this.props.forecast.map(this._renderForecast);
//     }
//     return (
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <td>Time</td>
//             <td>Temp</td>
//             <td>Wind</td>
//           </tr>
//         </thead>
//         <tbody>
//           {forecastData}
//         </tbody>
//       </table>
//     );
//   }
// }
