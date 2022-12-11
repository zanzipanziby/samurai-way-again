import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../Redux/State";



type DialogsPropsType = {
    state: {
        dialogs: DialogsDataType[]
        messages: MessagesDataType[]
    }
}


export const Dialogs = (props: DialogsPropsType) => {
        const renderDialogsItem = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
        const renderMessages = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


        return (
            <div className={s.dialogs}>
                <ul className={s.dialogsList}>
                    {renderDialogsItem}
                </ul>
                <ul className={s.messagesList}>
                    {renderMessages}
                </ul>
            </div>
        );
    }
;

