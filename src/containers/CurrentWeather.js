import React, {Component} from 'react';

class CurrentWeather extends Component {
    _renderWeather(cityData) {
      const name = cityData.city.name;
      console.log(name);
    }
    render() {
        return (

            <table className="table table-reflow">
                <thead>
                    <tr>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {/* {this.props.current.map(this._renderWeather)} */}
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({current}) {
    return {current};
}

export default CurrentWeather;
