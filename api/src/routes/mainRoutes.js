const { Router } = require('express');
const superHeroesRouter = require('./superHeroesRoutes');
const superVillainsRouter = require('./superVillainsRouter');
const supersRouter = require('./supersRouter');


const mainRouter = Router();

mainRouter.use('/superheroes', superHeroesRouter);

mainRouter.use('/supervillains', superVillainsRouter);

mainRouter.use('/supers', supersRouter);


module.exports = mainRouter;