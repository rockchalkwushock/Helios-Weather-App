import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CurrentWeatherContainer, ForecastContainer } from './MyContainers';

class BackgroundContainer extends Component {

    render() {
        const { image } = this.props.background;
        return (
            <div id='BackgroundContainer' >
                <div className={ image }>
                    <CurrentWeatherContainer/>
                    <ForecastContainer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ background }) => {
    return { background };
};

export default connect(mapStateToProps)(BackgroundContainer);
