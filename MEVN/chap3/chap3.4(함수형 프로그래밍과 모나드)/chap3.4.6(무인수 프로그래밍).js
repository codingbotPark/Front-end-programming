const {map, filter, pipe, values, go} = require('fxjs')
const L = require('fxjs')

const 친구들 = [
    {
        "name" : "박병관",
        "do" : "노마드코더"
    },{
        "name" : "김일일",
        "do" : "첫번째"
    },{
        "name" : "김이이",
        "do" : "두번째"
    },{
        "name" : "김삼삼",
        "do" : "세번째"
    }
]

const t = 친구들.map(e => e.do === "노마드코더" ? e : null).filter(e => e)
console.log(t)

// 위의 방법은 만약 다른 do를 비교하려면 값을 바꿔야 하지만
// 아래는 함수에 인자 형태로 

const prop = key => obj => obj[key]
const propEqual = value => key => obj => prop(key)(obj) === value

const t2 = go(
    친구들,
    L.filter(propEqual('노마드코더')('do')),
    L.takeAll
)
console.log(t2)

// 이처럼 매개변수만을 바꿔 로직을 유연하게 수정할 수 있는 것을 Point-free, 무인수프로그래밍이라 한다