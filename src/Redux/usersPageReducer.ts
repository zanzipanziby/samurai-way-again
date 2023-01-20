import {ActionType, UsersPageType, UserType} from "./StateAndActionTypes";
import avatarVeronika from './../img/avatar/usersAvatar/Veronika.png'
import avatarMisha from './../img/avatar/usersAvatar/1644932113_1-kartinkin-net-p-boss-molokosos-kartinki-1.png'
import avatarJura from './../img/avatar/usersAvatar/Jura.png'
import avatarSvetlana from './../img/avatar/usersAvatar/png-transparent-computer-icons-woman-avatar-woman-people-woman-user.png'
import avatarOzzy from './../img/avatar/usersAvatar/ozzy.png'

const initialState: UsersPageType = {
    users: []
}


export const UsersPageReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FOLLOW_STATUS":
            return {
                ...state, users: state.users
                    .map(
                        u => u.id === action.payload.id
                            ? {...u, followed: action.payload.followStatus}
                            : u
                    )
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state


    }
}

export type ChangeFollowStatusACType = ReturnType<typeof changeFollowStatusAC>
export const changeFollowStatusAC = (id: string, followStatus: boolean) => {
    return {
        type: "CHANGE_FOLLOW_STATUS",
        payload: {
            id,
            followStatus
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const

}

