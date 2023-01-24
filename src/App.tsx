import React from 'react';
import './App.css';
import {Header} from "./componenets/Header/Header";
import {NavBar} from "./componenets/Nav/NavBar";
import {Profile} from "./componenets/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./componenets/News/News";
import {Music} from "./componenets/Music/Music";
import {Settings} from "./componenets/Settings/Settings";
import {DialogsContainer} from "./componenets/Dialogs/DialogsContainer";
import {UsersContainer} from "./componenets/Users/UsersContainer";
import {ProfileContainer} from "./componenets/Profile/ProfileContainer";
import HeaderContainerComponent from "./componenets/Header/HeaderContainerComponent";

type AppPropsType = {}

function App(props: AppPropsType) {

    return (

        <div className={"wrapper"}>
            <div className="App">
                <HeaderContainerComponent/>
                <NavBar/>
                <div className={"wrapper-content"}>
                    <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                    <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                    <Route render={() => <UsersContainer/>} path={'/users'}/>

                </div>
            </div>
        </div>

    );
}


export default App;
