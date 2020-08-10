import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Table from "./Table";


configure({ adapter: new Adapter() });

describe("<Table/> for Authors", () => {
  it("should render Edit if there authors in the database", () => {

    const authors = [{
        _id:"1",
        firstName: "wycliff",
        lastName: "wycliff",
    }]

    const wrapper = shallow(<Table authors={authors}/>);
    const label = wrapper.find("Link");
    expect(label.text().includes('Edit')).toBe(true);
  });
});
