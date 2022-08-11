const express = require('express')
const app = express() // 보통 app이라는 이름의 변수를 사용
const PORT = 3000

// app.use로 모든 HTTP요청에 대한 미들웨어를 설정한다
// HTTP요청을 처리하는 매개변수로 req, res가 기본적으로 설정, 다음 미들웨어로 로직을 넘기거나 매개변수를 넘기는 next함수가 존재한다
app.use((req,res,next) => { 
    console.log('1 Time:',Date.now())
    next() // next함수가 없다면 아래의 로직은 실행되지 않을 것이다
})
app.use((req,res,next) => {
    console.log('2 Time', Date.now())
    next()
})

app.listen(PORT,() => {
    console.log(`서버 생성${PORT}`)
})