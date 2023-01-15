import {ActionType, MessagePageType, MessagesDataType, PostsDataType} from "./State";



export const MessagePageReducer = (state: MessagePageType, action: ActionType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            const newMessage: MessagesDataType = {
                id: new Date().getTime().toString(),
                message: state.newMessageText
            }
            state.newMessageText &&
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state

        case "UPDATE_NEW_MESSAGE_TEXT":
            state.newMessageText = action.payload.text
            return state
        default:
            return state
    }
}


//---------------  Create Action Creator --------------------

export type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    } as const
}

export type changeNewMessageTextInStateACType = ReturnType<typeof changeNewMessageTextInStateAC>
export const changeNewMessageTextInStateAC = (text: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        payload: {
            text
        }
    } as const

}