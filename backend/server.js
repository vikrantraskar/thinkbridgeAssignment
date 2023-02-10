const express = require('express')
const db = require('./db')

const utility = require('./utils')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const userRouter = require('./routes/products')



app.use('/products', userRouter)


app.listen(5000, '0.0.0.0', ()=>{
    console.log('server started at 5000')
})