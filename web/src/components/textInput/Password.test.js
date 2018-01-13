import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Password from "./Password";
describe("Password Input: ", () => {
  it(" renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Password
        text={"With Text"}
        onChange={e => console.log()}
        label="password"
      />,
      div
    );
  });

  it(" passes snapshot tests", () => {
    const component = renderer.create(
      <Password
        text={"With some password"}
        onChange={e => console.log()}
        label="password"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
