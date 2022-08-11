// pm2 start 파일명 으로 다시 살아나는 서버를 실행시킬 수 있다
// chap4.2.1 과 같은 코드

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