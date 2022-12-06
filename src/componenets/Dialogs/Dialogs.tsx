import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
    id: string
    name: string
}
type MessagesDataType = {
    id: string
    message: string
}

export const Dialogs = () => {

        const dialogsData: Array<DialogsDataType> = [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Misha'},
            {id: '3', name: 'Vera'},
            {id: '4', name: 'Svetlana'},
            {id: '5', name: 'Jura'},
        ]

        const messagesData: Array<MessagesDataType> = [
            {id: '1', message: "Hello"},
            {id: '2', message: "How are you?"},
            {id: '3', message: "How learning React for three month?"},
            {id: '4', message: "Go playing in video games"},
            {id: '5', message: "Hey! Dude!"},
        ]

        const renderDialogsItem = dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
        const renderMessages = messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


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

