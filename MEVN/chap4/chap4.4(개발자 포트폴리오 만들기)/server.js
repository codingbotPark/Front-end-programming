const express = require('express')
const path = require('path')
const app = express()
const PORT = 12010

const _path = path.join(__dirname,'./dist')
app.use(express.static(_path))
app.listen(PORT, () => console.log(`포트폴리오 서버가 시작됩니다${PORT}`))

// dist안에 있는 정적 파일들을 서버에 뛰운다