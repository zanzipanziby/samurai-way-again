import {ActionType, UsersPageType, UserTypeWithoutServer} from "./StateAndActionTypes";


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true
}


export const UsersPageReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW_ON_USER":
            return {
                ...state, users: state.users
                    .map(
                        u => u.id === action.payload.id
                            ? {...u, followed: true}
                            : u
                    )
            }
        case "UNFOLLOW_ON_USER":
            return {
                ...state, users: state.users
                    .map(
                        u => u.id === action.payload.id
                            ? {...u, followed: false}
                            : u
                    )
            }
        case "SET_USERS":
            return {...state, users: [...action.payload.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.payload.value}
        default:
            return state


    }
}
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}
export type FollowOnUserACType = ReturnType<typeof followOnUserAC>
export const followOnUserAC = (id: number) => {
    return {
        type: "FOLLOW_ON_USER",
        payload: {
            id,
        }
    } as const
}
export type UnfollowOnUserACType = ReturnType<typeof unfollowOnUserAC>
export const unfollowOnUserAC = (id: number) => {
    return {
        type: "UNFOLLOW_ON_USER",
        payload: {
            id
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserTypeWithoutServer>) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const

}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            page
        }

    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (value: boolean)=> {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            value
        }
    }as const
}
