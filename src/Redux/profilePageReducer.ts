import {ActionType, PostsDataType, ProfilePageType} from "./store";



let initialProfilePageState: ProfilePageType =  {
    posts: [
        {id: "1", message: "Hello World", likesCount: 13},
        {id: "2", message: "It's my first application", likesCount: 34},
    ],
        newPostText: ""
}
export const profilePageReducer = (state: ProfilePageType = initialProfilePageState, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostsDataType = {
                id: new Date().getTime().toString(),
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