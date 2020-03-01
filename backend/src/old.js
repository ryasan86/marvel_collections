const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })
const createServer = require('./createServer.js')
const server = createServer()

server.use(logger('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser())

const options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  endpoint: '/graphql',
  playground: '/playground'
}

server.start(options, deets =>
  console.log('Server is running on port: ', deets.port)
)
