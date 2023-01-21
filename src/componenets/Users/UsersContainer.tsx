import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, StateType, UserType, UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";
import {changeFollowStatusAC, setUsersAC} from "../../Redux/usersPageReducer";
import {UsersClassComponent} from "./UsersClassComponent";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        setUsers: (users: UserTypeWithoutServer[]) => {
            dispatch(setUsersAC(users))
        },
        changeFollowStatus: (id: number, followStatus: boolean) =>{
            dispatch(changeFollowStatusAC(id,followStatus))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)

