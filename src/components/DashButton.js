import React from 'react';
import { Link } from 'react-router';

const BackToDashButton = () => (
      <Link to='/dashboard' className='btn btn-primary dash-button'>
        <h1>Dashboard</h1>
      </Link>
    );

export default BackToDashButton;
