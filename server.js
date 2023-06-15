const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes')
const todoRouter = require('./routes/todoRoutes')
//database connection
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sahil:mongopass@cluster0.qvrhn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3000, () => {
        console.log("server started at 3000")
    })
})
.catch((err)=> {
    console.log(err);
})


app.use('/users', userRouter);
app.use('/todos', todoRouter);
app.use(express.json());



app.get('/', (req,res) =>{
  res.send('<h1>hello</h1>'); 
})