import React, { propTypes } from 'react';
import { Link } from 'react-router';

const BackToDashButton = () => {
    return (
      <Link to='/forecast' className='btn btn-primary button-link'>
        <h1>3-Hourly Forecast</h1>
      </Link>
    );
};

export default BackToDashButton;
