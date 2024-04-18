import { combineReducers } from "redux";
import postData from "./postData"
import posts from "./posts"

const rootReducers = () => combineReducers({
    postData,
    posts
})

export default rootReducers