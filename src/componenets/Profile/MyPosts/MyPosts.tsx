import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, PostsDataType, ProfilePageType} from "../../../Redux/State";


type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action:ActionType)=> void
}

export const MyPosts = (props: MyPostsPropsType) => {
    //---------------- Create RefLink on textarea ---------------------
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    //------------ Add Post ----------------
    const addPosts = () => {
        props.dispatch({type:"ADD_POST"})

    }

    //--------------- Add new text for new post -------------------
    const ChangeNewPostTextInState = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch({type:"UPDATE_NEW_POST_TEXT", text: text})

        }
    }


    const renderPosts = props.state.posts
        .map(p => <li key={p.id}><Post message={p.message} likesCount={p.likesCount} id={p.id}/></li>)

    return (
        <div className={s.myPostsWrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.state.newPostText}
                        onChange={ChangeNewPostTextInState}
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

