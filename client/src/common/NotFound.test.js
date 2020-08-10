import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

configure({ adapter: new Adapter() });

describe("NotFound component", () => {
  it("renders", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
