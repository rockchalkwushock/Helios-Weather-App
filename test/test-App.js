import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('<App />', () => {
  it('should have the name: App', () => {
    const TestComponent = () => <App />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('App');
  });
  it('should be a div', () => {
    const wrapper = shallow(<div/>);
    expect(wrapper.name()).to.equal('div');
  });
  it('should have className: test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('test')).to.equal(true);
  });
  it('should have four children', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Navbar')).to.have.length(1);
    expect(wrapper.find('SearchBarContainer')).to.have.length(0);
    expect(wrapper.find('HeaderContainer')).to.have.length(0);
    expect(wrapper.find('BackgroundContainer')).to.have.length(0);
  });
});
