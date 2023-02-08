import React from 'react';
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC, setAuthUserDataAC} from "../../Redux/authReducer";
import {AuthType, StateType} from "../../Redux/StateAndActionTypes";
import {authAPI} from "../../api/api";


type HeaderContainerComponentType = {
    isAuth: boolean
    login: string | null

    authTC: () => void
}

class HeaderContainerComponent extends React.Component<HeaderContainerComponentType> {
    componentDidMount() {
       this.props.authTC()
    }

    render() {

        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)


export default connect(mapStateToProps, {authTC: authTC})(HeaderContainerComponent)


