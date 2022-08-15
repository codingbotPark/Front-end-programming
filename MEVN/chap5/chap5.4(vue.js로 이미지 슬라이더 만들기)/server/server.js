const express = require('express')
const path = require('path')
const app = express()

const img_path = path.join(__dirname,`./img`)
const PORT = 12011

const main = async () => {
    app.use('./img',express.static(img_path))
    app.listen(PORT,console.log('이미지 서버 시작'))
}

main()