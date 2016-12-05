import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CWButton } from '../components/index';

class ButtonContainer extends Component {

    render() {
        const { weatherData, isFetched } = this.props.current;
        return (
          <div className='row weather-link'>
              <CWButton weather={weatherData} isFetched={isFetched} />
          </div>
        );
    }
}

const mapStateToProps = ({ current }) => ({ current });

export default connect(mapStateToProps)(ButtonContainer);
