const express = require('express')
const path = require('path')
const looger = require('morgan')
const app = express()
const PORT = 12010

// resolve와 join사용
// const _resolve = path.resolve('.','dist','css')
// const _join = path.join(__dirname, 'dist', 'css')
// console.log(_resolve)
// console.log(_join)


// dist에 있는 파일들을 서버에 올린다,
// 사용자는 dist에 있는 폴더에 모든 정적 파일에 접근이 가능하다
const _path = path.join(__dirname, './dist')
console.log(_path)

app.use('/dist',express.static(_path)) // index.html이 기본으로 보인다
app.use(looger('tiny'))
// 커스텀 미들웨어
app.use((req,res,next) => {
    console.log('요청이 왔네요~ 지나갑니다~')
    next()
})

app.get('/book/:bookName',(req,res) => {
    const {bookName} = req.params
    res.send(`안녕하세요 홍철이네 서점입니다. ${bookName}을 주문하셨군요`)
})

app.listen(PORT,() => {
    console.log(`너의 서버는? ${PORT}!`)
})