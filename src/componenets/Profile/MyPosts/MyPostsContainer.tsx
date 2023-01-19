import React from 'react';

import {ActionType, StateType} from "../../../Redux/store";
import {addPostAC, changeNewPostTextInStateAC} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";

import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextInStateAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

