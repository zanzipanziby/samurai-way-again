import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType, ProfilePageType} from "../../Redux/State";


type ProfilePropsType = {
    state: ProfilePageType
    addPost: ()=> void
    updateNewPostText:(newText: string) => void
}



export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

