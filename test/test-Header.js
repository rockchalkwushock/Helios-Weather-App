/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Header } from '../src/components/index';

describe('<Header />', () => {
  it('should have the name: Header', () => {
    const TestComponent = () => <Header />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Header');
  });
  it('should be a div', () => {
    const wrapper = shallow(<div />);
    expect(wrapper.name()).to.equal('div');
  });
  it('should have one child', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div')).to.have.length(0);
  });
});
