const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3000



server.listen(PORT, ()=>{
    console.log('PORT IS OPEN ON ' + PORT)
})