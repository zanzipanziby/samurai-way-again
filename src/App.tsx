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

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {

    return (

        <div className={"wrapper"}>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className={"wrapper-content"}>
                    <Route render={() =>
                        <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />} path={'/profile'}
                    />
                    <Route render={() =>
                        <Dialogs
                            state={props.state.messagesPage}
                            dispatch={props.dispatch}
                        />} path={'/dialogs'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>


                </div>
            </div>
        </div>

    );
}


export default App;
