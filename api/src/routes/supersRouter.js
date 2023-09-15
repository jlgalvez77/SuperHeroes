const { Router } = require('express');
const { getSupersHandler, getDetailHandler } = require('../handlers/supersHandler');
const supersRouter = Router();

supersRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Supers' });
});

supersRouter.get('/:id', (req, res) => {
    res.status(200).json({ message: 'Super' });
});

module.exports = supersRouter;