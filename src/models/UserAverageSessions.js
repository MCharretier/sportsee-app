class UserAverageSessions {
    constructor(data) {
        this._day1 =
            data.sessions.find((session) => session.day === 1)?.sessionLength ||
            0
        this._day2 =
            data.sessions.find((session) => session.day === 2)?.sessionLength ||
            0
        this._day3 =
            data.sessions.find((session) => session.day === 3)?.sessionLength ||
            0
        this._day4 =
            data.sessions.find((session) => session.day === 4)?.sessionLength ||
            0
        this._day5 =
            data.sessions.find((session) => session.day === 5)?.sessionLength ||
            0
        this._day6 =
            data.sessions.find((session) => session.day === 6)?.sessionLength ||
            0
        this._day7 =
            data.sessions.find((session) => session.day === 7)?.sessionLength ||
            0
    }

    get day1() {
        return this._day1
    }

    get day2() {
        return this._day2
    }

    get day3() {
        return this._day3
    }

    get day4() {
        return this._day4
    }

    get day5() {
        return this._day5
    }

    get day6() {
        return this._day6
    }

    get day7() {
        return this._day7
    }
}

export default UserAverageSessions
