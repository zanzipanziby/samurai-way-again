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
    unfollowOnUserAC, getUsersTC, followTC, unfollowTC
} from '../../Redux/usersPageReducer';
import {UsersPresentationComponent} from './UsersPresentationComponent';
import {Loader} from "../Loader/Loader";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";


export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component <UsersAPIComponentPropsType> {
    constructor(props: UsersAPIComponentPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    setCurrenPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
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


export const UsersContainer = withAuthRedirect(connect(mapStateToProps, MapDispatchToProps)(UsersAPIComponent))

