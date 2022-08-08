// 퓨처모나드(Promise)1
// 퓨처모나드인 Promise를 활용하여 I/O bound 에서의 불확실한 값을 성공과 실패라는 2가지 값으로 나눠서 연산을 도와준다

const g = JSON.parse
const f = k => k.temp
const fg = x => new Promise((resolve,reject) => resolve(x)).then(g).then(f)

const log = x => console.log(x)

fg('{"temp":36.5}').catch(_=> 'JSON PARSE is not working').then(log)
// promise 의 catch문으로 에러를 처리


// 퓨처모나드(Promise)2
// Promise.reject를 반환하여 catch문에 들어간다(위는 그냥 오류)
const user = [{name:'큰돌'}, {name:'병관'},{name:'김개발'},{name:'다빈'}]
const g1 = (name) => user.find(u => u.name === name) || Promise.reject("객체에 없습니다")

const f1 =  ({name}) => `${name}이가 춤을 춥니다`
const fg1 = x => new Promise((resolve,reject) => resolve(x)).then(g1).then(f1)

fg1("큰돌1").catch(_=>_).then(console.log)
fg1("큰돌").catch(_=>_).then(console.log)
