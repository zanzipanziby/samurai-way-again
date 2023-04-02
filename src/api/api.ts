import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "e4ef45f4-a82b-4eac-8c32-94376658e62c"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, count: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${count}`)
                .then(res => res.data)
        )
    }
}

export const followingAPI = {
    follow(id: number) {
        return (
            instance.post(`follow/${id}`)
                .then(res => res.data)
        )
    },
    unfollow(id: number) {
        return (
            instance.delete(`follow/${id}`)
                .then(res => res.data)
        )
    }

}

export const authAPI = {
    getUserProfile(id: number) {
        return (
            instance.get(`profile/${id}`)
                .then(res => res.data)
        )
    },
    auth() {
        return (
            instance.get('auth/me')
                .then(res=> res.data)
        )
    }

}


