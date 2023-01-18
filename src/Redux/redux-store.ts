import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {ActionType, MessagePageType, ProfilePageType} from "./store";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer
});


export type ReduxStoreType =  Store<EmptyObject & {profilePage: ProfilePageType, messagesPage: MessagePageType}, ActionType>

export let store: ReduxStoreType = createStore(reducers)