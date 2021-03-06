// https://github.com/rockchalkwushock/Helios-Weather-App/issues/4

/**
 * @public
 * @author Cody Brunner rockchalkwushock@icloud.com
 * @function forecastAlgorithm
 * @description
 * Function accepting API data & returning expected
 * values & structure for test suite / weatherReducer.
 * @param {Array<Object>} data An array of objects containing weather data.
 * @returns {Array<Object>} Returns array of objects containing specified data.
 */
export default data =>
  data.reduce((acc, val) => {
    let obj = Object.create({})
    obj = {
      wind_cdir: val.wind_cdir,
      wind_spd: val.wind_spd,
      weather: {
        icon: val.weather.icon,
        code: val.weather.code,
        description: val.weather.description
      },
      precip: val.precip,
      datetime: val.datetime, // format yr-mo-day:hr (0, 3, 6, etc.)
      temp: val.temp
    }
    acc.push(obj)
    return acc
  }, [])
