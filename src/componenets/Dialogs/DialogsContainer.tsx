import React from 'react';
import { sendMessageAC} from "../../Redux/messagePageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../Redux/StateAndActionTypes";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

