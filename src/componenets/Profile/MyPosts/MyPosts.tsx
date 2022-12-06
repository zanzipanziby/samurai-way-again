import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myPostsWrapper}>
            <div>
                My posts
            </div>
            <div>
                <textarea/>
                <button>add post</button>
            </div>
            <Post likeCount={13} message={"Hello World"}/>
            <Post likeCount={34} message={"It's my first application"}/>

        </div>
    );
};

