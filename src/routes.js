const { Router } = require('express');

const routes = Router();

// CONTROLLERS IMPORTS
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// SESSION
routes.post('/sessions', SessionController.create);

// ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

// INCIDENTS
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// PROFILE
routes.get('/profile', ProfileController.index);

module.exports = routes;
