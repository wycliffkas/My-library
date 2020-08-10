import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Table from "./Table";

configure({ adapter: new Adapter() });

describe("NotFound component", () => {
  it("renders", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
