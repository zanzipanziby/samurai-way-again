import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, StateType, UserType, UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";
import {changeFollowStatusAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../Redux/usersPageReducer";
import {UsersClassComponent, UsersPropsType} from "./UsersClassComponent";

type MapStateToPropsType = {
    users: UserTypeWithoutServer[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}
type MapDispatchToPropsType = {
    setUsers: (users: UserTypeWithoutServer[]) => void
    changeFollowStatus: (id: number, followStatus: boolean) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

const mapDispatchToProps = (dispatch: (action: ActionType) => void): MapDispatchToPropsType => {
    return {
        setUsers: (users: UserTypeWithoutServer[]) => {
            dispatch(setUsersAC(users))
        },
        changeFollowStatus: (id: number, followStatus: boolean) => {
            dispatch(changeFollowStatusAC(id, followStatus))
        },
        setCurrenPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)

