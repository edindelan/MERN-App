const express = require('express');
const _ourController = require('./controllers/_our-controller');
const _ticketController = require('./controllers/_ticket-controller');

module.exports = function (app) {
    const ticketRoutes = express.Router();

    //routes will go here
    ticketRoutes.get('/helloworld', _ourController.helloworld);
    ticketRoutes.post('/create', _ticketController.createTicket)
    app.use('/api', ticketRoutes);
}