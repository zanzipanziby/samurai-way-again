import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {UsersPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer
});



type ReduxStoreType = ReturnType<typeof createStore>
export let store: ReduxStoreType = createStore(reducers)




// @ts-ignore
window.store = store