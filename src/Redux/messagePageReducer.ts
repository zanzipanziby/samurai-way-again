import {ActionType, MessagePageType, MessagesDataType} from "./StateAndActionTypes";


let initialMessagePageState: MessagePageType = {
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
export const messagePageReducer = (state: MessagePageType = initialMessagePageState, action: ActionType) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            const newMessage: MessagesDataType = {
                id: new Date().getTime().toString(),
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