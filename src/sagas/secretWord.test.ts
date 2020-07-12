import { getSecretWordSaga } from "./guessedWords";
import { call, put } from "redux-saga/effects";
import { getSecretWordApi } from "./api";
import {
  getSecretWordSuccessAction,
  getSecretWordFailureAction,
} from "../actions";

describe("get secret word", () => {
  test("it fetches and puts secret word data", () => {
    const gen = getSecretWordSaga();
    const response = { data: "party" };
    expect(gen.next().value).toEqual(call(getSecretWordApi));
    expect(gen.next(response).value).toEqual(
      put(getSecretWordSuccessAction(response.data))
    );
  });

  test("error message was set", () => {
    const error = "same error";
    const gen = getSecretWordSaga();
    gen.next();
    expect(
      gen.throw({
        message: error,
      }).value
    ).toEqual(put(getSecretWordFailureAction(error)));
  });
});
