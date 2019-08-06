import {
  REPOSITORY_GET_LIST_SEARCH,
  REPOSITORY_GET_LIST_SUCCESS,
  REPOSITORY_GET_LIST_ERROR,
  USER_REPOSITORY_GET_LIST_SEARCH,
	USER_REPOSITORY_GET_LIST_SUCCESS,
	USER_REPOSITORY_GET_LIST_ERROR,
} from '../actions';

/**
 * Search for repositories with the given language
 * @param {keyword} language 
 */
export const getRepositoryListSearch = (keyword) => ({
  type: REPOSITORY_GET_LIST_SEARCH,
  payload: keyword
});

export const getRepositoryListSuccess = (repositories) => ({
  type: REPOSITORY_GET_LIST_SUCCESS,
  payload: repositories
});

export const getRepositoryListError = (error) => ({
  type: REPOSITORY_GET_LIST_ERROR,
  payload: error
});

/**
 * Individual user repository
 * @param {keyword} username 
 */
export const getUserRepositoryListSearch = (keyword) => ({
  type: USER_REPOSITORY_GET_LIST_SEARCH,
  payload: keyword
});

export const getUserRepositoryListSuccess = (userRepositories) => ({
  type: USER_REPOSITORY_GET_LIST_SUCCESS,
  payload: userRepositories
});

export const getUserRepositoryListError = (error) => ({
  type: USER_REPOSITORY_GET_LIST_ERROR,
  payload: error
});
