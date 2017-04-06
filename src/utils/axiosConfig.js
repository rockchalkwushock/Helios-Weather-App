import axios from 'axios';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
