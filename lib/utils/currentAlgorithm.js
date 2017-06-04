// https://github.com/rockchalkwushock/Helios-Weather-App/issues/3

/**
 * @public
 * @author Cody Brunner rockchalkwushock@icloud.com
 * @function currentAlgorithm
 * @description
 * Function accepting API data & returning expected
 * values & structure for test suite / weatherReducer.
 * @param {Object} data An object containing weather data.
 * @returns {Object} Returns an object containing specified data.
 */
export default data =>
  data.reduce((acc, val) => {
    const filteredData = {
      wind_cdir: val.wind_cdir,
      state_code: val.state_code,
      city_name: val.city_name,
      rh: val.rh,
      wind_spd: val.wind_spd,
      dewpt: val.dewpt,
      uv: val.uv,
      pres: val.pres,
      sunrise: val.sunrise,
      weather: {
        icon: val.weather.icon,
        code: val.weather.code,
        description: val.weather.description
      },
      precip: val.precip,
      country_code: val.country_code,
      sunset: val.sunset,
      temp: val.temp
    }
    return filteredData
  }, {})
