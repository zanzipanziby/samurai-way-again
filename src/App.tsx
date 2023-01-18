import React from 'react';
import './App.css';
import {Header} from "./componenets/Header/Header";
import {NavBar} from "./componenets/Nav/NavBar";
import {Profile} from "./componenets/Profile/Profile";
import {Dialogs} from "./componenets/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./componenets/News/News";
import {Music} from "./componenets/Music/Music";
import {Settings} from "./componenets/Settings/Settings";
import {ActionType, StateType} from "./Redux/store";
import {ReduxStoreType} from "./Redux/redux-store";
import {DialogsContainer} from "./componenets/Dialogs/DialogsContainer";

type AppPropsType = {

}

function App(props: AppPropsType) {

    return (

        <div className={"wrapper"}>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className={"wrapper-content"}>
                    <Route render={() => <Profile/>} path={'/profile'}/>
                    <Route render={() => <DialogsContainer />} path={'/dialogs'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>


                </div>
            </div>
        </div>

    );
}


export default App;
