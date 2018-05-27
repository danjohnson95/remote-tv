const RequestHandler = require('./RequestHandler')
const TVService = require('../services/TVService')

class PowerController extends RequestHandler {
    static handleOff (req, res) {
        const tv = new TVService('192.168.0.23')

        tv.togglePower(false)

        res.send();
    }

    static handleOn (req, res) {

    }

    static handleError (req, res) {
        

        tv.showMessage('Hey there, it works!')
    }
}

module.exports = PowerController