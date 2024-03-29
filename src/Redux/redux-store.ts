import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {UsersPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";


export let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: UsersPageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});



export type ReduxStoreType = ReturnType<typeof createStore>
export let store: ReduxStoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))







// @ts-ignore
window.store = store