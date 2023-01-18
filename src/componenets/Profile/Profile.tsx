import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsDataType, ProfilePageType} from "../../Redux/store";


type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType)=> void
}



export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
};

