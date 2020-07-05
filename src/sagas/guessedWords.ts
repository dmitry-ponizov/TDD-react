import {
  put,
  call,
  takeEvery,
  all,
  select,
  takeLatest,
} from "redux-saga/effects";
import { GUESS_WORD_REQUEST } from "../actions";

const getSecretWord = (state: any) => state.success.secretWord;

export function* guessWordSaga(data: { type: string; params: any }) {
  try {
    const secretWord = yield select(getSecretWord);
    // yield put(fetchNewMembersStartAction());
    // const sessionId = yield select(getSessionIdSelector);
    // const response = yield call(fetchNewMembersApi, sessionId);
    // if (Boolean(response.data.length)) {
    //   yield put(fetchNewMembersSuccessAction(response.data));
    // } else {
    //   yield put(fetchNewMembersFailAction(NoNewMembers));
    // }
  } catch (e) {
    // yield put(fetchNewMembersFailAction(ServerError));
  }
}

function* guessedWordsSaga() {
  yield all([takeLatest(GUESS_WORD_REQUEST, guessWordSaga)]);
}

export { guessedWordsSaga };
