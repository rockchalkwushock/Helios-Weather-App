import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CW_Button } from '../components/MyComponents';

class ButtonContainer extends Component {

    render() {
        const { weatherData , isFetched } = this.props.current;
        return (
          <div className='row weather-link'>
              <CW_Button weather={ weatherData } isFetched={ isFetched }/>
          </div>
        );
    }
}

const mapStateToProps = ({ current }) => {
    return { current };
};

export default connect(mapStateToProps)(ButtonContainer);
