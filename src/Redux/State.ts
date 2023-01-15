//---------------- Types for Store  -----------------------

import {addPostACType, changeNewPostTextInStateACType, ProfilePageReducer} from "./ProfilePageReducer";
import {changeNewMessageTextInStateACType, MessagePageReducer, sendMessageACType} from "./MessagePageReducer";

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
export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}

//---------------  Create Action Creator --------------------
export type ActionType = addPostACType
    | changeNewPostTextInStateACType
    | changeNewMessageTextInStateACType
    | sendMessageACType



export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hello World", likesCount: 13},
                {id: "2", message: "It's my first application", likesCount: 34},
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Misha'},
                {id: '3', name: 'Vera'},
                {id: '4', name: 'Svetlana'},
                {id: '5', name: 'Jura'},
            ],
            messages: [
                {id: '1', message: "Hello"},
                {id: '2', message: "How are you?"},
                {id: '3', message: "How learning React for three month?"},
                {id: '4', message: "Go playing in video games"},
                {id: '5', message: "Hey! Dude!"},
            ],
            newMessageText: ""
        }


    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = ProfilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = MessagePageReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }

}

// @ts-ignore
window.store = store


