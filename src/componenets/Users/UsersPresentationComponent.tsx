import React from 'react';
import s from "./Users.module.css";
import avatarJura from "../../img/avatar/usersAvatar/Jura.png";
import {UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";


type UsersPresentationComponentPropsType = {
    users:Array<UserTypeWithoutServer>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrenPageHandler: (page: number) => void
    changeFollowStatus: (id: number, followStatus: boolean) => void
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
                                onClick={() => props.changeFollowStatus(u.id, !u.followed)}
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
};

