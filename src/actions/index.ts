export const GUESS_WORD_REQUEST = "GUESS_WORD_REQUEST";
export const GUESS_WORD_SUCCESS = "GUESS_WORD_SUCCESS";
export const GUESS_WORD_FAILURE = "GUESS_WORD_FAILURE";
export const GUESS_WORD = "GUESS_WORD";

export const guessWordRequestAction = (guessedWord: string) => {
  return {
    type: "GUESS_WORD_REQUEST",
    guessedWord
  };
};

export const guessWordSuccessAction = () => {
  return {
    type: "GUESS_WORD_SUCCESS",
  };
};

export const guessWordFailureAction = (payload: string) => {
  return {
    type: "GUESS_WORD_FAILURE",
    payload,
  };
};


export const guessWordAction = (
  payload: {
    guessedWord: string;
    letterMatchCount: number;
  }[]
) => {
  return {
    type: "GUESS_WORD",
    payload,
  };
};
