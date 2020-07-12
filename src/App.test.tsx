import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Counter from "./components/Counter";
import { findByTestAttr } from "./test/testUtils";
import Congrats from "./components/Jotto/Congrats";
import GuessedWords from "./components/Jotto/GuessedWords";

const setup = () => {
  return shallow(<App />);
};

describe("renders components", () => {
  let wrapped: ShallowWrapper;
  beforeEach(() => {
    wrapped = setup();
  });

  test("renders without error", () => {
    const appComponent = findByTestAttr(wrapped, "app-component");
    expect(appComponent.length).toBe(1);
  });

  test("shows a counter component", () => {
    expect(wrapped.find(Counter).length).toEqual(1);
  });
  test("shows a Congrats component", () => {
    expect(wrapped.find(Congrats).length).toEqual(1);
  });

  test("shows a GuessedWords component", () => {
    expect(wrapped.find(GuessedWords).length).toEqual(1);
  });

  test("getSecretWordRequest runs on App mount", () => {
    const useEffect = jest
      .spyOn(React, "useEffect")
      .mockImplementation((f) => f());
  });
});
