import React from 'react';
import logo from "../../img/logo/logo.png";

export const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className={"logo"}/>
        </header>
    );
};

