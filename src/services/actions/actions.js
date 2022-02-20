import {FETCH_USERS} from '../constant'

export const fetchUser = (users) => {
    return {
        type: FETCH_USERS,
        payload: users,
    }
}