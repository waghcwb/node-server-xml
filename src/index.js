const express  = require('express')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)

app.use(cors())

app.use(require('./routes'))

server.listen(3333)