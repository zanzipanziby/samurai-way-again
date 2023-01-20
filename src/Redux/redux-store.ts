import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {UsersPageReducer} from "./usersPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: UsersPageReducer
});



type ReduxStoreType = ReturnType<typeof createStore>
export let store: ReduxStoreType = createStore(reducers)




// @ts-ignore
window.store = store