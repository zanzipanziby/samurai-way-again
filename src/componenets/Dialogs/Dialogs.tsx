import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessageFormDataType, DialogsDataType, MessagesDataType} from "../../Redux/StateAndActionTypes";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMessageText: string
    sendMessage: (message: string) => void
    updateMessageText: (text: string) => void
}




export const Dialogs = (props: DialogsPropsType) => {
    const renderDialogsItem = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const renderMessages = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const sendMessage = (data:AddMessageFormDataType) => {
        props.sendMessage(data.message)
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
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


export const AddMessageForm = (props: InjectedFormProps<AddMessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={"textarea"} placeholder={'Enter your message'} name={"message"}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: "DialogAddMessageForm"})(AddMessageForm)


