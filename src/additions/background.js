// Must import in condition.
import {IMG_LIBRARY} from './IMG_LIBRARY';
import {CONDITIONS} from './CONDITIONS';

export class Background {
  constructor(IMG_LIBRARY) {
    this.images = IMG_LIBRARY;
    // console.log(this.images);
  }
  getTime() {
    // Returns 24 hour format.
    return new Date().getHours();
  }
  convertSunrise(sunrise) {
    // converts UTC to GMT & returns hour.
    return new Date(sunrise * 1000).getHours();
  }
  convertSunset(sunset) {
    // converts UTC to GMT & returns hour.
    return new Date(sunset * 1000).getHours();
  }
  getIdentifier(hour, sunup, sundown) {
    // Based on time of day return a unique identifier.
    switch (true) {
      case ((hour => 12) && (hour <= 16)):
        return 'afternoon';
      case ((hour > 16) && (hour <= sundown)):
        return 'evening';
      case ((hour => sunup) && (hour < 12)):
        return 'morning';
      case (hour > sundown || hour < sunup):
        return 'night';
      default: return 'stock';
    }
  }
  selectBackground(id, condition) {
    switch (true) {
      case (id === 'afternoon'): return;
      case (id === 'evening'): return;
      case (id === 'morning'): return;
      case (id === 'night'): return;
      default:

    }
  }
}

// Client Side...

// let newBackground = new Background();
// let hour = newBackground.getTime();
// let sunup = newBackground.convertSunrise(sunrise);
// let sundown = newBackground.convertSunset(sunset);
// let id = newBackground.getIdentifier(hour, sunup, sundown);
// let image = newBackground.selectBackground(id);
