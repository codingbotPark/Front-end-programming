// 서버는 예상과 달리 중지될 수도 있따, 그때마다 수동으로 다시 시작해주는 pm2를 알아보기 전 일부러 중지되는 서버를 만든다

const http = require('http')
const PORT = 12010
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','application/json; charset=utf-8')
    const obj = {
        "이름" : "큰돌"
    }
    res.end(JSON.stringify(obj))
})

setTimeout(() => {
    // 에러를 발생시켜 1초마다 서버가 중지되게 한다
    JSON.parse("{Z")
},1000)

server.listen(PORT,() => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})