import {ActionType, MessagePageType, MessagesDataType} from "./StateAndActionTypes";
import {v1} from "uuid";


let initialMessagePageState: MessagePageType = {
    dialogs: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Misha'},
        {id: v1(), name: 'Vera'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Jura'},
    ],
    messages: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "How learning React for three month?"},
        {id: v1(), message: "Go playing in video games"},
        {id: v1(), message: "Hey! Dude!"},
    ],
    newMessageText: ""
}
export const messagePageReducer = (state: MessagePageType = initialMessagePageState, action: ActionType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            const newMessage: MessagesDataType = {
                id: v1(),
                message: state.newMessageText.trim()
            }

            return newMessage.message
                ? {...state, messages: [...state.messages, newMessage], newMessageText: ''}
                : {...state, newMessageText: ''}


        case "UPDATE_NEW_MESSAGE_TEXT":
            return {...state, newMessageText: action.payload.text}
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