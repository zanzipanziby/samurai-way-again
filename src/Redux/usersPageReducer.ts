import {ActionType, AppDispatch, UsersPageType, UserTypeWithoutServer} from "./StateAndActionTypes";
import {followingAPI, usersAPI} from "../api/api";


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.payload.value
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state


    }
}


// -----------------  Action Creators -------------------

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
export const toggleIsFetchingAC = (value: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            value
        }
    } as const
}

export type ToggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgressAC>
export const toggleFollowingInProgressAC = (value: boolean, userId: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        payload: {
            value,
            userId
        }
    } as const
}


// ---------------------- Thunk Creators  -------------------


// -----------  Get Users of User Page-----------
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: AppDispatch) => {
    dispatch(toggleIsFetchingAC(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
}

// --------------  Follow to user ----------------
export const followTC = (id: number) => (dispatch: AppDispatch) => {
    dispatch(toggleFollowingInProgressAC(true, id))
    followingAPI.follow(id)
        .then(data => data.resultCode === 0 && dispatch(followOnUserAC(id) ) && console.log(data))
        .finally(() => dispatch(toggleFollowingInProgressAC(false, id)))
}
// -----------------  Unfollow user
export const unfollowTC = (id: number) => (dispatch: AppDispatch) => {
    dispatch(toggleFollowingInProgressAC(true, id))
    followingAPI.unfollow(id)
        .then(data => data.resultCode === 0 && dispatch(unfollowOnUserAC(id)) && console.log(data))
        .finally(() => dispatch(toggleFollowingInProgressAC(false, id)))

}



