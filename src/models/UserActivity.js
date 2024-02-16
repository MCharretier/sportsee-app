const getDay = (date) => {
    const splitDate = date.split('-')
    const day = splitDate[2]
    return parseInt(day)
}

class UserActivity {
    constructor(data) {
        this._sessions = data.sessions.map((session) => {
            return {
                day: getDay(session.day),
                kilogram: session.kilogram,
                calories: session.calories,
            }
        })
    }

    get sessions() {
        return this._sessions
    }
}

export default UserActivity
