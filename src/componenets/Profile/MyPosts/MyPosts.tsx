import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";


type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (message: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPosts = () => {
        if(newPostElement.current){
            const text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }


    const renderPosts = props.posts
        .map(p => <li key={p.id}><Post message={p.message} likesCount={p.likesCount} id={p.id}/></li>)

    return (
        <div className={s.myPostsWrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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

