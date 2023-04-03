import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../Redux/StateAndActionTypes";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";




type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (newPostText: string) => void

}

type MyPostFormDataType = {
    newPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {
    //---------------- Create RefLink on textarea ---------------------


    //------------ Add Post ----------------
    const addPost = (data:MyPostFormDataType) => {
        props.addPost(data.newPostText)


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
            <MyPostFormRedux onSubmit={addPost}/>
            <ul className={s.postWrapper}>
                {renderPosts}
            </ul>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10)
const MyPostsForm = (props: InjectedFormProps<MyPostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        name={"newPostText"}
                        placeholder={"Enter text"}
                        component={Textarea}
                        validate ={[required, maxLength10]}
                    />
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
        </form>
    );
};



export const MyPostFormRedux = reduxForm<MyPostFormDataType>({form: 'My post form'})(MyPostsForm)

