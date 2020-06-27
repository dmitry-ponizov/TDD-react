import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Counter from ".";

const setup = (props = {}) => {
  return shallow(<Counter {...props} />);
};

const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapped = setup();
  const appComponent = findByTestAttr(wrapped, "component-counter");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapped = setup();
  const buttonComponent = findByTestAttr(wrapped, "increment-button");
  expect(buttonComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapped = setup();
  const counterDisplay = findByTestAttr(wrapped, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

// test("counter starts at 0", () => {
//   const wrapper = setup();
//   inititalCounterState = wrapper.state("counter");
//   expect(inititalCounterState).toBe(0);
// });

// test("clicking button increments counter display", () => {});

// TODO implement decrement test
