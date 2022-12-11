import {rerenderEntireTree} from "../Render";

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
export type StateType = {
    messagesPage: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessagesDataType>
    }
    profilePage: {
        posts: Array<PostsDataType>
    }
}


export const state: StateType = {
    profilePage: {
        posts: [
            {id: "1", message: "Hello World", likesCount: 13},
            {id: "2", message: "It's my first application", likesCount: 34},
        ]
    },
    messagesPage:{
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


}

export const addPost = (message: string) => {
    debugger
    const newPost: PostsDataType = {
        id: new Date().getTime().toString(),
        message: message,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}