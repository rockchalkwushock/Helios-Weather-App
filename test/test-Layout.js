/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Layout } from '../src/components/index';

describe('<Layout />', () => {
  it('should have the name: Layout', () => {
    const TestComponent = () => <Layout />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Layout');
  });
  it('should be a div', () => {
    const wrapper = shallow(<div />);
    expect(wrapper.name()).to.equal('div');
  });
  it('should have className: layout', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('div').hasClass('layout')).to.equal(true);
  });
  it('should have four children', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Navbar')).to.have.length(1);
    expect(wrapper.find('SearchBarContainer')).to.have.length(0);
    expect(wrapper.find('HeaderContainer')).to.have.length(0);
    expect(wrapper.find('BackgroundContainer')).to.have.length(0);
  });
});
