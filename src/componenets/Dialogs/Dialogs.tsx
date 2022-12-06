import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                <li className={s.dialogsItem}>
                    <NavLink to={"/dialogs/1"}>Dima</NavLink>
                </li>
                <li className={s.dialogsItem}>
                    <NavLink to={"/dialogs/2"}>Misha</NavLink>
                </li>
                <li className={s.dialogsItem}>
                    <NavLink to={"/dialogs/3"}>Vera</NavLink>
                </li>
                <li className={s.dialogsItem}>
                    <NavLink to={"/dialogs/4"}>Svetlana</NavLink>
                </li>
                <li className={s.dialogsItem}>
                    <NavLink to={"/dialogs/5"}>Jura</NavLink>
                </li>
            </ul>
            <ul className={s.messages}>
                <li className={s.message}>Hello</li>
                <li className={s.message}>How are you?</li>
                <li className={s.message}>How learning React for three month</li>
                <li className={s.message}>Go playing in video games</li>
                <li className={s.message}>Hey! Dude!</li>
            </ul>
        </div>
    );
};

