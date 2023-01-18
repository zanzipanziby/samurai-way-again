import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer
});

export let store = createStore(reducers)