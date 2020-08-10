import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loader from "./Loader";

configure({ adapter: new Adapter() });

describe("Loader component", () => {
  it("renders", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
