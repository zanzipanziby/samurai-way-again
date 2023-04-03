import {ActionType, PostsDataType, ProfilePageType, ProfileType} from "./StateAndActionTypes";
import {v1} from "uuid";
import avatar from '../img/avatar/avatar.png'
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";

let userDefault = {
    aboutMe: "Genius, billionaire, playboy, philanthropist",
    contacts: {
        facebook: "facebook.com",
        website: null,
        vk: "vk.com",
        twitter: "https://twitter.com",
        instagram: "instagram.com",
        youtube: null,
        github: "github.com",
        mainLink: null
    },
    lookingForAJob: false,
    lookingForAJobDescription: "I'm Iron Man",
    fullName: 'Edward "Tony" Stark',
    userId: 2,
    photos: {
        small: avatar,
        large: avatar
    }
}

let initialProfilePageState: ProfilePageType = {
    profile: null,
    posts: [
        {id: v1(), message: "Hello World", likesCount: 13},
        {id: v1(), message: "It's my first application", likesCount: 34},
    ],
    status: ""
}
export const profilePageReducer = (state: ProfilePageType = initialProfilePageState, action: ActionType) => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {...state, profile: action.payload.profile}
        case "ADD_POST":
            const newPost: PostsDataType = {
                id: v1(),
                message: action.payload.newPostText.trim(),
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}

        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostText: action.payload.text}
        case "SET_STATUS":
            debugger
            if(action.payload.status) return {...state, status: action.payload.status}
            else return {...state,status:"-----"}

        default:
            return state

    }

}


//---------------  Create Action Creator --------------------

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD_POST",
        payload: {
            newPostText
        }
    } as const
}

export type changeNewPostTextInStateACType = ReturnType<typeof changeNewPostTextInStateAC>
export const changeNewPostTextInStateAC = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        payload: {
            text
        }
    } as const
}

export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => (
    {
        type: "SET_USER_PROFILE",
        payload: {
            profile
        }
    } as const
)

export type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => (
    {
        type: "SET_STATUS",
        payload: {
            status
        }
    } as const
)




// --------------- Thunk Creators --------------


// ---  Checked Auth ---
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    authAPI.getUserProfile(userId)
        .then(data => dispatch(setUserProfileAC(data)))
}

// --- Get User Status ---

export const getUserStatusTC = (id: number) => (dispatch: Dispatch) => {
    debugger
    profileAPI.getStatus(id)
        .then(data => dispatch(setStatusAC(data)))
}
// --- Update Status ---

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(() => dispatch(setStatusAC(status)))
}

