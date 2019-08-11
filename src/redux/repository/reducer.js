import {
	REPOSITORY_GET_LIST_SEARCH,
	REPOSITORY_GET_LIST_SUCCESS,
	REPOSITORY_GET_LIST_ERROR,
	USER_REPOSITORY_GET_LIST_SEARCH,
	USER_REPOSITORY_GET_LIST_SUCCESS,
	USER_REPOSITORY_GET_LIST_ERROR,
	FILTER_LIST,
} from '../actions';

const INIT_STATE = {
	repositories: [],
	userRepositories: [],
	filterByLanguage: false,
	error: null,
	loading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case REPOSITORY_GET_LIST_SEARCH:
			if (action.payload === '') {
				return { ...state, repositories: state.repositories };
			} else {
				return { ...state, loading: true }
			}

		case REPOSITORY_GET_LIST_SUCCESS:
			return { ...state, loading: false, repositories: action.payload };

		case REPOSITORY_GET_LIST_ERROR:
			return { ...state, loading: false, error: action.payload };

		case USER_REPOSITORY_GET_LIST_SEARCH:
			if (action.payload === '') {
				return { ...state, userRepositories: state.userRepositories };
			} else {
				return { ...state, loading: true }
			}

		case USER_REPOSITORY_GET_LIST_SUCCESS:
			return { ...state, loading: false, userRepositories: action.payload };

		case USER_REPOSITORY_GET_LIST_ERROR:
			return { ...state, loading: false, error: action.payload };

		case FILTER_LIST:
			return { ...state, filterByLanguage: !state.filterByLanguage };

		default: return { ...state };
	}
}
