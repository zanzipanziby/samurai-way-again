import React from 'react';
import './App.css';

import {Header} from "./componenets/Header/Header";
import {NavBar} from "./componenets/Nav/NavBar";
import {Profile} from "./componenets/Profile/Profile";
import {Dialogs} from "./componenets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./componenets/News/News";
import {Music} from "./componenets/Music/Music";
import {Settings} from "./componenets/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <div className="App">
                    <Header/>
                    <NavBar/>
                    <div className={"wrapper-content"}>
                        <Route component={Dialogs} path={'/dialogs'}/>
                        <Route component={Profile} path={'/profile'}/>
                        <Route component={News} path={'/news'}/>
                        <Route component={Music} path={'/music'}/>
                        <Route component={Settings} path={'/settings'}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
