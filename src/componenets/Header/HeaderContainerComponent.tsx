import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/StateAndActionTypes";



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


