const express = require('express')
const app = express()
const PORT = process.env.PORT 

const ConnectDB = require('./helpers/ConnectDB')

//connect to DB
ConnectDB();

//middelware
app.use(express.json());

//define Routes
app.use('/register',require('./router/register'))
app.use('/login',require('./router/login'))
app.use('/post',require('./router/post'))
app.use('/profile',require('./router/profile'))
app.use('/comment' , require('./router/comment'))
app.use('/message' , require('./router/message'))

app.listen(process.env.PORT, ()=>
    console.log(`server in running on port: ${process.env.PORT}`)
)
