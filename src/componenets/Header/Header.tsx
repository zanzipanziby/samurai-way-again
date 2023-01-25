import React from 'react';
import logo from "./../../img/logo/logo.png";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div><img src={logo} alt="logo" className={s.logo}/></div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.userLogin}>{props.login}</div>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
            </div>
        </header>
    );
};


