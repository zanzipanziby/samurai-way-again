import React, {ReactComponentElement} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../Redux/StateAndActionTypes";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../Redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
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
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)


    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        )
    }
}


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
}
const mapStateToProps = (state: StateType): MapStateToPropsType => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
)

type MapDispatchToPropsType = {

    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}
const MapDispatchToProps: MapDispatchToPropsType = {
    getUserProfileTC: getUserProfileTC,
    getUserStatusTC: getUserStatusTC,
    updateStatusTC: updateUserStatusTC
}


export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, MapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileAPIComponent)