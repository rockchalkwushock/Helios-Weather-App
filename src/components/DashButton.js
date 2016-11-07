import React, { propTypes } from 'react';
import { Link } from 'react-router';

const BackToDashButton = () => {
    return (
      <Link to='/dashboard' className='btn btn-primary button-link'>
        <h1>Back to Dashboard</h1>
      </Link>
    );
};

export default BackToDashButton;
