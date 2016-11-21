import React, {propTypes} from 'react';

import {Load} from './MyComponents';

const CurrentWeather = ({isFetched, weather}) => {
    if (!isFetched) {
        return (<Load/>);
    }
    return (
        <div className='current container-fluid'>
            <h1>
                <i className={weather.icon}></i>
                {weather.temp}
                <i className='wi wi-fahrenheit'></i>
            </h1>
            <h2>{weather.pressure}
                <i className='wi wi-barometer'></i>
            </h2>
            <h2>{weather.humidity}
                <i className='wi wi-humidity'></i>
            </h2>
            <h2>{weather.windspd}mph {weather.winddir}
            </h2>
        </div>
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
      windspd: React.PropTypes.number})
}

export default CurrentWeather;
