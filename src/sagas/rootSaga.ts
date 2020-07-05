import { fork, all } from "redux-saga/effects";
import { guessedWordsSaga } from "./guessedWords";

export function* rootSaga() {
  yield all([fork(guessedWordsSaga)]);
}
