import {
  put,
  call,
  all,
  select,
  takeLatest,
} from "redux-saga/effects";
import { GUESS_WORD_REQUEST, guessWordAction, guessWordSuccessAction, guessWordFailureAction } from "../actions";
import { getLetterMatchCount } from "../helpers";
import { getSecretWord } from "../selectors/guessedWordSelectors";

export function* guessWordSaga(data: { type: string; guessedWord: string }) {
  try {
    const secretWord = yield select(getSecretWord)

    yield put(guessWordAction([{ guessedWord: data.guessedWord, letterMatchCount: 3 }]));
    if(data.guessedWord === secretWord) {
      yield put(guessWordSuccessAction())
    }

  } catch (e) {
    yield put(guessWordFailureAction(e.message));
  }
}

function* guessedWordsSaga() {
  yield all([takeLatest(GUESS_WORD_REQUEST, guessWordSaga)]);
}

export { guessedWordsSaga };
