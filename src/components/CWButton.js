import React from 'react';
import { Link } from 'react-router';

import { Load } from './index';

const CWButton = ({ isFetched, weather }) => {
    if (!isFetched) {
        return (
            <Load />
        );
    }
    return (
      <Link to='/currentweather' className='btn btn-primary button-link'>
            <h1>
              <i className={weather.icon} />
              {' '}
              {weather.temp}
              <i className='wi wi-fahrenheit' />
            </h1>
      </Link>
    );
};

export default CWButton;
