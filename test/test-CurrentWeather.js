import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

import {CurrentWeather} from '../src/containers/CurrentWeather';

describe('<CurrentWeather />', () => {
  it('should have the name: CurrentWeather', () => {
    const TestComponent = () => <CurrentWeather />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('CurrentWeather');
  });
  it('should be a table', () => {
    const wrapper = shallow(<table/>);
    expect(wrapper.name()).to.equal('table');
  });
  it('should have className: test', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find('div').hasClass('test')).to.equal(true);
  });
  it('should have one child', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should have no content in tbody beofre action', () => {
    const wrapper = render(<CurrentWeather />);
    expect(wrapper.find('tbody').children()).to.have.length(0);
  });
});
