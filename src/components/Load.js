import React from 'react';
import Loading from 'react-loading';

const Load = () => {
  return (
    <div className='loader'>
      <Loading type='bubbles' color='yellow' />
    </div>
  );
};

export default Load;