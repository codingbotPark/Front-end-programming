// 1. map
const a = (a) => {
    return a + 10
}

const b =  [1,2,3].map(a)
console.log(b)

// 2. 함수를 실행하여 반환
const _call = (a,b) => a() + b()

// 3. 함수를 반환하는 함수
const c = val => () => val
// 위와 같은 의미의 아래코드
function a(val){
    return function(){
        return val
    }
}

console.log(a_lazy())