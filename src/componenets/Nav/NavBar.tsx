import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item} >
                    <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
                <br/>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

