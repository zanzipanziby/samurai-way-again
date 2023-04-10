import {
    addPostACType,
    changeNewPostTextInStateACType,
    SetStatusACType,
    SetUserProfileACType
} from "./profilePageReducer";
import {sendMessageACType} from "./messagePageReducer";
import {
    FollowOnUserACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType,
    ToggleFollowingInProgressACType,
    ToggleIsFetchingACType,
    UnfollowOnUserACType
} from "./usersPageReducer";
import {rootReducer, store} from "./redux-store";
import {logoutACType, SetUserDataACType} from "./authReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {SetInitializedACType} from "./app-reducer";

export type RootStateType = ReturnType<typeof rootReducer>
export type RootState2 = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AnyAction>

// ------------   StateTypes   ---------------\\
export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
    usersPage: UsersPageType
    auth: AuthType
    app: AppType
}


// ------------   ProfilePageTypes   -----------------\\
export type ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostsDataType>
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


//----------------   MessagePageTypes   -----------------------\\
export type MessagePageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}

export type AddMessageFormDataType = {
    message: string
}


// ------------ UserType for UserPageTypes (LEGACY) -----------\\
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


// ------------  UserPageTypes --------------\\
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


// ------------   LoginPageTypes  ----------\\

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe?: boolean
}


//-----------  AuthType ----------------\\

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

//-----------  AppType ----------------\\
export type AppType = {
    isInitialized: boolean
}


// ---------------   ActionType   -----------\\

export type ActionType =
    | addPostACType
    | changeNewPostTextInStateACType
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
    | logoutACType
    | SetInitializedACType
