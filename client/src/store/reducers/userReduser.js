import { GET_USERS, ADD_USER, USER_LOADING } from "../actions/usersActions";

const initialState = {
	users: [],
    loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
                loading: true
			};

		case ADD_USER:
			return {
				...state,
				users: [action.payload, ...state.users],
			};
		case USER_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
