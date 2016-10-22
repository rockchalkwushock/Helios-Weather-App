import React, {Component} from 'react';
import {connect} from 'react-redux';
import {degToCard, pressureConverter, tempConverter, timeStampConverter} from '../conversions/conversions';

export class Forecast extends Component {
    _renderWeather(cityData) {

        return (

        );
    }
    render() {
        let listTable = [];
        if (this.props.forecast) {
            listTable = this.props.forecast.map(this._renderWeather);
        }

        return (
            <div>
              {listTable}
            </div>
        );
    }
}

function mapStateToProps({forecast}) {
    return {forecast};
}

export default connect(mapStateToProps)(CurrentWeather);
