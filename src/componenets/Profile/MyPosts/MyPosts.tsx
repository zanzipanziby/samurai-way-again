import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../Redux/StateAndActionTypes";




type MyPostsPropsType = {
    posts: PostsDataType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void

}


export const MyPosts = (props: MyPostsPropsType) => {
    //---------------- Create RefLink on textarea ---------------------


    //------------ Add Post ----------------
    const addPost = () => {
        props.addPost()


    }

    //--------------- Add new text for new post -------------------
    const changeNewPostTextInState = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }


    const renderPosts = props.posts
        .map(p => <li key={p.id}>
            <Post message={p.message} likesCount={p.likesCount} id={p.id}/>
        </li>)

    return (
        <div className={s.myPostsWrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={changeNewPostTextInState}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <ul className={s.postWrapper}>
                {renderPosts}
            </ul>
        </div>
    );
};

