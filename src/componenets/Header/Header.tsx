import React from 'react';
import logo from "./../../img/logo/logo.png";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {authLogoutTC} from "../../Redux/authReducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    authLogoutTC: () => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div><img src={logo} alt="logo" className={s.logo}/></div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <>
                        <div className={s.userLogin}>{props.login}</div>
                        <button onClick={props.authLogoutTC}>Log out</button>
                    </>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
            </div>
        </header>
    );
};


