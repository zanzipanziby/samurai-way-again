import React from 'react';
import './index.css';
import {state} from "./Redux/State";
import {rerenderEntireTree} from "./Render";



rerenderEntireTree(state)


