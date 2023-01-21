import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {UsersPageReducer} from "./usersPageReducer";
import {StateType} from "./StateAndActionTypes";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: UsersPageReducer
});



type ReduxStoreType = ReturnType<typeof createStore>
export let store: ReduxStoreType = createStore(reducers)




// @ts-ignore
window.store = store