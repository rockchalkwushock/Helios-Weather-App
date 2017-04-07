# Helios-Weather-App
[![Build Status](https://travis-ci.org/rockchalkwushock/Helios-Weather-App.svg?branch=v1.0.0)](https://travis-ci.org/rockchalkwushock/Helios-Weather-App)
[![Dependencies Status](https://david-dm.org/rockchalkwushock/Helios-Weather-App.svg?branch=v1.0.0)](https://david-dm.org/rockchalkwushock/Helios-Weather-App.svg)

Thinkful Capstone #3: Weather App using OpenWeatherMap API &amp; React Framework

## Purpose:
The purpose of this app is to give the user access to the current & hourly weather data of US Cities.

## Directions for Usage:

`$ git clone https://github.com/rockchalkwushock/Helios-Weather-App.git`

`$ cd Helios-Weather-App`

`npm install`

`npm start`

Open your browser to: [http://localhost:8080](http://localhost:8080).

## Future Features:
  - Integrate background changing module.
    * based on current time of day.
    * current weather condition.
  - Integrate a backend for server-side rendering (SSR).
    * Express.js or Meteor.js


## Technologies:


### Languages:
  - Front-end: Javascript (ES6)


### Libraries:
  - Chai
  - Lodash
  - React.js


### Frameworks:
  - Bootstrap
  - Mocha
  - Redux.js


### Pre-Processors
  - Less


### Tools
  - Axios
  - Enzyme
  - Webpack

#### Personally Created Modules
  - background.js (not currently in use)
  - conditions.js (not currently in use)
  - conversions.js


### API
  - OpenWeatherMap

## Flow of App for user (V:1.0.0)

1. User will come to the landing page and be able to search any US City.
2. Upon submission the user will be shown the current temperature of that city.
3. The user can click the current temperature to view more data on the current weather of the searched city.
4. The user can choose to return to the dashboard or view the next 12 hours of forecast.
5. If choosing to view the forecast the user still has the option to return to the dashboard.
6. The user is able to search a new city at any point.

## Visual flow of App for user (V:1.0.0)

![sprite](https://github.com/rockchalkwushock/Helios-Weather-App/blob/v1.0.0/img/sprites.png "Visual App Flow")
