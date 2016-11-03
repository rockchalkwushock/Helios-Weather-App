export const changeAppBackground = {
  getTime: () => {
    // Gets current hour from browser.
    // Returns in 24hr fromat.
    return new Date().getHours();
  },
  convertSunrise: (sunrise) => {
    // Gets sunrise data from API Call.
    // Converts UTC to GMT & returns hour.
    return new Date(sunrise * 1000).getHours();
  },
  convertSunset: (sunset) => {
    // Gets sunset data from API Call.
    // Converts UTC to GMT & returns hour.
    return new Date(sunset * 1000).getHours();
  },
  getIdentifier: (currentHour, sunupHour, sundownHour) => {
    // Using current time & hour of sunup & sundown runs
    // switch statement of arguments to return unique identifier
    // corresponding to one of four times of day.
    switch (true) {
      case ((currentHour => 12) && (currentHour <= 16)):
        return 'afternoon';
      case ((currentHour > 16) && (currentHour <= sundownHour)):
        return 'evening';
      case ((currentHour => sunupHour) && (currentHour < 12)):
        return 'morning';
      case (currentHour > sundownHour || currentHour < sunupHour):
        return 'night';
      default: return 'stock';
    }
  },
  setBackground: (timeOfDay, weatherCondition) => {
    // Using the unique time of day identifier and the current weather condition
    // received from the API Call runs a switch statement of arguments to return
    // a className which will be appended to the body HTML tag.
    // This className is declared with a corresponding image url in styels.less
    switch (true) {
      case ((timeOfDay === 'afternoon') && (weatherCondition === 'clear')):
      return 'afternoon-clear';
      case ((timeOfDay === 'afternoon') && (weatherCondition === 'cloudy')):
      return 'afternoon-cloudy';
      case ((timeOfDay === 'afternoon') && (weatherCondition === 'rain')):
      return 'afternoon-rain';
      case ((timeOfDay === 'afternoon') && (weatherCondition === 'snow')):
      return 'afternoon-snow';
      case ((timeOfDay === 'evening') && (weatherCondition === 'clear')):
      return 'evening-clear';
      case ((timeOfDay === 'evening') && (weatherCondition === 'cloudy')):
      return 'evening-cloudy';
      case ((timeOfDay === 'evening') && (weatherCondition === 'rain')):
      return 'evening-rain';
      case ((timeOfDay === 'evening') && (weatherCondition === 'snow')):
      return 'evening-snow';
      case ((timeOfDay === 'morning') && (weatherCondition === 'clear')):
      return 'morning-clear';
      case ((timeOfDay === 'morning') && (weatherCondition === 'cloudy')):
      return 'morning-cloudy';
      case ((timeOfDay === 'morning') && (weatherCondition === 'rain')):
      return 'morning-rain';
      case ((timeOfDay === 'morning') && (weatherCondition === 'snow')):
      return 'morning-snow';
      case ((timeOfDay === 'night') && (weatherCondition === 'clear')):
      return 'night-clear';
      case ((timeOfDay === 'night') && (weatherCondition === 'cloudy')):
      return 'night-cloudy';
      case ((timeOfDay === 'night') && (weatherCondition === 'rain')):
      return 'night-rain';
      case ((timeOfDay === 'night') && (weatherCondition === 'snow')):
      return 'night-snow';
      default:
      return 'stock';
    }
  }
};
