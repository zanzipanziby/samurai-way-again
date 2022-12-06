import React from 'react';
import s from './Post.module.css'
import avatar from './../../../../img/avatar/avatar.png'


type PostPropsType = {
    message: string
    likeCount: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src={avatar} alt="post-ava" className={s.postAvatar}/>
            <span>{props.message}</span>

            <div>
                <span>like </span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
};

