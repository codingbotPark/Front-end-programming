// DOM 조작 자제
// DOM캐싱 적용 X
document.querySelector('kundol').style.top = "20px"
document.querySelector('kundol').style.left = "20px"

// DOM캐싱 적용 O
const kundol = document.querySelector('kundol')
kundol.style.top = "20px"
kundol.style.left = "20px"

// DOM캐싱 적용 X
for (let i = 0;i<1000;i++){
    document.querySelector('kundol').innerHTML += 'a'
}

// DOM캐싱 적용 O
let value = ""
for (let i = 0;i<1000;i++){
    value += 'a'
}
document.getElementById('kundol').innerHTML += value



// 간단한 정규표현식 사용하기
const html = `
<div class='test'>
<span>터키</span>
<span>행진곡</span>
</div>
`

const tag = /<(\/?)(\w+)([^>*?])>/g
let match, list = []
while((match = tag.exec(html)) !== null)list.push(match[0])
console.log(list)

// 정규표현식으로 카멜표기법을 팟홀표기법으로 바꾸기
const a = "backGround"
const b = a.replace(/([A-Z])/g,"-$1").toLowerCase()
console.log(b)