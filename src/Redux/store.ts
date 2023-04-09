//---------------- Types for Store  -----------------------

import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {ActionType, AppType, AuthType, ProfileType, StateType} from "./StateAndActionTypes";


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}

// -----------------  ActionsType -----------------


export const store: StoreType = {
    _state: {
        profilePage: {
            profile: {} as ProfileType,
            posts: [
                {id: "1", message: "Hello World", likesCount: 13},
                {id: "2", message: "It's my first application", likesCount: 34},
            ],
            status:""
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
        },
        usersPage: {
            users: [],
            pageSize: 0,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: true,
            followingInProgress: []
        },
        auth:{} as AuthType,
        app:{} as AppType




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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }

}

// @ts-ignore
window.store = store


