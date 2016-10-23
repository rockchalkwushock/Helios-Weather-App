import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Dashboard from '../src/components/Dashboard';

describe('<Dashboard />', () => {
  it('should have the name: Dashboard', () => {
    const TestComponent = () => <Dashboard />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Dashboard');
  });
  it('should be a div', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.name()).to.equal('div');
  });
  it('should have className: dash', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div').hasClass('dash')).to.equal(true);
  });
  it('should have two children', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('CurrentWeather')).to.have.length(0);
    expect(wrapper.find('Forecast')).to.have.length(0);
  });
});
