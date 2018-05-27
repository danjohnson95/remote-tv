const lgtv = require('lgtv')

class TVService {
    constructor (ipAddress) {
        this.ipAddress = ipAddress
    }

    connect () {
        return new Promise((resolve, reject) => {
            lgtv.connect(this.ipAddress, function (err, response) {
                if (err) {
                    return reject(err)
                }

                return resolve(response)
            })
        })
    }

    togglePower (state) {
        if (state) {
            // WOL
        }

        return new Promise((resolve, reject) => {
            this.connect().then(() => {
                lgtv.power_off(function(err, response) {
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })
            })
        })
    }

    showMessage (message) {
        return new Promise((resolve, reject) => {
            return this.connect().then(() => {
                lgtv.show_float(message, function(err, response) {
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })
            })
        })
    }

    setVolume (volume) {
        return new Promise((resolve, reject) => {
            return this.connect().then(() => {
                lgtv.set_volume(volume, function(err, response) {
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })
            })
        })
    }

    toggleMute (state) {
        return new Promise((resolve, reject) => {
            return this.connect().then(() => {
                lgtv.set_mute(state, function(err, response) {
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })
            })
        })
    }

    openNetflix () {
        return new Promise((resolve, reject) => {
            return this.connect().then(() => {
                lgtv.start_app("netflix", function(err, response){
                    if (err) {
                        return reject(err)
                    }

                    return resolve(response)
                })
            })
        })
    }
}

module.exports = TVService