const express = require('express')
const app = express()
const router = express.Router();

const PowerController = require('./controllers/PowerController')
const ErrorController = require('./controllers/ErrorController')
const AppController = require('./controllers/AppController')
const VolumeController = require('./controllers/VolumeController')
 
router.get('/power', PowerController.handleError)
router.get('/power/on', PowerController.handleOn)
router.get('/power/off', PowerController.handleOff)

router.get('/volume', VolumeController.handleError)
router.get('/mute/on', VolumeController.handleActivateMute)
router.get('/mute/off', VolumeController.handleDeactivateMute)
router.get('/volume/:level', VolumeController.handleSetLevel)

router.get('/apps/netflix', AppController.handleOpenNetflix)

router.get('*', ErrorController.handle)

app.use(router)
app.listen(80, '0.0.0.0')