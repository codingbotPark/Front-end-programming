const R = require('ramda')
const f_1 = R.map(a => a+1)
const f_2 = R.filter(a => a % 2)
const ret = f_2(f_1([1,2,3,4]))
console.log(ret)

// 위는 읽기가불편하다

// ------------

// 1. ramda compose를 사용
const R = require('ramda')
const ret1 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4)
console.log(ret1)
// 왼쪽에서부터 compose가 된다

// ------------

// 2. ramda pipe를 사용
const R = require('ramda')
const f = R.pipe(R.negate,R.inc)
console.log(f(3))
// pipe는 왼쪽에서 오른쪽으로 진행된다

// ------------
// fx.js 라이브러리를 사용
// 함수형 라이브러리에는 크게 loadash, ramda, fxjs가 있다
const {map,filter,pipe} = require('fxjs')
const f_pipe = pipe(
    map(a => a+ 1),
    filter(a => a % 2)
)
const _ret = f_pipe([1,2,3,4])
console.log(_ret)