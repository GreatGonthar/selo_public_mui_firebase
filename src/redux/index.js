import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk"

const initialState = {}

const composeEnhancers = compose(applyMiddleware(thunk))
const store = createStore(rootReducers(), initialState, composeEnhancers)

window.store = store
export default store
