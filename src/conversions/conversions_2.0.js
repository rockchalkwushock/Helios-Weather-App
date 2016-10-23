import _ from 'lodash';

export const unitConverter = {
  toCardinal: (deg) => {
    switch (true) {
      case (deg>11.25 && deg<33.75): return 'NNE';
      case (deg>33.75 && deg<56.25): return 'NE';
      case (deg>56.25 && deg<78.75): return 'ENE';
      case (deg>78.75 && deg<101.25): return 'E';
      case (deg>101.25 && deg<123.75): return 'ESE';
      case (deg>123.75 && deg<146.25): return 'SE';
      case (deg>146.25 && deg<168.75): return 'SSE';
      case (deg>168.75 && deg<191.25): return 'S';
      case (deg>191.25 && deg<213.75): return 'SSW';
      case (deg>213.75 && deg<236.25): return 'SW';
      case (deg>236.25 && deg<258.75): return 'WSW';
      case (deg>258.75 && deg<281.25): return 'W';
      case (deg>281.25 && deg<303.75): return 'WNW';
      case (deg>303.75 && deg<326.25): return 'NW';
      case (deg>326.25 && deg<348.75): return 'NNW';
      default: return 'N';
    }
  },

  toInchesHG: (hPa) => {
    const hPaConversion = 33.8638866667;
    return _.round(hPa / hPaConversion, 2);
  },

  toMPH: (metersPerSecond) => {
    const metersPerSecondConversion =  0.44704;
    return _.round(metersPerSecond / metersPerSecondConversion);
  },

  toFarenheit: (kelvin) => {
    const farenheit = _.round(kelvin * (9/5) - 459.67);
    return farenheit;
  },

  toGMT: (utcTime) => {
    const hours = new Date(utcTime * 1000).getHours();
    let minutes = new Date(utcTime * 1000).getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    switch (true) {
      case (hours === 13): return `1:${minutes} pm`;
      case (hours === 14): return `2:${minutes} pm`;
      case (hours === 15): return `3:${minutes} pm`;
      case (hours === 16): return `4:${minutes} pm`;
      case (hours === 17): return `5:${minutes} pm`;
      case (hours === 18): return `6:${minutes} pm`;
      case (hours === 19): return `7:${minutes} pm`;
      case (hours === 20): return `8:${minutes} pm`;
      case (hours === 21): return `9:${minutes} pm`;
      case (hours === 22): return `10:${minutes} pm`;
      case (hours === 23): return `11:${minutes} pm`;
      case (hours === 24): return `12:${minutes} pm`;
    }
    return `${hours}:${minutes} am`;
  },
};
