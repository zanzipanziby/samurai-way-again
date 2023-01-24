import {ActionType, AuthType} from "./StateAndActionTypes";

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
    }as const
}