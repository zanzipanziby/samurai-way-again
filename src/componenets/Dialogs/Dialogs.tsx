import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, MessagePageType} from "../../Redux/store";
import {changeNewMessageTextInStateAC, sendMessageAC} from "../../Redux/messagePageReducer";



type DialogsPropsType = {
    state: MessagePageType
    dispatch: (action: ActionType) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const renderDialogsItem = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const renderMessages = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    const changeNewMessageTextInState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextInStateAC(e.currentTarget.value))
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
                        value={props.state.newMessageText}
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


