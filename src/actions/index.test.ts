import {
  guessWordRequestAction,
  guessWordSuccessAction,
  guessWordFailureAction,
  guessWordAction,
  GUESS_WORD_REQUEST,
  GUESS_WORD_SUCCESS,
  GUESS_WORD_FAILURE,
  GUESS_WORD,
  getSecretWordRequestAction,
  SET_SECRET_WORD_REQUEST,
  getSecretWordSuccessAction,
  SET_SECRET_WORD_SUCCESS,
  SET_SECRET_WORD_FAILURE,
  getSecretWordFailureAction,
} from "./";

describe("guess word", () => {
  test("return action with type GUESS_WORD_REQUEST", () => {
    const action = guessWordRequestAction("train");
    expect(action).toEqual({ type: GUESS_WORD_REQUEST, guessedWord: "train" });
  });
  test("return action with type GUESS_WORD_SUCCESS", () => {
    const action = guessWordSuccessAction();
    expect(action).toEqual({ type: GUESS_WORD_SUCCESS });
  });
  test("return action with type GUESS_WORD_FAILURE", () => {
    const action = guessWordFailureAction("some");
    expect(action).toEqual({ type: GUESS_WORD_FAILURE, payload: "some" });
  });

  test("return action with type GUESS_WORD", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const action = guessWordAction(guessedWords);
    expect(action).toEqual({
      type: GUESS_WORD,
      payload: guessedWords,
    });
  });
});

describe("secret word", () => {
  test("return action with type SECRET_WORD_REQUEST", () => {
    const action = getSecretWordRequestAction();
    expect(action).toEqual({ type: SET_SECRET_WORD_REQUEST });
  });

  test("return action with type SECRET_WORD_SUCCESS", () => {
    const secretWord = "party";
    const action = getSecretWordSuccessAction(secretWord);
    expect(action).toEqual({
      type: SET_SECRET_WORD_SUCCESS,
      payload: secretWord,
    });
  });

  test("return action with type SECRET_WORD_FAILURE", () => {
    const error = "some error";
    const action = getSecretWordFailureAction(error);
    expect(action).toEqual({ type: SET_SECRET_WORD_FAILURE, payload: error });
  });
});
