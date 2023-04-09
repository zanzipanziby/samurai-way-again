import {ActionType, AppDispatch, AuthType, LoginFormDataType} from "./StateAndActionTypes";

import {authAPI} from "../api/api";


const initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...state, ...action.payload.data, isAuth: true}
        case "LOGOUT":
            return {id: null, email: '', login: '', isAuth: false}
        default:
            return state
    }
}

export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (data: AuthType) => {
    return {
        type: "SET_AUTH_USER_DATA",
        payload: {
            data
        }
    } as const
}

export type logoutACType = ReturnType<typeof logoutAC>
export const logoutAC = () => {
    return {
        type: "LOGOUT"
    } as const
}

export const authTC = () => (dispatch: AppDispatch) => {
    authAPI.auth()
        .then(data => {
            data.resultCode === 0 &&
            dispatch(setAuthUserDataAC(data.data))
        })
}
export const authLoginTC = (data: LoginFormDataType) => (dispatch: AppDispatch) => {
    authAPI.login(data)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authTC())
            }
        })
}

export const authLogoutTC = () => (dispatch: AppDispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(logoutAC())
            }
        })
}
