// // add에 1을 넣고, 나중에 2를 넣어서 매개변수가 완성되었을 때 실행된다
const R = require('ramda')
const a = R.add(1)
const b = a(2)
console.log(b)

// ------------

const R = require('ramda')
const addFourNumbers = (i,j,n,m) => i+j+n+m
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1,2)

const g = f(3)
console.log(g(4))

// ------------
// 커스텀 커링

const curry = fn => a => b => fn(a,b)
const f1 = curry((a,b) => a+b)
const f2 = f1(1)
const ret = f2(2)
console.log(ret)