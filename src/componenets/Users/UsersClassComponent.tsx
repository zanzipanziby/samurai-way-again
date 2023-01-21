import React from 'react';
import {UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";
import s from './Users.module.css'

import avatarJura from "../../img/avatar/usersAvatar/Jura.png";

import axios from "axios";
import {log} from "util";


export type UsersPropsType = {
    users: Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setUsers: (users: Array<UserTypeWithoutServer>) => void
    changeFollowStatus: (id: number, followStatus: boolean) => void
    setCurrenPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
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

export class UsersClassComponent extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
    }

    setCurrenPageHandler = (page: number) => {
        this.props.setCurrenPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)

            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        let slicedPages;
        let curPage = this.props.currentPage;
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
                    className={this.props.currentPage === p ? s.selectedPage : s.page}
                    onClick={() => this.setCurrenPageHandler(p)}
                >
                    {p}
                </li>
            )
        })

        const usersRender = this.props.users
            .map(u => {
                return (
                    // <li key={u.id} className={s.user}>
                    //     <div className={s.avatarAndButtonContainer}>
                    //         <div className={s.avatarContainer}>
                    //             <img src= {u.avatar} alt={u.fullName}/>
                    //         </div>
                    //         <div>
                    //             <button
                    //                 className={s.followButton}
                    //                 onClick={()=>props.changeFollowStatus(u.id, !u.followed)}
                    //             >
                    //                 {u.followed ? 'Unfollow' : 'Follow'}
                    //             </button>
                    //         </div>
                    //     </div>
                    //     <div className={s.infoContainer}>
                    //         <div className={s.nameAndStatusContainer}>
                    //             <div className={s.name}>{u.fullName}</div>
                    //             <div className={s.status}>{u.status}</div>
                    //         </div>
                    //         <div className={s.locationContainer}>
                    //                 <div>{u.location.country}</div>
                    //                 <div>{u.location.city}</div>
                    //         </div>
                    //     </div>
                    // </li>
                    <li key={u.id} className={s.user}>
                        <div className={s.avatarAndButtonContainer}>
                            <div className={s.avatarContainer}>
                                <img src={u.photos.small ? u.photos.small : avatarJura} alt={u.name}/>
                            </div>
                            <div>
                                <button
                                    className={s.followButton}
                                    onClick={() => this.props.changeFollowStatus(u.id, !u.followed)}
                                >
                                    {u.followed ? 'Unfollow' : 'Follow'}
                                </button>
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
    }
}