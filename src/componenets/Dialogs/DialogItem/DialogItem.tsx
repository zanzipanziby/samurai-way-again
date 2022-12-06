import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <li className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
}