const TVService = require('../services/TVService')

class AppController {
    static handleOpenNetflix (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.openNetflix()

        res.send()
    }
}

module.exports = AppController