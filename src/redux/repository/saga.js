import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import api from '../../services/api'
import { REPOSITORY_GET_LIST_SEARCH, USER_REPOSITORY_GET_LIST_SEARCH } from "../actions";

import {
  getRepositoryListSuccess,
  getRepositoryListError,
  getUserRepositoryListSuccess,
  getUserRepositoryListError,
} from "./actions";


const getRepositoryListRequest = async keyword => {
  return await new Promise((success, fail) => {
    success(api.get(`/search/repositories?q=language:${keyword}&sort=stars&order=desc`));
  })
    .then(response => response)
    .catch(error => error);
};

const getUserRepositoryListRequest = async keyword => {
  return await new Promise((success, fail) => {
    success(api.get(`/users/${keyword}/repos`));
  })
    .then(response => response)
    .catch(error => error);
};

function* getRepositoryListSearch({ payload }) {
  try {
    const response = yield call(getRepositoryListRequest, payload);
    yield put(getRepositoryListSuccess(response));
  } catch (error) {
    yield put(getRepositoryListError(error));
  }
}

function* getUserRepositoryListSearch({ payload }) {
  try {
    const response = yield call(getUserRepositoryListRequest, payload);
    yield put(getUserRepositoryListSuccess(response));
  } catch (error) {
    yield put(getUserRepositoryListError(error));
  }
}

export function* watchGetRepositoryList() {
  yield takeEvery(REPOSITORY_GET_LIST_SEARCH, getRepositoryListSearch);
}

export function* watchGetUserRepositoryList() {
  yield takeEvery(USER_REPOSITORY_GET_LIST_SEARCH, getUserRepositoryListSearch);
}


export default function* rootSaga() {
  yield all([fork(watchGetRepositoryList), fork(watchGetUserRepositoryList)]);
}
