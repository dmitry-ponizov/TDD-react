import React from "react";
import { mount } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "./";
import { Provider } from "react-redux";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrap = mount(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  return wrap;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper: any;
    beforeEach(() => {
      const initialState = {
        success: { success: false },
      };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toEqual(1);
    });
    it("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toEqual(1);
    });
    it("renders submit button", () => {
      const submitBox = findByTestAttr(wrapper, "submit-button");
      expect(submitBox.length).toEqual(1);
    });
  });

  describe("word has  been guessed", () => {
    let wrapper: any;
    beforeEach(() => {
      const initialState = {
        success: { success: true },
      };
      wrapper = setup(initialState);
    });
    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "input-component");
      expect(component.length).toEqual(1);
    });
    it("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toEqual(0);
    });
    it("does not render submit button", () => {
      const submitBox = findByTestAttr(wrapper, "submit-button");
      expect(submitBox.length).toEqual(0);
    });
  });
});

describe("update state", () => {});
