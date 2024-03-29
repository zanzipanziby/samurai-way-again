import React from 'react';
import './App.css';
import {Header} from "./componenets/Header/Header";
import {NavBar} from "./componenets/Nav/NavBar";
import {Profile} from "./componenets/Profile/Profile";
import {Route, withRouter} from "react-router-dom";
import {News} from "./componenets/News/News";
import {Music} from "./componenets/Music/Music";
import {Settings} from "./componenets/Settings/Settings";
import {DialogsContainer} from "./componenets/Dialogs/DialogsContainer";
import {UsersContainer} from "./componenets/Users/UsersContainer";
import {ProfileContainer} from "./componenets/Profile/ProfileContainer";
import HeaderContainerComponent from "./componenets/Header/HeaderContainerComponent";
import {ConnectedLogin} from "./componenets/Login/Login";
import {connect} from "react-redux";
import {authTC} from "./Redux/authReducer";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {RootStateType} from "./Redux/StateAndActionTypes";
import {Loader} from "./componenets/common/Loader/Loader";

type AppPropsType = {
    isInitialized:boolean
    initializeAppTC: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.isInitialized) return <Loader/>
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
                        <Route render={() => <ConnectedLogin/>} path={'/login'}/>

                    </div>
                </div>
            </div>

        );
    }
}




const mapStateToProps = (state: RootStateType) => ({
    isInitialized: state.app.isInitialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC: initializeAppTC,})
)(App);
