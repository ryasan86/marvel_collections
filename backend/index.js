const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')

const app = express()
const port = 5000

dotenv.config({ path: '.env' })
const createServer = require('./src/createServer.js')
const server = createServer()

server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser())

server.get('/', (req, res) => {
  res.send('Welcome to a basic express App')
})

server.get('/users', (req, res) => {
  res.json([
    { name: 'William', location: 'Abu Dhabi' },
    { name: 'Chris', location: 'Vegas' }
  ])
})

server.post('/user', (req, res) => {
  const { name, location } = req.body

  res.send({ status: 'User created', name, location })
})

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`)
})
