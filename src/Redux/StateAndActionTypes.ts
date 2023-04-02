import {
    addPostACType,
    changeNewPostTextInStateACType,
    SetStatusACType,
    SetUserProfileACType
} from "./profilePageReducer";
import {changeNewMessageTextInStateACType, sendMessageACType} from "./messagePageReducer";
import {
    FollowOnUserACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType,
    ToggleFollowingInProgressACType,
    ToggleIsFetchingACType,
    UnfollowOnUserACType
} from "./usersPageReducer";
import {store} from "./redux-store";
import {SetUserDataACType} from "./authReducer";


// ------------   StateType   ---------------\\
export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
    usersPage: UsersPageType
    auth: AuthType
}


// ------------   ProfilePageType   -----------------\\
export type ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostsDataType>
    newPostText: string
    status: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string
    large: string
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}


//----------------   MessagePageType   -----------------------\\
export type MessagePageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    newMessageText: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}


// ------------ UserType for UserPageType (LEGACY) -----------\\
export type UserType = {
    id: string
    avatar: string
    fullName: string
    status: string
    followed: boolean
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}


// ------------  UserPageType --------------\\
export type UsersPageType = {
    // users: Array<UserType>
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: number[]
}
export type UserTypeWithoutServer = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    "status": null,
    "followed": boolean
}


//-----------  AuthType ----------------\\

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

// ---------------   ActionType   -----------\\

export type ActionType =
    | addPostACType
    | changeNewPostTextInStateACType
    | changeNewMessageTextInStateACType
    | sendMessageACType
    | FollowOnUserACType
    | UnfollowOnUserACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | SetUserProfileACType
    | SetUserDataACType
    | ToggleFollowingInProgressACType
    | SetStatusACType
