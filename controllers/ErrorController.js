const RequestHandler = require('./RequestHandler')

class ErrorController extends RequestHandler {
    static handle (req, res) {
        res.send('Error!!!')
    }
}

module.exports = ErrorController