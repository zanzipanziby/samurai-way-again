import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postsData = [
        {id: "1", message: "Hello World", likesCount: 13},
        {id: "2", message: "It's my first application", likesCount: 34},
    ]

    const renderPosts = postsData.map(p => <li key={p.id}><Post message={p.message} likesCount={p.likesCount} id={p.id}/></li>)

    return (
        <div className={s.myPostsWrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <ul className={s.postWrapper}>
                {renderPosts}
            </ul>

        </div>
    );
};

