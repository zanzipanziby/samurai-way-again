import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {UsersPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer
});



export type ReduxStoreType = ReturnType<typeof createStore>
export let store: ReduxStoreType = createStore(reducers, applyMiddleware(thunkMiddleware))




// @ts-ignore
window.store = store