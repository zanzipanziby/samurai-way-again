import s from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    id: string
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <li className={s.message}>{props.message}</li>
    )
}