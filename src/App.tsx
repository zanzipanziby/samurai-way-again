import React from 'react';
import './App.css';
import banner from './img/banner/banner.png'
import avatar from './img/avatar/avatar.png'
import {Header} from "./componenets/Header/Header";
import {NavBar} from "./componenets/Nav/NavBar";
import {Profile} from "./componenets/Profile/Profile";

function App() {
    return (
        <div className={"wrapper"}>
            <div className="App">
                <Header/>
                <NavBar/>
                <Profile/>
            </div>
        </div>
    );
}


export default App;
