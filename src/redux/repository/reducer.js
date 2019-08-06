import {
	REPOSITORY_GET_LIST_SEARCH,
	REPOSITORY_GET_LIST_SUCCESS,
	REPOSITORY_GET_LIST_ERROR,
	USER_REPOSITORY_GET_LIST_SEARCH,
	USER_REPOSITORY_GET_LIST_SUCCESS,
	USER_REPOSITORY_GET_LIST_ERROR,
} from '../actions';

const INIT_STATE = {
	repositories: null,
	userRepositories: null,
	error: '',
	loading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case REPOSITORY_GET_LIST_SEARCH:
			if (action.payload === '') {
				return { ...state, repositories: state.repositories };
			} else {
				return { ...state }
			}

		case REPOSITORY_GET_LIST_SUCCESS:
			return { ...state, loading: true, repositories: action.payload };

		case REPOSITORY_GET_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };
	
		case USER_REPOSITORY_GET_LIST_SEARCH:
			if (action.payload === '') {
				return { ...state, userRepositories: state.userRepositories };
			} else {
				return { ...state }
			}

		case USER_REPOSITORY_GET_LIST_SUCCESS:
			return { ...state, loading: true, userRepositories: action.payload };

		case USER_REPOSITORY_GET_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
