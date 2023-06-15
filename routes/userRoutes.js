const express = require('express');
const { signup, signin } = require('../utils/userUtils');
const userModel = require('../models/user.js');
const userRouter = express.Router();

userRouter.post('/signup', signup)


userRouter.post('/signin', signin)


module.exports = userRouter;