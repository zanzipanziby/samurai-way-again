import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, MessagePageType, StateType} from "../../Redux/store";
import {changeNewMessageTextInStateAC, sendMessageAC} from "../../Redux/messagePageReducer";
import {ReduxStoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";







let mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateMessageText: (text: string) => {
            dispatch(changeNewMessageTextInStateAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

