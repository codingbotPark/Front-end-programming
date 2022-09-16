const express = require('express')
const app = express()

app.use("/",function(feq,res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(8080)

const WebSocekt = require("ws")
const socket = new WebSocekt.Server({
    port:8081
})

socket.on('connection', (ws,req) => {
    ws.on('message',(msg) => {
        console.log('유저가 보낸거 : '+msg)
        ws.send('ㅂㅇ')
    })
})