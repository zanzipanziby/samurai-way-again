import React from 'react';
import banner from "../../img/banner/banner.png";
import avatar from "../../img/avatar/avatar.png";

export const Profile = () => {
    return (
        <div className={"content"}>
            <div>
                <img src={banner} alt="banner" className={"banner"}/>
            </div>
            <div>
                <img src={avatar} alt="avatar" className={"avatar"}/>
            </div>

            <div>
                my posts
            </div>
            <div>
                new post
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    );
};

