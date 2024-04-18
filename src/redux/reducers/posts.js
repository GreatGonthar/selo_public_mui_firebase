import { ADD_MANY_POSTS, DELETE_POST, ADD_POST } from "./constants";

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_MANY_POSTS: {
			return [...state, ...action.payload]			
		}
		case DELETE_POST: {			
			return [...state.filter(item => item.id !== action.payload)]
		}
		case ADD_POST: {
			return [action.payload, ...state]			
		}
		default:
			return state;
	}
};

export const setManyPosts = (value) => ({ type: ADD_MANY_POSTS, payload: value });
export const setDeletePost = (id) => ({ type: DELETE_POST, payload: id });
export const setAddPostPost = (post) => ({ type: ADD_POST, payload: post });

