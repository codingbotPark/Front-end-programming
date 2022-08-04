const b = 1

// 순수함수
const pure = (a,b) => {
    return a + b
}

// 순수하지 않은 함수
const not_pure = (a) => {
    return a + b
}


// ---------

let c = 0

// 나쁜 예 매개변수로 받지도 않고 전역변수를 변환, 반환
const bad_f = () => {
    return c++;
}
bad_f()

// 좋은 예 매개변수로 받고 +1 을 한다
const f = c => c + 1