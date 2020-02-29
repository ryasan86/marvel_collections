import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import './env.js'
import createServer from './createServer.js'

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
  endpoint: '/',
  playground: '/playground'
}

server.start(options, deets => console.log('Server is running on port: ', deets.port))
