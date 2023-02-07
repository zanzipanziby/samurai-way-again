import React from 'react';
import {connect} from 'react-redux';
import {StateType, UserTypeWithoutServer} from '../../Redux/StateAndActionTypes';
import {
    toggleFollowingInProgressAC,
    followOnUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowOnUserAC
} from '../../Redux/usersPageReducer';
import {UsersPresentationComponent} from './UsersPresentationComponent';
import {Loader} from "../Loader/Loader";
import {usersAPI} from "../../api/api";

export type UsersAPIComponentPropsType = {
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]


    setUsers: (users: Array<UserTypeWithoutServer>) => void
    followOnUser: (id: number) => void
    unfollowOnUser: (id: number) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
    toggleFollowingInProgress: (value: boolean, userId: number) => void
}


export class UsersAPIComponent extends React.Component <UsersAPIComponentPropsType> {
    constructor(props: UsersAPIComponentPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    setCurrenPageHandler = (page: number) => {

        this.props.setCurrenPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Loader/>
                    :
                    <UsersPresentationComponent
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        followingInProgress={this.props.followingInProgress}
                        setCurrenPageHandler={this.setCurrenPageHandler}
                        followOnUser={this.props.followOnUser}
                        unfollowOnUser={this.props.unfollowOnUser}
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    />
                }
            </>
        )

    }
}


type MapStateToPropsType = {
    users: UserTypeWithoutServer[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]



}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
type MapDispatchToPropsType = {
    setUsers: (users: UserTypeWithoutServer[]) => void
    followOnUser: (id: number) => void
    unfollowOnUser: (id: number) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
    toggleFollowingInProgress: (value: boolean, userId: number) => void

}
const MapDispatchToProps: MapDispatchToPropsType = {
    setUsers: setUsersAC,
    followOnUser: followOnUserAC,
    unfollowOnUser: unfollowOnUserAC,
    setCurrenPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC
}


export const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(UsersAPIComponent)

