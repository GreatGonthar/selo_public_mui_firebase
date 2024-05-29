import { combineReducers } from "redux";
import postData from "./postData";
import posts from "./posts";
import users from "./users";
import authUser from "./authUser";

const rootReducers = () =>
	combineReducers({
		postData,
		posts,
		users,
		authUser,
	});

export default rootReducers;
