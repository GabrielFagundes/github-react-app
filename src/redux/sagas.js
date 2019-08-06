import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import repositorySagas from './repository/saga';

export default function* rootSaga(getState) {
  yield all([
    userSagas(),
    repositorySagas(),
  ]);
}
