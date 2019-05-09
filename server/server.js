const express = require('express')
const morgan = require('morgan')


const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json({message: "hello world"})
})

app.listen(3000)