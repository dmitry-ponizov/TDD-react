import {
  GUESS_WORD_REQUEST,
  GUESS_WORD_SUCCESS,
  GUESS_WORD_FAILURE,
  GUESS_WORD,
  SET_SECRET_WORD_REQUEST,
  SET_SECRET_WORD_SUCCESS,
  SET_SECRET_WORD_FAILURE,
} from "../actions";
import successReducer from "./";

test("return default initial state", () => {
  const { success } = successReducer(undefined, { type: "" });
  expect(success).toEqual({
    loading: false,
    success: false,
    error: "",
    guessedWords: [],
    secretWord: "",
  });
});

test("return state upon receiving an action type 'GUESS_WORD_REQUEST'", () => {
  const { success } = successReducer(undefined, { type: GUESS_WORD_REQUEST });
  expect(success).toEqual({
    loading: true,
    success: false,
    error: "",
    guessedWords: [],
    secretWord: "",
  });
});

test("return state upon receiving an action type 'GUESS_WORD_SUCCESS'", () => {
  const { success } = successReducer(undefined, { type: GUESS_WORD_SUCCESS });
  expect(success).toEqual({
    loading: false,
    success: true,
    error: "",
    guessedWords: [],
    secretWord: "",
  });
});

test("return state true upon receiving an action type 'GUESS_WORD_FAILURE'", () => {
  const { success } = successReducer(undefined, {
    type: GUESS_WORD_FAILURE,
    payload: "some",
  });
  expect(success).toEqual({
    loading: false,
    success: false,
    error: "some",
    guessedWords: [],
    secretWord: "",
  });
});

test("return state upon receiving an action type 'GUESS_WORD'", () => {
  const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
  const { success } = successReducer(undefined, {
    type: GUESS_WORD,
    payload: guessedWords,
  });
  expect(success).toEqual({
    loading: false,
    success: false,
    error: "",
    guessedWords,
    secretWord: "",
  });
});

describe("secret word", () => {
  test("return state upon receiving an action type SECRET_WORD_REQUEST", () => {
    const { success } = successReducer(undefined, {
      type: SET_SECRET_WORD_REQUEST,
    });
    expect(success).toEqual({
      guessedWords: [],
      loading: true,
      error: "",
      secretWord: "",
      success: false,
    });
  });

  test("return state upon receiving an action type SECRET_WORD_SUCCESS", () => {
    const secretWord = "party";
    const { success } = successReducer(undefined, {
      type: SET_SECRET_WORD_SUCCESS,
      payload: secretWord,
    });

    expect(success).toEqual({
      guessedWords: [],
      loading: false,
      error: "",
      secretWord,
      success: false,
    });
  });

  test("return state upon receiving an action type SECRET_WORD_FAILURE", () => {
    const error = "some error";
    const { success } = successReducer(undefined, {
      type: SET_SECRET_WORD_FAILURE,
      payload: error,
    });

    expect(success).toEqual({
      guessedWords: [],
      loading: false,
      error: error,
      secretWord: "",
      success: false,
    });
  });
});
