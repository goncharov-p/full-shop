import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { initialState } from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer,  initialState, composeWithDevTools());

export default store;