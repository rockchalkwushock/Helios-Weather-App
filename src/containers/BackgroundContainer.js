import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import { CurrentWeatherContainer, ForecastContainer } from './MyContainers';
import { CW_Button } from '../components/MyComponents';

class BackgroundContainer extends Component {

    render() {
        const { image } = this.props.background;
        const { weatherData , isFetched } = this.props.current;
        return (
            <div id='BackgroundContainer' >
                <div className={`background ${ image }`}>
                  <Link to='/weather'>
                    <CW_Button weather={ weatherData } isFetched={ isFetched }/>
                  </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ background, current }) => {
    return { background, current };
};

export default connect(mapStateToProps)(BackgroundContainer);
