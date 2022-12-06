import React from 'react';
import banner from "./../../img/banner/banner.png";
import avatar from "./../../img/avatar/avatar.png";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={banner} alt="banner" className={s.banner}/>
            </div>
            <div>
                <img src={avatar} alt="avatar" className={s.avatar}/>
            </div>
            <div>
                description
            </div>
            <MyPosts/>
        </div>
    );
};

