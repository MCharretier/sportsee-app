class UserActivity {
    constructor(data) {
        this._sessions = data.sessions.map((session) => {
            return {
                day: session.day,
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
