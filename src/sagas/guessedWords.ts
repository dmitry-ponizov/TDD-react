import { put, call, all, select, takeLatest } from "redux-saga/effects";
import {
  GUESS_WORD_REQUEST,
  guessWordAction,
  guessWordSuccessAction,
  guessWordFailureAction,
  SET_SECRET_WORD_REQUEST,
  getSecretWordSuccessAction,
  getSecretWordFailureAction,
} from "../actions";
import { getSecretWord } from "../selectors/guessedWordSelectors";
import { getSecretWordApi } from "./api";

export function* guessWordSaga(data: { type: string; guessedWord: string }) {
  try {
    const secretWord = yield select(getSecretWord);

    yield put(
      guessWordAction([{ guessedWord: data.guessedWord, letterMatchCount: 3 }])
    );
    if (data.guessedWord === secretWord) {
      yield put(guessWordSuccessAction());
    }
  } catch (e) {
    yield put(guessWordFailureAction(e));
  }
}

export function* getSecretWordSaga() {
  try {
    const response = yield call(getSecretWordApi);
    yield put(getSecretWordSuccessAction(response.data));
  } catch (e) {
    yield put(getSecretWordFailureAction(e.message));
  }
}

function* guessedWordsSaga() {
  yield all([
    takeLatest(GUESS_WORD_REQUEST, guessWordSaga),
    takeLatest(SET_SECRET_WORD_REQUEST, getSecretWordSaga),
  ]);
}

export { guessedWordsSaga };
