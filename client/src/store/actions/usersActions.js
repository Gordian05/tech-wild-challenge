import axios from "axios";
export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER"
export const USER_LOADING = "USER_LOADING"

export const getUsers = () => (dispatch) => {
    axios.get('/users').then((res) => dispatch({type: GET_USERS, payload: res.data}))
}

export const addUser = (user) => dispatch => {
    axios
		.post("/users", user)
		.then((res) => dispatch({ type: ADD_USER, payload: res.data }));
}