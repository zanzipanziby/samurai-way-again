import React from 'react';
import './index.css';
import {store} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
    ;
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


