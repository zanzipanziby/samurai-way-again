import React from 'react';
import logo from "./../../img/logo/logo.png";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>
        </header>
    );
};

