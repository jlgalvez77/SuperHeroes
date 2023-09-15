const { Router } = require('express');
const { getSuperVillainsHandler, getSuperVillainDetailHandler } = require('../handlers/superVillainsHandler');
const superVillainsRouter = Router();

superVillainsRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Super Villains' });
});

superVillainsRouter.get('/:id', (req, res) => {
    res.status(200).json({ message: 'Super Villain' });
});

module.exports = superVillainsRouter;