export const initialState = {
  loading: false,
  success: false,
  error: "",
  guessedWords: [],
  secretWord: "party",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "GUESS_WORD_REQUEST":
      return { ...state, loading: true };
    case "GUESS_WORD_SUCCESS":
      return { ...state, loading: false, success: true };
    case "GUESS_WORD":
      return { ...state, loading: false, guessedWords: action.payload };
    case "GUESS_WORD_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
