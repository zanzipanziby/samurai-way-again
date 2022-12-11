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
import {StateType} from "./Redux/State";

type AppPropsType = {
    state: StateType
    addPost: (message: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <div className="App">
                    <Header/>
                    <NavBar/>
                    <div className={"wrapper-content"}>
                        <Route render={() =>
                            <Profile
                                state={props.state.profilePage}
                                addPost={props.addPost}
                            />}
                               path={'/profile'}
                        />
                        <Route render={() => <Dialogs state={props.state.messagesPage}/>} path={'/dialogs'}/>
                        <Route render={() => <News/>} path={'/news'}/>
                        <Route render={() => <Music/>} path={'/music'}/>
                        <Route render={() => <Settings/>} path={'/settings'}/>


                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
