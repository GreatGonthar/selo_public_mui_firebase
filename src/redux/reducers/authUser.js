import { AUTH_IN, AUTH_OUT } from "./constants";

const initialState = { isAuth: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_IN: {
			return { ...action.payload, isAuth: true };
		}
		case AUTH_OUT: {
			return { isAuth: false };
		}
		default:
			return state;
	}
};

export const setAuthIn = (value) => ({ type: AUTH_IN, payload: value });
export const setAuthOut = () => ({ type: AUTH_OUT });
