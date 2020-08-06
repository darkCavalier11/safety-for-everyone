const express = require('express')
const socket = require('socket.io')
const http = require('http')
const { isObject } = require('util')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3000

socket.on('connection', ()=>{
    socket.broadcast.emit('message', 'A New Client Joined')
    socket.emit('message', 'You joined')
})


server.listen(PORT, ()=>{
    console.log('PORT IS OPEN ON ' + PORT)
})