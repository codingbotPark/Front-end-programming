const test = (function(){
    let count = 0
    return {
        increase(){
            count++
        },
        decrease(){
            count--
        },
        getValue(){
            console.log(count)
        }
    }
})()

test.increase()
test.increase()
test.increase()
test.getValue()
// js에서는 private변수가 존재하지 않는데, 즉시실행함수와 클로저를 이용해 private변수를 구현한 것이다

// ---------
const add = (function(){
    let counter = 0
    return function(){
        counter += 1
        return counter
    }
})()

console.log([add(),add(),add()])
// [1,2,3]이 나온다
// counter라는 벼수는 내부함수에서 참조할 수 있는 클로저로 남아서 계속 더하기가 가능하다