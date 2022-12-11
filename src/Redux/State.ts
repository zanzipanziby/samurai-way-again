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
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
}
export type StateType = {
    messagesPage: MessagePageType
    profilePage: ProfilePageType
}


export const store = {
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
            ]
        }


    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        const newPost: PostsDataType = {
            id: new Date().getTime().toString(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}

// @ts-ignore
window.store = store


//
// let rerenderEntireTree = () => {
//     console.log('state changed')
// }
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }
//
//
// export const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: "1", message: "Hello World", likesCount: 13},
//             {id: "2", message: "It's my first application", likesCount: 34},
//         ],
//         newPostText: ""
//     },
//     messagesPage: {
//         dialogs: [
//             {id: '1', name: 'Dima'},
//             {id: '2', name: 'Misha'},
//             {id: '3', name: 'Vera'},
//             {id: '4', name: 'Svetlana'},
//             {id: '5', name: 'Jura'},
//         ],
//         messages: [
//             {id: '1', message: "Hello"},
//             {id: '2', message: "How are you?"},
//             {id: '3', message: "How learning React for three month?"},
//             {id: '4', message: "Go playing in video games"},
//             {id: '5', message: "Hey! Dude!"},
//         ]
//     }
//
//
// }
//
// export const addPost = () => {
//     const newPost: PostsDataType = {
//         id: new Date().getTime().toString(),
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree()
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }