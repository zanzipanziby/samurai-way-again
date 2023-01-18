import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, MessagePageType} from "../../Redux/store";
import {changeNewMessageTextInStateAC, sendMessageAC} from "../../Redux/messagePageReducer";
import {ReduxStoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";



type DialogsContainerPropsType = {
   store: ReduxStoreType
}


export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()
    const dispatch = props.store.dispatch



    const sendMessage = () => {
        dispatch(sendMessageAC())
    }

    const changeNewMessageTextInState = (text: string) => {
        dispatch(changeNewMessageTextInStateAC(text))
    }


    return (
       <Dialogs
           dialogs={state.messagesPage.dialogs}
           messages={state.messagesPage.messages}
           newMessageText={state.messagesPage.newMessageText}
           sendMessage={sendMessage}
           updateMessageText={changeNewMessageTextInState}/>
    );
}


