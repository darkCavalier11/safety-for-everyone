const express = require('express')
const socket = require('socket.io')
const path = require('path')
const http = require('http')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3000
const io = socket(server)
app.use(express.json())
app.use(express.static('./public'))

io.on('connection', (socket)=>{
    socket.emit('message', 'You joined')
    socket.broadcast.emit('message', 'A new user joined')

    
})
server.listen(PORT, ()=>{
    console.log('PORT IS OPEN ON ' + PORT)
})
