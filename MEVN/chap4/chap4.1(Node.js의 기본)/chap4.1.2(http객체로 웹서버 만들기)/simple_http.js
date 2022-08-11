const http = require('http')
const PORT = 12010 // 포트번호 설정, IP + 포트번호 = URI
const server = http.createServer((req,res) => { // 서버 생성
    // 응답값은 텍스트임을 알려준다
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    // 요청에 대한 응답
    res.end('안녕하세요 MEVN프로젝트입니다')
})

// listen으로 http서버 시작
server.listen(PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})