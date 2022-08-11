const exporess = require('express')
const app = exporess()
const looger = require('morgan')
const PORT = 3000

app.use(looger('tiny'))
const simple_module = require('./simple_module(chap4.3.2).js')
app.get('/',simple_module.intro)
app.get('/users/:userName/books/:bookName',simple_module.handleBook)

app.listen(PORT, () => {
    console.log(`서버가 생성되었습니다 ${PORT}`)
})