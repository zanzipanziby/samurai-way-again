import {ActionType, MessagesDataType, PostsDataType, ProfilePageType} from "./State";


export const ProfilePageReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostsDataType = {
                id: new Date().getTime().toString(),
                message: state.newPostText,
                likesCount: 0
            }
            state.newPostText &&
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.payload.text
            return state
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