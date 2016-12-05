import { render } from 'react-dom';

import route from './route';

document.addEventListener('DOMContentLoaded', () => {
  render(route, document.getElementById('app'));
});
