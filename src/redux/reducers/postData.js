import { IMAGE_CONTENT, LIKES, TEXT_CONTENT, USER_NAME, DATE } from "./constants";

const initialState = {
	imageContent: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case IMAGE_CONTENT: {
			return { ...state, imageContent: action.payload};
		}
		default:
			return state;
	}
};

export const setDate = (value) => ({ type: DATE, payload: value });
export const setUserName = (value) => ({ type: USER_NAME, payload: value });
export const setImageContent = (value) => ({ type: IMAGE_CONTENT, payload: value });
export const setTextContent = (value) => ({ type: TEXT_CONTENT, payload: value });
export const setLikes = (value) => ({ type: LIKES, payload: value });
