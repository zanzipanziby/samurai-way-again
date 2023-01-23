import {ActionType, PostsDataType, ProfilePageType, ProfileType} from "./StateAndActionTypes";
import {v1} from "uuid";
import avatar from '../img/avatar/avatar.png'
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

let initialProfilePageState: ProfilePageType =  {
    profile: null,
    posts: [
        {id: v1(), message: "Hello World", likesCount: 13},
        {id: v1(), message: "It's my first application", likesCount: 34},
    ],
        newPostText: ""
}
export const profilePageReducer = (state: ProfilePageType = initialProfilePageState, action: ActionType) => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {...state, profile: action.payload.profile}
        case "ADD_POST":
            const newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText.trim(),
                likesCount: 0
            }
            return newPost.message
                ? {...state, posts: [...state.posts, newPost], newPostText:''}
                : {...state, newPostText: ''}
        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostText: action.payload.text}
        default:
            return state

    }

}


//---------------  Create Action Creator --------------------

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD_POST",
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
    }as const
)