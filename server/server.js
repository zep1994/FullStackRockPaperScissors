const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));

app.get('/', (req, res) => {
    res.json({message: "hello world"})
})

app.listen(3001)