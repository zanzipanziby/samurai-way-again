import React from 'react';
import {connect} from 'react-redux';
import {RootStateType, UserTypeWithoutServer} from '../../Redux/StateAndActionTypes';
import {
    toggleFollowingInProgressAC,
    followOnUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowOnUserAC, getUsersTC, followTC, unfollowTC
} from '../../Redux/usersPageReducer';
import {UsersPresentationComponent} from './UsersPresentationComponent';
import {Loader} from "../common/Loader/Loader";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";


export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component <UsersAPIComponentPropsType> {
    constructor(props: UsersAPIComponentPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    setCurrenPageHandler = (page: number) => {
        // this.props.setCurrentPage(page) -------  Realising in userPageReducer  138 line
        this.props.getUsersTC(page, this.props.pageSize)


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
                        followTC={this.props.followTC}
                        unfollowTC={this.props.unfollowTC}
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
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}
type MapDispatchToPropsType = {
    setUsers: (users: UserTypeWithoutServer[]) => void
    followOnUser: (id: number) => void
    unfollowOnUser: (id: number) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
    toggleFollowingInProgress: (value: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void

}
const MapDispatchToProps: MapDispatchToPropsType = {
    setUsers: setUsersAC,
    followOnUser: followOnUserAC,
    unfollowOnUser: unfollowOnUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsersTC: getUsersTC,
    followTC: followTC,
    unfollowTC: unfollowTC
}


export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(UsersAPIComponent)

