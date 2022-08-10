// 지연평가로 인해 L.map(a + 100)과 L.mal(delay)으로 이어지며 순차적인 비동기적 map이 구현된다

const FxJS = require("fxjs")
const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const log = a => {
    return console.log(`${new Date()} : ${a}`)
}

const delay = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        },1000)
    })
}

async function test_fp(){
    const list = [1,3,5,7,9]
    return await _.go(
        list,
        L.map(a => a +100),
        L.map(delay),
        _.each(log)
    )
}

test_fp().then((ret) => console.log(ret))

// go는 즉시실행 pipe함수(함수합성)
// map을 통해 각각에 100을 더한다