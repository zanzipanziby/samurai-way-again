import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, StateType, UserType} from "../../Redux/StateAndActionTypes";
import {changeFollowStatusAC, setUsersAC} from "../../Redux/usersPageReducer";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        changeFollowStatus: (id: string, followStatus: boolean) =>{
            dispatch(changeFollowStatusAC(id,followStatus))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

