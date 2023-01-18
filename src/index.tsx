import React from 'react';
import './index.css';
import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./Redux/store";
import {Provider} from "react-redux";
import {MyProvider, StoreContext} from "./StoreContext";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(

        <BrowserRouter>
            {/*<StoreContext.Provider value={store}>*/}
            {/*    <App/>*/}
            {/*</StoreContext.Provider>*/}
            <MyProvider store={store}>
                <App/>
            </MyProvider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))


