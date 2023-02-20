import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const mainReducer = combineReducers({
    user: Reducer
})

const middleware = [thunk]

export const store = createStore(mainReducer, applyMiddleware(...middleware) );