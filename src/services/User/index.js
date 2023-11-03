import {
    USER_INFORMATIONS,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from './mockedData'
import UserInformations from '../../models/UserInformations'
import UserActivity from '../../models/UserActivity'
import UserAverageSessions from '../../models/UserAverageSessions'
import UserPerformance from '../../models/UserPerformance'

const baseURL = 'http://localhost:3000'

const getUserInformations = async (id) => {
    if (typeof jest !== 'undefined') {
        return new UserInformations(USER_INFORMATIONS)
    } else {
        return fetch(`${baseURL}/user/${id}`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserInformations(data))
    }
}

const getUserActivity = async (id) => {
    if (typeof jest !== 'undefined') {
        return new UserActivity(USER_ACTIVITY)
    } else {
        return fetch(`${baseURL}/user/${id}/activity`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserActivity(data))
    }
}

const getUserAverageSessions = async (id) => {
    if (typeof jest !== 'undefined') {
        return new UserAverageSessions(USER_AVERAGE_SESSIONS)
    } else {
        return fetch(`${baseURL}/user/${id}/average-sessions`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserAverageSessions(data))
    }
}

const getUserPerformance = async (id) => {
    if (typeof jest !== 'undefined') {
        return new UserPerformance(USER_PERFORMANCE)
    } else {
        return fetch(`${baseURL}/user/${id}/performance`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserPerformance(data))
    }
}

export {
    getUserInformations,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}
