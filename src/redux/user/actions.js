import {
  USER_GET_LIST_SEARCH,
  USER_GET_LIST_SUCCESS,
  USER_GET_LIST_ERROR,
} from '../actions';

export const getUserListSearch = (keyword) => ({
  type: USER_GET_LIST_SEARCH,
  payload: keyword
});

export const getUserListSuccess = (users) => ({
  type: USER_GET_LIST_SUCCESS,
  payload: users
});

export const getUserListError = (error) => ({
  type: USER_GET_LIST_ERROR,
  payload: error
});
