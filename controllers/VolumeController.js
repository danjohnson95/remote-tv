const TVService = require('../services/TVService')

class VolumeController {
    static handleError (req, res) {
        res.send('Volume error')
    }

    static handleSetLevel (req, res, level) {
        const tv = new TVService('192.168.0.23')

        tv.setVolume(level).then((response) => {
            res.send(response)
        })
        .catch((error) => {
            res.send(error)
        })
    }

    static handleActivateMute (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.toggleMute(true).then(() => {
            res.send('muted')
        })
    }

    static handleDeactivateMute (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.toggleMute(false).then(() => {
            res.send('unmuted')
        })
    }
}

module.exports = VolumeController