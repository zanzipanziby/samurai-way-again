import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, ProfilePageType} from "../../../Redux/store";
import {addPostAC, changeNewPostTextInStateAC} from "../../../Redux/profilePageReducer";



type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}





export const MyPosts = (props: MyPostsPropsType) => {
    //---------------- Create RefLink on textarea ---------------------


    //------------ Add Post ----------------
    const addPosts = () => {
        props.dispatch(addPostAC())

    }

    //--------------- Add new text for new post -------------------
    const changeNewPostTextInState = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(changeNewPostTextInStateAC(e.currentTarget.value))
    }


    const renderPosts = props.state.posts
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
                        value={props.state.newPostText}
                        onChange={changeNewPostTextInState}
                    />
                </div>
                <div>
                    <button onClick={addPosts}>add post</button>
                </div>
            </div>
            <ul className={s.postWrapper}>
                {renderPosts}
            </ul>
        </div>
    );
};

