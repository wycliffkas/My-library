import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./Form";

configure({ adapter: new Adapter() });

describe("<Form/> for Books", () => {
  it("should render Add Author title if user is not in edit mode", () => {
    const wrapper = shallow(<Form book errors authors/>);
    const label = wrapper.find(".center-text");
    expect(label.text().includes('Add Book')).toBe(true);
  });

  it("should render Edit Author title if user is in edit mode", () => {
    const wrapper = shallow(<Form editing book errors authors/>);
    const label = wrapper.find(".center-text");
    expect(label.text().includes('Edit Book')).toBe(true);
  });


  it("should render Update button label if user is in edit mode", () => {
    const wrapper = shallow(<Form editing book errors authors/>);
    const label = wrapper.find(".btn-primary");
    expect(label.text().includes('Update')).toBe(true);
  });

  it("should render Submit button label if user is not in edit mode", () => {
    const wrapper = shallow(<Form book errors authors/>);
    const label = wrapper.find(".btn-primary");
    expect(label.text().includes('Save')).toBe(true);
  });
});
