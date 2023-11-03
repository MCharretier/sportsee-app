class UserInformations {
    constructor(data) {
        this._firstname = data.userInfos.firstName
        this._calorieCount = data.keyData.calorieCount
        this._proteinCount = data.keyData.proteinCount
        this._carbohydrateCount = data.keyData.carbohydrateCount
        this._lipidCount = data.keyData.lipidCount
        this._score = data.todayScore || data.score
    }

    get firstName() {
        return this._firstname
    }

    get calorieCount() {
        return this._calorieCount
    }

    get proteinCount() {
        return this._proteinCount
    }

    get carbohydrateCount() {
        return this._carbohydrateCount
    }

    get lipidCount() {
        return this._lipidCount
    }

    get score() {
        return this._score
    }
}

export default UserInformations
