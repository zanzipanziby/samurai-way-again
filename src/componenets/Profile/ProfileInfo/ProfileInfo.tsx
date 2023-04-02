import s from "./ProfileInfo.module.css";
import banner from "../../../img/banner/banner.png";
import React from "react";
import {ProfileType} from "../../../Redux/StateAndActionTypes";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType | null
    status: string,
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={banner} alt="banner" className={s.banner}/>
            </div>
            <div className={s.descriptionWrapper}>
                <div>
                    <img src={props.profile?.photos.large} alt="avatar" className={s.avatar}/>
                </div>
                <div>{props.profile?.aboutMe}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}