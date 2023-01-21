import React, {ReactNode, useEffect} from 'react';
import {UserType, UserTypeWithoutServer} from "../../Redux/StateAndActionTypes";
import s from './Users.module.css'
import avatarMisha from "../../img/avatar/usersAvatar/1644932113_1-kartinkin-net-p-boss-molokosos-kartinki-1.png";
import avatarVeronika from "../../img/avatar/usersAvatar/Veronika.png";
import avatarJura from "../../img/avatar/usersAvatar/Jura.png";
import avatarSvetlana
    from "../../img/avatar/usersAvatar/png-transparent-computer-icons-woman-avatar-woman-people-woman-user.png";
import avatarOzzy from "../../img/avatar/usersAvatar/ozzy.png";
import {v1} from "uuid";
import axios from "axios";
import {findAllByDisplayValue} from "@testing-library/react";


type UsersPropsType = {
    users: Array<UserTypeWithoutServer>
    setUsers: (users: Array<UserTypeWithoutServer>) => void
    changeFollowStatus: (id: number, followStatus: boolean) => void
}

export class UsersClassComponent extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        alert('ComponentBorn')

    }

    componentDidMount() {
        alert('componentMount')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
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
            })
    }


    render() {
        let usersRender = this.props.users
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
                <ul>
                    {usersRender}
                </ul>
            </div>
        );
    }
}