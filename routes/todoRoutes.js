const express = require('express');
const todoRouter = express.Router();

todoRouter.get('/', (req,res)=>{
    res.send('Get todos')
})


todoRouter.post('/', (req,res)=>{
    res.send('post todos')
})


module.exports = todoRouter;