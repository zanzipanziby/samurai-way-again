import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, addPostAC, changeNewPostTextInStateAC, ProfilePageType} from "../../../Redux/State";


type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}





export const MyPosts = (props: MyPostsPropsType) => {
    //---------------- Create RefLink on textarea ---------------------
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    //------------ Add Post ----------------
    const addPosts = () => {
        props.dispatch(addPostAC())

    }

    //--------------- Add new text for new post -------------------
    const changeNewPostTextInState = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(changeNewPostTextInStateAC(text))

        }
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
                        ref={newPostElement}
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

