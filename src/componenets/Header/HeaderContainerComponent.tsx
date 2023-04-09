import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authLogoutTC, authTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/StateAndActionTypes";



type HeaderContainerComponentType = {
    isAuth: boolean
    login: string | null
    authLogoutTC: () => void
}

class HeaderContainerComponent extends React.Component<HeaderContainerComponentType> {
    render() {

        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} authLogoutTC={this.props.authLogoutTC}/>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)


export default connect(mapStateToProps, { authLogoutTC: authLogoutTC})(HeaderContainerComponent)


