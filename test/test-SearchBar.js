import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchBar from '../src/containers/SearchBar';

describe('<SearchBar />', () => {
  it('should have the name: SearchBar', () => {
    const TestComponent = () => <SearchBar />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('SearchBar');
  });
  it('should be a form', () => {
    const wrapper = shallow(<form/>);
    expect(wrapper.name()).to.equal('form');
  });
});
