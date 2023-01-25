import React from 'react';
import {connect} from 'react-redux';
import {StateType, UserTypeWithoutServer} from '../../Redux/StateAndActionTypes';
import {
    followOnUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC, unfollowOnUserAC
} from '../../Redux/usersPageReducer';
import {UsersPresentationComponent} from './UsersPresentationComponent';
import {Loader} from "../Loader/Loader";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    setUsers: (users: Array<UserTypeWithoutServer>) => void
    followOnUser: (id: number) => void
    unfollowOnUser: (id: number) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
}


export class UsersAPIComponent extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
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
                        setCurrenPageHandler={this.setCurrenPageHandler}
                        followOnUser={this.props.followOnUser}
                        unfollowOnUser={this.props.unfollowOnUser}
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


}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
type MapDispatchToPropsType = {
    setUsers: (users: UserTypeWithoutServer[]) => void
    followOnUser: (id: number) => void
    unfollowOnUser: (id: number) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void

}
const MapDispatchToProps: MapDispatchToPropsType = {
    setUsers: setUsersAC,
    followOnUser: followOnUserAC,
    unfollowOnUser: unfollowOnUserAC,
    setCurrenPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
}


export const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(UsersAPIComponent)

