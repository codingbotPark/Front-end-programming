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
