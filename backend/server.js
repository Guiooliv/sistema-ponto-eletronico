const express = require ('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/ping', (req,res) => {
    res.json('pong')
}) 

app.use('/api', authRoutes)

app.listen (port, () => {
    console.log(`servidor rodadando em http://localhost:${port}/ping`)
})