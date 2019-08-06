import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import api from '../../services/api'
import { USER_GET_LIST_SEARCH } from "../actions";

import {
  getUserListSuccess,
  getUserListError,
} from "../user/actions";


const getUserListRequest = async keyword => {
  return await new Promise((success, fail) => {
    success(api.get(`/search/users?q=${keyword}`));
  })
    .then(response => response)
    .catch(error => error);
};

function* getUserListSearch({ payload }) {
  try {
    const response = yield call(getUserListRequest, payload);
    yield put(getUserListSuccess(response));
  } catch (error) {
    yield put(getUserListError(error));
  }
}

export function* watchGetUserList() {
  yield takeEvery(USER_GET_LIST_SEARCH, getUserListSearch);
}


export default function* rootSaga() {
  yield all([fork(watchGetUserList)]);
}
