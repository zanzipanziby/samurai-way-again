import {addPostACType, changeNewPostTextInStateACType} from "./profilePageReducer";
import {changeNewMessageTextInStateACType, sendMessageACType} from "./messagePageReducer";
import {
    ChangeFollowStatusACType,
    SetCurrentPageACType,
    setTotalUsersCountAC,
    SetTotalUsersCountACType,
    SetUsersACType, ToggleIsFetchingACType
} from "./usersPageReducer";

export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostsDataType = {
    id: string
    message: string
    likesCount: number

}
export type MessagePageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    newMessageText: string
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
}
export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    avatar: string
    fullName: string
    status: string
    followed: boolean
    location: LocationType
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
export type UsersPageType = {
    // users: Array<UserType>
    users: UserTypeWithoutServer[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
    usersPage: UsersPageType
}

export type ActionType =
    | addPostACType
    | changeNewPostTextInStateACType
    | changeNewMessageTextInStateACType
    | sendMessageACType
    | ChangeFollowStatusACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
