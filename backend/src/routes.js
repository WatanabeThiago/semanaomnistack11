const express = require('express')
const crypto = require('crypto')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')



const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index)

routes.get('/profile', ProfileController.index)


routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes