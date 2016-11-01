// Must import in condition.
import {IMG_LIBRARY} from './IMG_LIBRARY';
import {CONDITIONS} from './CONDITIONS';

export class Background {
  constructor(IMG_LIBRARY) {
    this.images = IMG_LIBRARY;
    console.log(this.images);
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
      case (hour > sundown || hour < sunup):
        return 'night';
      case ((hour => sunup) && (hour < 12)):
        return 'morning';
      case ((hour => 12) && (hour <= 16)):
        return 'afternoon';
      case ((hour > 16) && (hour <= sundown)):
        return 'evening';
      default: return 'stock';
    }
  }
  selectBackground(id) {
    console.log(`this.images.${id}`);
    console.log(this.images.morning);
    // Use unique identifier as key to IMG_LIBRARY.
    // NOTE: only using clear condition for time being.
    return this.images.morning.clear;
  }
}

// Client Side...

// let newBackground = new Background();
// let hour = newBackground.getTime();
// let sunup = newBackground.convertSunrise(sunrise);
// let sundown = newBackground.convertSunset(sunset);
// let id = newBackground.getIdentifier(hour, sunup, sundown);
// let image = newBackground.selectBackground(id);
