import React from 'react';
import { Link } from 'react-router';

const BackToDashButton = () => (
      <Link to='/forecast' className='btn btn-primary forecast-button'>
        <h1>Hourly Forecast</h1>
      </Link>
    );

export default BackToDashButton;
