import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Counter from "./components/Counter";
import { findByTestAttr } from "./test/testUtils";
import Congrats from "./components/Jotto/Congrats";
import GuessedWords from "./components/Jotto/GuessedWords";

test("renders without error", () => {
  const wrapped: ShallowWrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapped, "app-component");
  expect(appComponent.length).toBe(1);
});

test("shows a counter component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Counter).length).toEqual(1);
});
test("shows a Congrats component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Congrats).length).toEqual(1);
});

test("shows a GuessedWords component", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(GuessedWords).length).toEqual(1);
});
