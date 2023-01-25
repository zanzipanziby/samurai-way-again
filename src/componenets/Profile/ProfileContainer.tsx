import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ActionType, ProfileType, StateType} from "../../Redux/StateAndActionTypes";
import {setUserProfileAC} from "../../Redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authAPI} from "../../api/api";


type ProfileAPIComponentPropsType =
    RouteComponentProps<any>
    & MapStateToPropsType
    & MapDispatchToPropsType

class ProfileAPIComponent extends React.Component<ProfileAPIComponentPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        authAPI.checkedAuth(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })

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
        profile: state.profilePage.profile
    }
)

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
const MapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile: setUserProfileAC
}


let WithURLDataContainerComponent = withRouter(ProfileAPIComponent)
export const ProfileContainer = connect(mapStateToProps, MapDispatchToProps)(WithURLDataContainerComponent)