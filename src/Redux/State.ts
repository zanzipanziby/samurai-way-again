//---------------- Types for Store  -----------------------

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

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD_POST",
    } as const
}

type changeNewPostTextInStateACType = ReturnType<typeof changeNewPostTextInStateAC>
export const changeNewPostTextInStateAC = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        payload: {
            text
        }
    } as const
}
type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    } as const
}

type changeNewMessageTextInStateACType = ReturnType<typeof changeNewMessageTextInStateAC>
export const changeNewMessageTextInStateAC = (text: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        payload: {
            text
        }
    } as const

}


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
        switch (action.type) {
            case "ADD_POST":
                const newPost: PostsDataType = {
                    id: new Date().getTime().toString(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.newPostText &&
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ""
                this._callSubscriber()
                break
            case "UPDATE_NEW_POST_TEXT":
                this._state.profilePage.newPostText = action.payload.text
                this._callSubscriber()
                break
            case "SEND_MESSAGE":
                const newMessage: MessagesDataType =  {
                    id: new Date().getTime().toString(),
                    message: this._state.messagesPage.newMessageText
                }
                this._state.messagesPage.newMessageText &&
                this._state.messagesPage.messages.push(newMessage)
                this._state.messagesPage.newMessageText = ""
                this._callSubscriber()
                break

            case "UPDATE_NEW_MESSAGE_TEXT":
                this._state.messagesPage.newMessageText = action.payload.text
                this._callSubscriber()
                break
        }
    }

}

// @ts-ignore
window.store = store


