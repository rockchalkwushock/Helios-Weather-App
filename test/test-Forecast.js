import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

import Forecast from '../src/components/Forecast';

describe('<Forecast />', () => {
  it('should have the name: Forecast', () => {
    const TestComponent = () => <Forecast />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Forecast');
  });
  it('should be a table', () => {
    const wrapper = shallow(<table/>);
    expect(wrapper.name()).to.equal('table');
  });
  // it('should have className: table', () => {
  //   const wrapper = shallow(<Forecast />);
  //   expect(wrapper.find('table').hasClass('table')).to.equal(true);
  // });
  // it('should have one child', () => {
  //   const wrapper = shallow(<Forecast />);
  //   expect(wrapper.find('table')).to.have.length(1);
  // });
  // it('should have no content in tbody beofre action', () => {
  //   const wrapper = render(<Forecast />);
  //   expect(wrapper.find('tbody').children()).to.have.length(0);
  // });
});
