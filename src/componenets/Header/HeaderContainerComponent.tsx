import React from 'react';
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {AuthType, StateType} from "../../Redux/StateAndActionTypes";


type HeaderContainerComponentType = {
    setUserData: (data: AuthType) => void
    isAuth: boolean
    login: string | null
}
class HeaderContainerComponent extends React.Component<HeaderContainerComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                res.data.resultCode === 0 &&
                    this.props.setUserData(res.data.data)


            } )
    }

    render() {

        return (
         <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state:StateType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)


export default connect(mapStateToProps,{setUserData: setAuthUserDataAC})(HeaderContainerComponent)


