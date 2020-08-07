const socket = io()
socket.on('message', (arg)=>{
    console.log(arg)
})