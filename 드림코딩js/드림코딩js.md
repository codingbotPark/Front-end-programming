# 보고 실행시켜보고싶었거나, 몰랐던 내용, 중요한 내용을 정리
> 그냥 내맘대로 정리한다는 말임

## 자바스크립트5
[자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현 | 프론트엔드 개발자 입문편(JavaScript ES6)](https://www.youtube.com/watch?v=e_lU39U-5bQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=5)


계산기 만들기 과제?
```js
// 미친 계산기를 만들었습니다
function calculate(command,a,b){
    console.log(calObj[command](a,b))
}

calObj = {
    add : (a,b) => a+b,
    substract : (a,b) => a-b,
    divide : (a,b) => a/b,
    multiply : (a,b) => a*b,
    remainder : (a,b) => a%b
}

calculate("add",1,2)
```

## 자바스크립트6
자판기라는 class가 있을 때
상품개수는 variable
커피가 하는 일(동전넣고, 커피 만들기)는 Method, 

**근데 이 때 상품개수가 0이 되는 것은 틀리고, 이러한 틀린 상황을 위해 getter와 setter를 사용해야 한다**

**또 이런 상품개수를 다른사람이 설정하는것은 좋지 않기 때문에 private로 줘야한다**

```js
class User {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age
        // 아래의 설명과 같이 그냥 this.age를 사용하면, 
        // getter의 age가 불려진다
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
    // 요기서 주의해야 할 점은
    // 우리가 age라는 getter를 정의하면, this.age는 getter를 호출,
    // age라는 setter를 정의하면, age는 setter를 호출하게 된다

    // 그래서 생성장에서 값을 할당할 때 setter에서 값을 변경시켜줄 수 있다
} new User('Steve','job',-1);
```


## 자바스크립트7
f
#### Property value shorthand
객체를 계속 만들면 번거로워 져서 함수로 만들 수 있다

```js
const person 1 = {name : 'bob', age : 2}
function makePerson(name,age){
    return {
        name:name,
        age:age,
    }
}
// 위와같이 key와 value가 같은 객체에는
// 아래와같이 값을 생략해도 된다
function makePerson1(name,age){
    return {
        name,
        age
    }
}
const person2 = makePerson("park",1)
const person3 = makePerson("che",1)
```

그리고 class처럼 만들어 줘서 함수가 아래와 같이 된다

```js
function Person(name,age){
    this.name = name;
    this.age = age;
}
```

## 자바스크립트 11
동기와 비동기

js는 동기적이다
위에서 하나하나씩 내려가는,,

호이스팅 =  `var` `function` 이 가장 먼저 읽혀서 선언

그래서 호이스팅 된 후 위에서 하나하나씩 내려간다


## 자바스크립트 12

```js
// producer
const promise = new Promise((resolve,reject) => {
    console.log("doing something");
    setTimeout(() => {
        resolve("ellie");
    },2000);
})

// cunsumers
promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("finally")
})
```

**promise chaining**
```js
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1),1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(num-1),1000)
    })
.then(num => console.log(num));
})
```