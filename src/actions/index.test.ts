import {
  guessWordRequestAction,
  guessWordSuccessAction,
  guessWordFailureAction,
  guessWordAction,
  GUESS_WORD_REQUEST,
  GUESS_WORD_SUCCESS,
  GUESS_WORD_FAILURE,
  GUESS_WORD,
} from "./";

describe("guess word", () => {
  test("return action with type GUESS_WORD_REQUEST", () => {
    const action = guessWordRequestAction();
    expect(action).toEqual({ type: GUESS_WORD_REQUEST });
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
