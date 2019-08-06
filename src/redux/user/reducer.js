import {
	USER_GET_LIST_SEARCH,
	USER_GET_LIST_SUCCESS,
	USER_GET_LIST_ERROR
} from '../actions';

const INIT_STATE = {
	users: null,
	error: '',
	loading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case USER_GET_LIST_SEARCH:
			if (action.payload === '') {
				return { ...state, users: state.users };
			} else {
				return { ...state }
			}

		case USER_GET_LIST_SUCCESS:
			return { ...state, loading: true, users: action.payload };

		case USER_GET_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
