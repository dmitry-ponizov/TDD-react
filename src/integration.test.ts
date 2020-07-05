import { storeFactory } from "./test/testUtils";
import { guessWordRequestAction } from "./actions";

describe("guess word action dispatched", () => {
  const secretWord = "party";
  const unssuceesfulGuess = "train";
  describe("no guessed words", () => {
    let store: any;
    const initialState = {
      success: { secretWord },
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for successful guess", () => {
      const newState = store.getState();
    });
    test("updates state correctly for unsuccessful guess", () => {});
  });
  describe("some guessed words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = {
      success: {
        guessedWords,
        secretWord,
      },
    };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for successful guess", () => {});
    test("updates state correctly for unsuccessful guess", () => {});
  });
});
