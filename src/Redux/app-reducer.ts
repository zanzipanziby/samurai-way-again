import {ActionType, AppDispatch, AppType} from "./StateAndActionTypes";
import {authTC} from "./authReducer";


const initialState: AppType = {
    isInitialized: false
}

export const appReducer = (state: AppType = initialState, action: ActionType): AppType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, isInitialized: true}
        default:
            return state
    }
}


export type SetInitializedACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => (
    {
        type: "INITIALIZED_SUCCESS",
    } as const
)


export const initializeAppTC = () => (dispatch: AppDispatch) => {
    dispatch(authTC())
        .then(() => dispatch(initializedSuccessAC()))
}