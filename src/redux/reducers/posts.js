import { ADD_MANY_POSTS, DELETE_POST, ADD_POST, BLYA_MODE } from "./constants";
import { blya } from "../../components/constants";
const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_MANY_POSTS: {
			return [...state, ...action.payload];
		}
		case DELETE_POST: {
			return [...state.filter((item) => item.id !== action.payload)];
		}
		case ADD_POST: {
			return [action.payload, ...state];
		}
		case BLYA_MODE: {
			if (!action.payload) {
				return [
					...state.map((post) => ({ ...post, textContent: post.textContent.replace(/,/g, ` ${blya},`) })),
				];
			} else {
				const regex = new RegExp(` ${blya},`, "g");
				return [...state.map((post) => ({ ...post, textContent: post.textContent.replace(regex, ",") }))];
			}
		}
		default:
			return state;
	}
};

export const setManyPosts = (value) => ({ type: ADD_MANY_POSTS, payload: value });
export const setDeletePost = (id) => ({ type: DELETE_POST, payload: id });
export const setAddPostPost = (post) => ({ type: ADD_POST, payload: post });
export const setBlyaReducer = (n) => ({ type: BLYA_MODE, payload: n });
