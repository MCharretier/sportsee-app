class UserPerformance {
    constructor(data) {
        this._cardio =
            data.data.find((x) => data.kind[x.kind] === 'cardio')?.value || 0
        this._energy =
            data.data.find((x) => data.kind[x.kind] === 'energy')?.value || 0
        this._endurance =
            data.data.find((x) => data.kind[x.kind] === 'endurance')?.value || 0
        this._strength =
            data.data.find((x) => data.kind[x.kind] === 'strength')?.value || 0
        this._speed =
            data.data.find((x) => data.kind[x.kind] === 'speed')?.value || 0
        this._intensity =
            data.data.find((x) => data.kind[x.kind] === 'intensity')?.value || 0
    }

    get cardio() {
        return this._cardio
    }

    get energy() {
        return this._energy
    }

    get endurance() {
        return this._endurance
    }

    get strength() {
        return this._strength
    }

    get speed() {
        return this._speed
    }

    get intensity() {
        return this._intensity
    }
}

export default UserPerformance
