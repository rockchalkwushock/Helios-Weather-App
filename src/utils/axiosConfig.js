import axios from 'axios';

axios.defaults.baseURL = 'https://api.weatherbit.io/v1.0/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

