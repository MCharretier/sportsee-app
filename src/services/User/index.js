import userInformations from '../../__mocks__/user/informations.json'
import userActivity from '../../__mocks__/user/activity.json'
import userAverageSessions from '../../__mocks__/user/averageSessions.json'
import userPerformance from '../../__mocks__/user/performance.json'

import UserInformations from '../../models/UserInformations'
import UserActivity from '../../models/UserActivity'
import UserAverageSessions from '../../models/UserAverageSessions'
import UserPerformance from '../../models/UserPerformance'

const baseURL = 'http://localhost:3000'

const getUserInformations = async (id) => {
    if (process.env.REACT_APP_ENV === 'test') {
        const informations = userInformations.filter(
            (user) => user.id === parseInt(id)
        )
        if (informations.length === 1) {
            return new UserInformations(informations[0])
        }
        return {}
    } else {
        return fetch(`${baseURL}/user/${id}`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserInformations(data))
    }
}

const getUserActivity = async (id) => {
    if (process.env.NODE_ENV === 'test') {
        const activity = userActivity.filter((user) => user.id === parseInt(id))
        if (activity.length === 1) {
            return new UserActivity(activity[0])
        }
        return {}
    } else {
        return fetch(`${baseURL}/user/${id}/activity`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserActivity(data))
    }
}

const getUserAverageSessions = async (id) => {
    if (process.env.NODE_ENV === 'test') {
        const averageSessions = userAverageSessions.filter(
            (user) => user.id === parseInt(id)
        )
        if (averageSessions.length === 1) {
            return new UserAverageSessions(averageSessions[0])
        }
        return {}
    } else {
        return fetch(`${baseURL}/user/${id}/average-sessions`)
            .then((response) => response.json())
            .then((json) => json.data)
            .then((data) => new UserAverageSessions(data))
    }
}

const getUserPerformance = async (id) => {
    if (process.env.NODE_ENV === 'test') {
        const performance = userPerformance.filter(
            (user) => user.id === parseInt(id)
        )
        if (performance.length === 1) {
            return new UserPerformance(performance[0])
        }
        return {}
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
