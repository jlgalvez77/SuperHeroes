const { Router } = require('express');
const { getUsersHandler, getDetailHandler, createUserHandler } = require('../handlers/usersHandler');
const { createUser } = require('../handlers/userHandler');
const userRouter = Router();


userRouter.get('/', getUsersHandler);

userRouter.get('/:id', getDetailHandler);

userRouter.post('/', createUserHandler);

module.exports = userRouter;