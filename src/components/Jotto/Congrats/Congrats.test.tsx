import React from "react";
import { shallow } from "enzyme";
import Congrats from ".";
import { findByTestAttr } from "../../../test/testUtils";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup();
  const container = findByTestAttr(wrapper, "congrats-component");
  expect(container.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const container = findByTestAttr(wrapper, "congrats-component");
  expect(container.text()).toBe("");
});

test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
