import { ADD_USER, ADD_USERS } from "./constants";

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER: {
			console.log("добавили пользователя в state", action.payload);
			return [...state, action.payload];
		}
		case ADD_USERS: {
			console.log("добавили массив пользователей в state", action.payload);
			return [...action.payload];
		}
		default:
			return state;
	}
};

export const setAddUser = (value) => ({ type: ADD_USER, payload: value });
export const setAddUsers = (value) => ({ type: ADD_USERS, payload: value });
