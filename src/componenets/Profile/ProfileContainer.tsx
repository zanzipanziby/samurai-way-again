import React, {ReactComponentElement} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../Redux/StateAndActionTypes";
import {getUserProfileTC} from "../../Redux/profilePageReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileAPIComponentPropsType =
    RouteComponentProps<any>
    & MapStateToPropsType
    & MapDispatchToPropsType

class ProfileAPIComponent extends React.Component<ProfileAPIComponentPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


type MapStateToPropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: StateType): MapStateToPropsType => (
    {
        profile: state.profilePage.profile,
    }
)

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}
const MapDispatchToProps: MapDispatchToPropsType = {
    getUserProfileTC: getUserProfileTC
}


export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileAPIComponent)