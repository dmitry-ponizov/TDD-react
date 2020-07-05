import {
  GUESS_WORD_REQUEST,
  GUESS_WORD_SUCCESS,
  GUESS_WORD_FAILURE,
  GUESS_WORD,
} from "../actions";
import successReducer from "./";

test("return default initial state", () => {
  const { success } = successReducer(undefined, { type: "" });
  expect(success).toEqual({
    loading: false,
    success: false,
    error: "",
    guessedWords: [],
    secretWord: "party",
  });
});

test("return state upon receiving an action type 'GUESS_WORD_REQUEST'", () => {
  const { success } = successReducer(undefined, { type: GUESS_WORD_REQUEST });
  expect(success).toEqual({
    loading: true,
    success: false,
    error: "",
    guessedWords: [],
    secretWord: "party",
  });
});

test("return state upon receiving an action type 'GUESS_WORD_SUCCESS'", () => {
  const { success } = successReducer(undefined, { type: GUESS_WORD_SUCCESS });
  expect(success).toEqual({
    loading: false,
    success: true,
    error: "",
    guessedWords: [],
    secretWord: "party",
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
    secretWord: "party",
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
    secretWord: "party",
  });
});
