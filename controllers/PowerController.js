const RequestHandler = require('./RequestHandler')
const TVService = require('../services/TVService')

class PowerController extends RequestHandler {
    static handleOff (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.togglePower(false)
            .then((response) => {
                res.send(response);
            })
    }

    static handleOn (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.togglePower(true)
            .then((response) => {
                res.send(response)
            })
    }

    static handleError (req, res) {
        

        tv.showMessage('Hey there, it works!')
    }
}

module.exports = PowerController