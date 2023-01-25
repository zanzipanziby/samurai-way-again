import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "00d10ed1-05f4-4d22-abb0-efc43f6a26ee"
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
    checkedAuth(id: number) {
        return (
            instance.get(`profile/${id}`)
                .then(res => res.data)
        )
    }
}


