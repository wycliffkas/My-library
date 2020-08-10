import React from "react"
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import Card from "./Card"
import Loader from "../../common/Loader";

configure({adapter: new Adapter()})

describe("<Card/>", () => {
  it("should show loader", () => {
      const wrapper = shallow(<Card loading books/>)
      expect(wrapper.find(Loader)).toHaveLength(1)
  });
});