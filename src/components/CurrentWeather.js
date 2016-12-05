import React, { propTypes } from 'react'; // eslint-disable-line

import { Load } from './index';

const CurrentWeather = ({ isFetched, weather }) => {
    if (!isFetched) {
        return (<Load />);
    }
    return (
        <div className='current container-fluid'>
            <h1>
                <i className={weather.icon} />
                {weather.temp}
                <i className='wi wi-fahrenheit' />
            </h1>
            <h2>{weather.pressure}
                <i className='wi wi-barometer' />
            </h2>
            <h2>{weather.humidity}
                <i className='wi wi-humidity' />
            </h2>
            <h2>{weather.windspd}mph {weather.winddir}
            </h2>
        </div>
    );
};

CurrentWeather.propTypes = {
    isFetched: React.PropTypes.bool,
    weather: React.PropTypes.shape({
      humidity: React.PropTypes.number,
      pressure: React.PropTypes.number,
      temp: React.PropTypes.number,
      winddir: React.PropTypes.string,
      windspd: React.PropTypes.number })
};

export default CurrentWeather;
