// this결정
const a = () => {
    console.log(this)
}
a()
// window

function b(){
    console.log(this)
}
b()
// window


// --------

function Person(){
    this.age = 0

    setTimeout(() => {
        this.age++
        console.log(this,this.age)
    },1000)
}
var p = new Person()
// age에 +가 된다

function Person(){
    this.age = 0

    setTimeout(function(){
        this.age++
        console.log(this,this.age)
    })
}
var p = new Person()
// NaN

// 화살표함수를 사용했기 때문에 상위 스코프인 Person이라는 클래스를 가리키기 때문에 정상적으로 작동

// --------
// 함수호출 패턴
function add(c,d,fn){
    return fn(c + d)
}

let user = {
    a:2,
    b:3,
    add(){
        console.log(this) // user
        add(this.a,this.b,function(total){
            console.log(this) // window
        })
    }
}

user.add()

// 밖에있는 add함수를 호출했을 때 this는 당연하게 window이다

// --------
// 생성자 함수에서의 this

function Person1(){
    this.value = 'park',
    this.printThis = function(){
        console.log(this)
    }
}

var p = new Person1()
var print = p.printThis

p.printThis()
print()

// p.printThis()와 print() 가 다르다
// 그냥 print로 호출한다면 호출되는 환경의 영향을 받아서 전역객체를 참조하게 된다

// -------
// this를 사용하지 않은, 올바른 생성자 함수

function Person2(){
    let age = 0
    function up(){
        return ++age
    }
    function down(){
        return --age
    }
    return Object.freeze({
        up,down
    })
}

const a1 = new Person2()
const ret = a1.up()

console.log(ret)

const ret2 = a1.up()

console.log(ret2)

// age는 변수의 private속성을 가진다

// ----------
// 객체 리터럴로 만든 객체에서의 this

var obj = {
    value:'hi',
    printThis:function(){
        console.log(this)
    }
}

var print = obj.printThis

obj.printThis()
print()

// --------
// call을 쓰는 생성자 함수는 화살표로 만들면 정적으로 this가 정해져서 window or global을 가르켜서 생성자 함수 구실을 못하게 된다

function a(c,d){
    const b = [this.name, this.adjective, '이가 춤을 춥니다', c, d].join('')
    return b
}

const 큰돌 = {
    name:'큰돌', adjective:'아주 이쁘게'
}

console.log(a.apply(큰돌,['하지만 혼자', '외롭게 말이죠']))
console.log(a.call(큰돌,'하지만 혼자','외롭게 말이죠'))