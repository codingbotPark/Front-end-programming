const FxJS = require("fxjs")
const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const user = [
    {id:1,name:"홍철",age:22},
    {id:2,name:"서영",age:25},
    {id:3,name:"종선",age:31},
    {id:4,name:"제호",age:27}
]

const f = (info,user) => {
    const group = user.age - user.age % 10
    info.count[group] = (info.count[group] || 0) + 1
    info.total[group] = (info.total[group] || 0) + user.age
    return info
}

const ret = _.reduce(f,{count:{},total:{}},user)
console.log(ret)

// ----------
// 초기값 할당 연산자
// null 또는 undefined일 때 초기화가 가능하다
const a = {나이:50}
a.나이 ??= 10
console.log(a.나이)
a.키 ??= 170
console.log(a.키)
