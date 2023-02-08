import React from 'react';
import s from "./Users.module.css";
import avatarJura from "../../img/avatar/usersAvatar/Jura.png";
import {UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";
import {NavLink} from "react-router-dom";



type UsersPresentationComponentPropsType = {
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    setCurrenPageHandler: (page: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}

export const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }


    // const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    // console.log(this.props.totalUsersCount)
    // const pages = []
    // for (let i = 1; i <= 15; i++) {
    //     pages.push(i)
    // }

    const pagesRender = slicedPages.map(p => {
        return (
            <li
                key={p}
                className={props.currentPage === p ? s.selectedPage : s.page}
                onClick={() => props.setCurrenPageHandler(p)}
            >
                {p}
            </li>
        )
    })

    const usersRender = props.users

        .map(u => {
            return (
                <li key={u.id} className={s.user}>
                    <div className={s.avatarAndButtonContainer}>
                        <div className={s.avatarContainer}>
                            <NavLink to={`profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : avatarJura} alt={u.name}/>
                            </NavLink>
                        </div>
                        <div>
                            {!u.followed
                                ? <button
                                    className={s.followButton}
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        // props.toggleFollowingInProgress(true, u.id)
                                        // followingAPI.follow(u.id)
                                        //     .then(data => data.resultCode === 0 && props.followOnUser(u.id) && console.log(data))
                                        //     .finally(() => props.toggleFollowingInProgress(false, u.id))
                                        props.followTC(u.id)
                                    }}>
                                    Follow
                                </button>

                                : <button
                                    className={s.followButton}
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        // props.toggleFollowingInProgress(true, u.id)
                                        // followingAPI.unfollow(u.id)
                                        //     .then(data => data.resultCode === 0 && props.unfollowOnUser(u.id) && console.log(data))
                                        //     .finally(() => props.toggleFollowingInProgress(false, u.id))

                                        props.unfollowTC(u.id)
                                    }}>
                                    Unfollow
                                </button>
                            }

                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <div className={s.nameAndStatusContainer}>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.locationContainer}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </li>
            )
        })

    return (
        <div>
            <h3 className={s.title}>Users</h3>
            <ul className={s.paginationList}>
                {pagesRender}
            </ul>
            <ul>
                {usersRender}
            </ul>
        </div>
    );
};

