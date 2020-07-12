import React from "react";
import { mount } from "enzyme";
import Congrats from ".";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import { Provider } from "react-redux";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrap = mount(
    <Provider store={store}>
      <Congrats />
    </Provider>
  );
  return wrap;
};

describe("render", () => {
  test("render without error", () => {
    const wrapper = setup({
      success: { success: false },
    });
    const container = findByTestAttr(wrapper, "congrats-component");
    expect(container.length).toBe(1);
  });

  test("renders no text when success prop is false", () => {
    const wrapper = setup({
      success: { success: false },
    });
    const container = findByTestAttr(wrapper, "congrats-component");
    expect(container.text()).toBe("");
  });

  test("renders non-empty congrats message when success prop is true", () => {
    const wrapper = setup({
      success: { success: true },
    });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
  });
});
