/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { CurrentWeather } from '../src/components/index';

describe('<CurrentWeather />', () => {
  it('should have the name: CurrentWeather', () => {
    const TestComponent = () => <CurrentWeather />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('CurrentWeather');
  });
  it('should be a table', () => {
    const wrapper = shallow(<table />);
    expect(wrapper.name()).to.equal('table');
  });
});
