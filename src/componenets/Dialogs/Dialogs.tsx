import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../Redux/StateAndActionTypes";
import {Redirect} from "react-router-dom";





type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMessageText: string
    sendMessage: () => void
    updateMessageText: (text: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const renderDialogsItem = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const renderMessages = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const sendMessage = () => {
        props.sendMessage()
    }

    const changeNewMessageTextInState = (e: ChangeEvent<HTMLTextAreaElement>) => {

         props.updateMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <ul>
                    {renderDialogsItem}
                </ul>
            </div>
            <div className={s.messagesList}>
                <ul className={s.messagesList}>
                    {renderMessages}
                </ul>
                <div>
                    <textarea
                        value={props.newMessageText}
                        onChange={changeNewMessageTextInState}
                        placeholder={'Enter your message'}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}


