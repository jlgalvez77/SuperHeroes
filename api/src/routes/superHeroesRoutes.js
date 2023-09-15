const { Router } = require('express');
const { getSuperHeroesHandler, getSuperHeroHandler } = require('../handlers/superHeroesHandler');
const superHeroesRouter = Router();

superHeroesRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Super Heroes' });
});

superHeroesRouter.get('/:id', (req, res) => {
    res.status(200).json({ message: 'Super Hero' });
});

module.exports = superHeroesRouter;