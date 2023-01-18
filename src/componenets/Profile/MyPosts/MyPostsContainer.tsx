import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, ProfilePageType} from "../../../Redux/store";
import {addPostAC, changeNewPostTextInStateAC} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../Redux/redux-store";



type MyPostsPropsType = {
    store: ReduxStoreType
}





export const MyPostsContainer = (props: MyPostsPropsType) => {
    const state = props.store.getState()
    const dispatch = props.store.dispatch
    //---------------- Create RefLink on textarea ---------------------


    //------------ Add Post ----------------
    const addPosts = () => {

        dispatch(addPostAC())

    }

    //--------------- Add new text for new post -------------------
    const changeNewPostTextInState = (text: string) => {
            dispatch(changeNewPostTextInStateAC(text))
    }



    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPosts}
            updateNewPostText={changeNewPostTextInState}/>
    );
};

