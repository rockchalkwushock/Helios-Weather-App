/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Forecast } from '../src/components/index';

describe('<Forecast />', () => {
  it('should have the name: Forecast', () => {
    const TestComponent = () => <Forecast />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Forecast');
  });
  it('should be a table', () => {
    const wrapper = shallow(<table />);
    expect(wrapper.name()).to.equal('table');
  });
});
