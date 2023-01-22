import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, StateType} from "../../Redux/StateAndActionTypes";
import {setUserProfileAC} from "../../Redux/profilePageReducer";


type ProfileAPIComponentPropsType = {
    profile: ProfileType
    setUserProfile: (value: any)=> void
}

class ProfileAPIComponent extends React.Component<ProfileAPIComponentPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/15`)
            .then(res=>{
                this.props.setUserProfile(res.data)
            })
    }

    render(){
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}
const mapStateToProps = (state: StateType) => (
    {
        profile: state.profilePage.profile
    }
)
export const ProfileContainer = connect(mapStateToProps,
    {
    setUserProfile: setUserProfileAC
})(ProfileAPIComponent)