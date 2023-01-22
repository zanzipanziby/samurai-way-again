import React from 'react';
import {connect} from 'react-redux';
import loader from '../../img/loader/loader.svg'

import {ActionType, StateType, UserTypeWithoutServer} from '../../Redux/StateAndActionTypes';
import {
    changeFollowStatusAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC
} from '../../Redux/usersPageReducer';

import axios from 'axios';
import {UsersPresentationComponent} from './UsersPresentationComponent';
import {Loader} from "../Loader/Loader";

export type UsersPropsType = {
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    setUsers: (users: Array<UserTypeWithoutServer>) => void
    changeFollowStatus: (id: number, followStatus: boolean) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void
}

// props.setUsers([
//     {
//         id: v1(),
//         avatar: avatarMisha,
//         fullName: "Misha",
//         status: "I'm the son of a boss",
//         followed: true,
//         location: {
//             city: "Vileyka",
//             country: "Belarus"
//         }
//     },
//     {
//         id: v1(),
//         avatar: avatarVeronika,
//         fullName: "Veronika", status: "I'm the wife of a boss",
//         followed: true,
//         location: {
//             city: "Vileyka",
//             country: "Belarus"
//         }
//     },
//     {
//         id: v1(),
//         avatar: avatarJura,
//         fullName: "Jura", status: "I'm the son of a boss",
//         followed: true,
//         location: {
//             city: "Vileyka",
//             country: "Belarus"
//         }
//     },
//     {
//         id: v1(),
//         avatar: avatarSvetlana,
//         fullName: "Svetlana", status: "I'm the mom of a boss",
//         followed: true,
//         location: {
//             city: "Smilovichi",
//             country: "Belarus"
//         }
//     },
//     {
//         id: v1(),
//         avatar: avatarOzzy,
//         fullName: "Ozzy", status: "I'm rock-man",
//         followed: false,
//         location: {
//             city: "Miami",
//             country: "USA"
//         }
//     },
// ]

export class UsersAPIComponent extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
    }

    setCurrenPageHandler = (page: number) => {

        this.props.setCurrenPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)

            })
    }

    render() {
        return (
            <>
                {this.props.isFetching === true
                    ? <Loader/>
                    :
                    <UsersPresentationComponent
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        setCurrenPageHandler={this.setCurrenPageHandler}
                        changeFollowStatus={this.props.changeFollowStatus}
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
    changeFollowStatus: (id: number, followStatus: boolean) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (value: boolean) => void

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
        },
        toggleIsFetching: (value: boolean) => {
            dispatch(toggleIsFetchingAC(value))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

