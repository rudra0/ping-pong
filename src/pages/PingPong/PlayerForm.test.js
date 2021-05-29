import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayerForm from './PlayerForm';

Enzyme.configure({ adapter: new Adapter() })
describe("PlayerForm", () => {
  it("should render my component", () => {
    const wrapper = shallow(<PlayerForm />);
    console.log(wrapper)
  });
});