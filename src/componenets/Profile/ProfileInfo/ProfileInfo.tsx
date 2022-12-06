import s from "./ProfileInfo.module.css";
import banner from "../../../img/banner/banner.png";
import avatar from "../../../img/avatar/avatar.png";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={banner} alt="banner" className={s.banner}/>
            </div>
            <div className={s.descriptionWrapper}>
                <div>
                    <img src={avatar} alt="avatar" className={s.avatar}/>
                </div>
                <div>
                    description
                </div>
            </div>
        </div>
    )
}