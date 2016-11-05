import React, { propTypes } from 'react';
import { Link } from 'react-router';

import { Load } from './MyComponents';

const CW_Button = ({ weather, isFetched }) => {
    if (!isFetched) {
        return (
            <Load />
        );
    }
    console.log(weather.icon);
    console.log(weather.temp);
    return (
      <Link to='/dashboard' className='btn btn-primary button-link'>
            <h1>
              <i className={ weather.icon }></i>
              {' '}
              { weather.temp }
              <i className='wi wi-fahrenheit'></i>
            </h1>
      </Link>
    );
};

export default CW_Button;
