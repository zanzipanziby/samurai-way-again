import s from "./ProfileInfo.module.css";
import banner from "../../../img/banner/banner.png";
import avatar from "../../../img/avatar/avatar.png";
import React from "react";
import {ProfileType} from "../../../Redux/StateAndActionTypes";


type ProfileInfoType = {
    profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={banner} alt="banner" className={s.banner}/>
            </div>
            <div className={s.descriptionWrapper}>
                <div>
                    <img src={props.profile.photos.large} alt="avatar" className={s.avatar}/>
                </div>
                <div>
                    <ul>
                        <li>{props.profile.aboutMe}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}