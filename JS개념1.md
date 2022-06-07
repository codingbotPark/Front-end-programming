>웹페이지 <a href= "https://learnjs.vlpt.us/basics/01-hello-javascript.html" target = "_blank" title = "참고자료">벨로퍼트와 함께하는 모던 자바스크립트</a> , **패스트캠퍼스 JavaScript (이웅재 강사)** 와 여러자료들을 참고

<br>

# JavaScript
JavaScript는 객체 기반의 스크립트 프로그래밍 언어이다  
주로 웹브라우저에사용되고, 이제는 단순히 웹페이지에서만 국한되지 않고 Node.js 를 활용해 서버프로그래밍에도 사용되고 있다

## 역사
'넷스케이프 커뮤니케이션스' 라는 회사는 웹이 더 동적으로 변화할 필요를 느끼고 개발되었다  

원래 모카(Mocha)라는 이름으로 개발되었으나 라이브스크립트(liveScript)로 불렸고, 나중에 **자바스크립트** 로 이름이 바뀌었다

<a href = "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#%EC%97%AD%EC%82%AC" target = "_blank" ttle = "참고자료">위키백과\<JavaScript역사></a>

<br>

# 문법(패스트캠퍼스)
자바스크립트가 실행되는 환경에는 크롬, 사파리, Edge등 데스크탑 브라우저, Node.JS와 같이 서버로 활용될 수 도 있다  
이런 여러가지 환경에 따른 자바스크립트 문법은 환경에 따라 다르다 <a href = "https://kangax.github.io/compat-table/es6/" taregt = "_blank" title = "참고자료">(JS환경에따른 버전)</a>  
<a href = "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target = "_blank" title = "참고자료">(자바스크립트표준)</a>

대표적인 자바스크립트 실행환경은 크롬, node.js이다  

자바스크립트는 크롬 브라우저 개발자 도구에서 바로 사용 할 수 있다   
개발자도구는 Ctrl + Shift + I 키를 눌러 열 수 있다    

개발자도구에서 Console 탭에
```JS
console.log('Hello JavaScript');
```
을 입력해보면 자바스크립트를 사용할 수 있는 것을 확인할 수 있다

<a href = "https://codesandbox.io/" target = "_blank" title = "참고자료">CodeSandbox</a> 라는 사이트로 코드를 작성하고 바로 확인할 수 있다  

<a href = "https://learnjs.vlpt.us/basics/01-hello-javascript.html" target = "_blank" title = "참고자료">CodeSandbos 설정</a>

<br>

## 기본개념

### Expression
값을 만들어 내는 간단한 코드를 **표현식** 이라 한다

`console.log();` 콘솔창에 값을 출력할 수 있다  
`alert();` 경고창에 값을 출력할 수 있다

```JS
50
```
```JS
"Hello"
```
```JS
"Hello" + "codingbot"
```
이런 표현식은 값을 만들어 내기 때문에 함수의 인자로 사용할 수 있다  
```JS
alert(100+68);
```

<br>

### Statement
* 하나, 여러개의 표현식이 모여 **문장** 을 이룬다  
* 모든 표현식은 문장이 될 수 있다  
* 보통 문장의 끝에 세미콜론(;) 을 붙인다  
(한줄에 하나인 경우에는 붙이지 않아도 문제가 없지만 관례적으로 붙인다)

모든 표현식은 문장이 될 수 있기때문에
```JS
true
```
```JS
35+78
```
과 같은 것들도 문장으로 볼 수 있다

* 한줄에 여러 문장을 적을 경우 세미콜론으로 문장을 구별해야한다
* 마지막 문장은 세미콜론을 붙이지 않아도 된다
* 마지막 문장이 반환된다

```JS
true;89+98;"Hello"
```
마지막 문장이 반환된다

**표현식이 모여서 문장이 되고 문장이 모여서 프로그램이 된다**

<br>

### Keywords
자바스크립트에서 특정한 목적을 위해 사용되는 단어이다  
이러한 키워드들은 예약어로 지정되어있다

```JS
var name = "Park";
```
에서 `var` 은 단어를 변수로 선언할 때 사용하는 **키워드** 이다  
이러한 키워드는 예약어이기 때문에 프로그램을 작성할 때 **변수명, 함수명 등 으로 사용할 수 없다**

<br>

### Reserved keywords
이미 특정한 목적을 위해 사용하기 때문에 사용할 수 없는 예약어
(런타임 환경에 따라 조금씩 다를 수 있다)

<img alt = "JS Reserved keyword" src = "https://miro.medium.com/max/1400/1*4UNw4zrgC2cdh9Voon6K0A.png" height = "350">

위와 같은 단어들이 예약어이다  

<br>

### Future reserved keywords
앞으로 특정 목적을 위해 사용할 가능성이 있어서 사용할 수 없는 예약어  
(런타임 환경에 따라 조금씩 다를 수 있다)

**예약어때문에 코딩하면서 어려운 일이 생기진 않기 때문에 개념만 이해하면 된다**

<br>

### Identifier
식별자라는 뜻으로 코드안에 있는 변수, 함수, 속성 등을 식별하는 문자열이다

```JS
var name = "Park";
function hello() {}
var person = {name: "Mark", age: 17};
```
첫 번째 줄 `Park` 라는 값은 `name` 이라는 식별자로 부르게 된다  
두 번째 줄 `function` 이라는 키워드를 사용해 만든 `hello` 라고 하는 함수를 `hello` 로 부르게 된다  
세 번째 줄 `person` 안에있는 `name` 과 `age` 라는 것들도 각각 식별자이다

식별자는 대소문자를 구별하기 때문에 **대문자를 쓰는 것과 소문자를 쓰는 것은 다르다**

```JS
var Name = "Park";
var name = "Park";
```
이 두개는 다른 변수이다

* 식별자는 <a href = "https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C" target = "_blank" title = "참고자료">유니코드</a> 문자, `$` , `_` , 숫자 를 사용할 수 있지만 숫자로 시작할 수는 없다  
* 예약어를 사용할 수 없고, 공백 문자도 사용할 수 없다

```JS
var name1;
var &name;
var _name;
var 1name;
var 한글;
```
`var 1name` 은 사용할 수 없다  
유니코드를 사용할 수 있기 때문에 한글을 사용할 수는 있지만 보통 영문을 사용한다

변수명을 사용할 수 있는지 <a href = "https://mothereff.in/js-variables" target = "_blank" title = "참고자료">확인</a>

**역할에 맞는 적절한 이름을 짓도록 노력해야 한다**

<br>

### comments
comments 는 주석을 뜻한다  
주석은 **코드에서 프로그램에 영향을 주지 않고, 무시되는 부분** 이다  
보통 소스코드를 이해할 수 있도록 돕는 역할로 사용한다

```JS
//슬레쉬를 두 개를 쓰면 주석이 된다
```
여러줄을 주석처리 하려면
```JS
/*
시작과
끝 부분에
슬레쉬와 별을 
사용한다
*/
```
보통 에디터에서는 Ctrl + / 를 사용해 주석으로 만들 수 있다

<br>

## 변수와 상수
**변수(variable)는 한번 선언하고 바뀔 수 있는 값을 말한다(선언한 후 바꿀 수 있다)**  
**상수(constant)는 한번 선언하고 바뀌지 않는 값을 말한다(값을 바꾸면 에러가 뜬다)**  
이 둘은 프로그램이 실행되면서 프로그램이 실행되면서 프로그램에서 사용되는 값들을 메모리에 저장했다가 다시 그 값을 사용하는 일이 많은데 이 보관소 역할을 한다

15로 바로 쓰지 않고 누군가가 입력한 값이라 가정할 때
```JS
if ( (5+10) % 3 === 0 )
{
    console.log("3로 나누어떨어진다");
}

if ( (5+10) % 5 === 0 )
{
    console.log("5로 나누어떨어진다");
}
```
이러한 코드에서 `5 + 10` 의 결과를 잠시 보관해지면
* 코드가 의미하는바가 더 정확해진다
* 컴퓨터가 프로그램을 실행하면서 불필요한 일을 하지 않을 수 있다

이 때 `5 + 10` 의 값이 변하지 않기 때문에 상수를 사용한다

### 상수
`const` 로 상수를 선언할 수 있다

```JS
const sum = 5+10;
if (sum % 3 === 0)
{
    console.log("3로 나누어떨어진다");
}  

if (sum % 5 === 0)
{
    console.log("5로 나누어떨어진다");
}
```
상수는 한 번 선언한 후 값을 변경하지 못하기 때문에 선언한 동시에 값을 할당한다

<br>

### 변수
`let` 로 변수를 선언할 수 있다  
`let` 로 변수를 선언해주면 **아직 값이 할당되지 않은 상태를 의미하는 undefined 라는 값을 가지게 된다**  

이미 선언 된 변수에 어떤 값을 넣으려면 우변의 값을 좌변의 변수에 할당할 수 있다  
```JS
const sum = 5+10;
let result = false;

if (sum % 3 === 0)
{
    console.log("3로 나누어떨어진다");
    result = true;
}

if (sum % 5 === 0)
{
    console.log("5로 나누어떨어진다");
    result = true;
}

console.log(result);
```

<br>

#### + var
`var` 이라는 키워드는 `let` 과의 차이점으로 
* `let` 은 똑같은 이름으로 여러번 선언 할 수 있다
* `let` 과 `var` 은 사용할 수 있는 범위가 다르다

<br>

## 변수의 유효 범위

<a href = "https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98%EC%99%80-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84" target = "_blank" title = "참고자료">JS 변수의 유효 범위</a>

### 블록 스코프
상수(const)와 변수(let)의 유효 범위는 **블록 스코프** 라는 유효 범위를 가지고 있다  
블록은 `{ }` 이런 중괄호로 이루어진 덩어리를 의미한다  
중괄호 안에서 선언된 변수는 그 공간 안에서만 사용할 수 있다  

```JS
//블럭
{
    const name = "Park";
    console.log(name);
}

console.log(name);
//블록 밖에서 name을 사용할 수 없다
```
```JS
//안에서 밖으로
let age = 17;

{
    console.log(age);
}

console.log(age);
//블록 밖에서 선언한 변수는 블록 안, 밖에서 사용할 수 있다
```
```JS
//중첩
let school = "DGSW";
{
    {
        {
            console.log(school);
            let grade = 1
        }
    }
    console.log(grade);
}
//괄호가 중첩으로 있을 때도
//밖에서 선언한 변수를 안에서 사용할 수 있고
//안에서 선언한 변수를 밖에서 사용할 수 없다
```

조건문, 반복문 등에도 블록은 사용된다  
(조건문과 반복문은 나중에 제대로 다룬다)
```JS
//조건문(if), 반복문(for)과 같은 함수를 선언, 사용할 때
//블록을 사용하기 때문에

if (true)
{
    let age = 17;
    console.log(age)
}
//age는 조건문 밖에서 사용할 수 없다
console.log(age);

for (let i =0 ; i<5 ; i++ )
{
    const message = 'hello' + i;
    console.log(message);
}
//message는 조건문 밖에서 사용할 수 없다
console.log(message);
```

<br>

### 함수 스코프
var는 함수를 스코프로 가지고 있다  
var는 <a href = "https://valuefactory.tistory.com/610" target = "_blank" title = "참고자료">자바스크립트버전</a> es5 까지는 자바스크립트에서 가장 대표적으로 사용되는 변수 선언방법이였다  
일반적으로 함수 스코프 보다 블록 스코프가 사람들에게 직관적으로 식별하기 쉽다  

함수 스코프는 함수에서 블록이 아닌 함수가 선언된 영역이 유효 범위가 된다
```JS
var a = 0;

(function()
{
    a++;//a의 값을 1증가시킨다
    console.log(a);
}
)();

console.log(a);

(function()
{
    var b = 0;
    console.log(b)
}
)();

console.log(b);
//var은 함수가 선언된 영역이 유효범위이기 때문에
//function밖에서 b를 사용할 수 없다
```
```JS
var c = 0;

{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d);
//var라는 키워드는 함수 스코프이기 때문에
//함수에서만 구분되는 스코프를 가지고 있다
//즉 var라는 키워드에게 블록은 상관이 없어서 동작을 한다
``` 
함수스코프를 가지고 있는 변수 선언 방식은 블록스코프에서는 스코프의 의미를 가지고 있지 않기 때문에 버전 es6 가 된 후 블록스코프에 유요한 키워드가 등장했다

<br>

## 호이스팅
아래에 있는 선언(만)을 끌어올린다  
(저장은 코드에서 입력한 위치와 정확히 일치하는 메모리에 저장된다)  
**코드에서 선언하기 전에 함수를 사용할 수 있다**  

<a href = "https://developer.mozilla.org/ko/docs/Glossary/Hoisting" target = "_blank" title = "참고자료 ">JS 호이스팅1</a>  
<a href = "https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html" target = "_blank" title = "참고자료">JS 호이스팅2</a>

```JS
//함수먼저만들기
function hello1()
{
    console.log('hello1');
}

hello1();

//함수의 호출을 먼저 만들기
hello2();

function hello2()
{
    console.log('hello2');
}
```
var을 사용한 변수도 호이스팅이 된다
```JS
age = 6;//선언을 아래에서 한 변수에 값을 대입할 수 있다
age++;//1을 증가시킨다
console.log(age);

var age;
```
```JS
console.log(name);

name = "Park";

console.log(name);  

var name = "BK";
//실행시키면 undefined 와 Park 가 출력된다

//그 이유는
//호이스팅 현상은 선언부(var name)만 올라가기 때문이다
```

<br>

## 자료형
기본적으로 자바스크립트 자료형은 **동적 타이핑** 이라한다

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures" target = "_blank" title = "참고자료">JS 자료형</a>


```JS
let whatever = "Park"//문자를 입력하면 문자열 타입을 가지게 된다

whatevr = 17;//숫자값을 할당하면 let이라는 키워드를 썻기 때문에
// whatever은 숫자형 타입을 가지게 된다

whatever = ture;//불린형의 탑을 가지게 된다
```
이렇게 변수의 이름을 보면 타입이 어떤 타입인지 알 수 없고 지정도 할 수 없다  
이런 정해져있지 않은 타입의 스타일을 **동적 타이핑** 이라한다


JS에서 기본적으로 제공하는 데이터 타입(primitive)  

<img alt = "JS 데이터 타입" src = "https://www.learnsimpli.com/wp-content/uploads/2019/09/javascript-data-types.png" height = "350">

객체(object)는 사용자정의 타입도 만들 수 있지만 기본적으로 실행환경, 브라우저에서 기본적으로 제공하는 객체들이 있다 그것을 표준내장객체라고 한다 내장객체를 활용해 또다를 객체를 만드는 활동도 할 수 있다

### Boolean자료형
논리적인 요소를 나타낸다  
`ture` 와 `false` 두 가지 값을 가질 수 있다

```JS
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);//isTrue의 값과 타입을 출력
console.log(isFalse, typeof isFalse);//isFalse의 값과 타입을 출력
//boolean타입이 출력된다
```
객체를 사용하면 직관적으로 자료형을 파악하기 힘들다
```JS
const a = new Boolean(false);
console.log(a, typeof a);
//Boolean이라는 생성자함수로 false 값을 가지고 있고
//타입은 객체가 된다

//이런 객체를 사용하지 않는 이유는
//조건문에서 사용할 때 객체로 조건문에 들어가면
//false임에도 참이되는 상황이 발생한다
if (a)
{
    console.log('실행이된다');
}
```
```JS
//다른타입의 값을 넣어서
const b = Boolean(false)//이 Boolean으로 평가한 후 b에 값이 들어간다
console.log(b, typeof b);
//즉 Boolean type이기 때문에
//if문이 실행이 안되는 것을 확인할 수 있다
if(b)
{
    console.log('실행이된다');
}
```

<br>

### + Null, Undefined

키워드|설명
---|---
Undefine|변수를 선언하고 값을 할당하지 않은 상태(자료형이 없는 상태)
Null|변수를 선언하고 빈 값을 할당한 상태(빈 객체)

<a href = "https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/13_undefined&null.html#undefined" target = "_blank" title = "참고자료">Null, Undefined</a>

#### Null
`null` 한 가지 값을 가질 수 있다  
어떤 값이 의도적으로 비어있음을 표현한다  
불리언 연산에서는 거짓으로 취급한다  

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null" target = "_blank" title = "참고자료">null</a>

```JS
//Null
const a = null;
console.log(a, typeof a);
//null 과 object타입이 나온다
//즉 null은 값이 없다는 것을 의미하는 객체이다
```
`typeof null` 을 하면 object가 나온다

<br>

#### Undefined
값을 할당하지 않은 변수는 `undefined` 값을 가진다  

<a href = "https://developer.mozilla.org/ko/docs/Glossary/undefined" target = "_blank" title = "참고자료">undefined</a>

```JS
let b;
console.log(b, typeof b);
//undefined가 나오고 타입도 undefined가 나온다
//즉 값을 할당하지 않았을 때는 undefined라는 값을 가지게 된다
b = undefined;
console.log(b, typeof b);
```
`typeof undefined` 을 하면 undefined가 나온다

<br>

이런 null과 undefined을 비교하면
```JS
if (a == b)
{
    console.log(a == b)
}
//==로 비교를 하면 ture라는 값이 나오게 된다
//즉 a와 b는 같다고 인식한다

if (a === b)
{
    console.log(a == b)
}
//===로 비교를 하면 type까지 비교를 하기 때문에 false라는 값이 나오게 된다
//즉 a와 b는 다르다고 인식한다
```
`==` 으로 비교하면 같다고 인식,  
`===` 으로 비교하면(타입까지 비교) 다르다고 인식

<br>

### Number자료형

```JS
const a = 17;
console.log(a, typeof a);
const b = 53.2;
console.log(b, typeof b);
//각각 값과 number타입이 출력된다
```
NaN = 숫자가 아니라는 의미
```JS
const c = NaN;
console.log(c, typeof c);
//NaN과 number타입이 출력된다

//NaN 활용
const d = Number('Park');//문자열을 형변환을 했을 때
//제대로 숫자로 형변환이 안될 때가 생길 수 있다
//이 때 NaN(숫자가 아니다 라는 의미)을 사용한다
console.log(d, typeof d);
//이 때 NaN과 number타입이 출력된다

//문자열로 숫자를 쓸 때 Number로 형변환을 하면
const e = Number('17');
console.log(e, typeof e);
//정상적으로 숫자 17, Number타입이 출력된다
```

<br>

### String

```JS
const a = "Park";
console.log(a, typeof a);
const b = "Park";
//따움표, 쌍따움표로 지정한다

//문자열을 합칠 수 있다
const c = "Park" + "BK";
console.log(c);
const d = a + b;
console.log(d);
//두 가지만 더해서 쉽지만
//여러가지를 문자열에 포함시켜야 하는 상황이 빈번하게 발생한다
```
여러가지를 문자열에 포함시켜야 하는 상황이 빈번하기 때문에 es6에서 **템플릿 스트링** 기능이 나왔다  
템플릿 스트링을 사용하려면 문자열을 만들 때  
**따움표, 큰따움표 대신 (위 키보드의 1 옆) \`(grave)를 사용하고**  
**변수를 넣고자 하는 부분에 `${}` 키워드를 사용해 변수를 넣어준다**

<a href = "https://itholic.github.io/js-template-string/" target = "_blank" title = "참고자료">템플릿 스트링</a>

```JS
const a = 'BK';
const b = "1grade"
const c = `Hello ${b} Park ${a}`;//백틱(grave)을 사용
console.log(c, typeof c);
//Hello 1grade Park BK , string타입이 출력된다
```

<br>

### Symbol
es6부터 출현,  
symbol값은 유일한 값이므로 symbol값을 키로 가지는 프로퍼티는 다른 프로퍼티와도 충돌하지 않는다 

<a href = "https://poiemaweb.com/es6-symbol#3-symbol%EC%9D%98-%EC%82%AC%EC%9A%A9" target = "_blank" title = "참고자료">JS symbol</a>

```JS
const a = Symbol();
const b = Symbol(17);
const c = Symbol('Park');
const d = Symbol('Park');
console.log(a ,typeof a)
console.log(c === d)
//c와 d는 다르다
```
Symbol은 생성자함수로 만들 수 없다
```JS
new Symbol();
//오류가 뜬다
```

<br>

## 조건식
특정한 조건 아래에서 코드가 실행되게 하는 구문  
표현식이 참으로 평가될 때, 실행되는 블록`{}`을 설정한다

<a href = "https://goddaehee.tistory.com/225" target = "_blank" title = "참고자료">JS 조건식</a>

### if
조건을 만들 수 있다

```JS
if (true)
{
    console.log('항상 실행');
}
```
블록에 코드가 한 줄이면 중괄호({})는 생략 가능하다
```JS
if (false) console.log('항상 실행되지 않음');
```

#### 표현식이 거짓으로 평가될 때
* flase
* undefined
* null
* 0 
* NaN(Not a Number) 
* 빈 문자열("")

```JS
if (false) console.log('거짓');
if (0) console.log('거짓');
if ('') console.log('거짓');
if (null) console.log('거짓');
if (undefined) console.log('거짓');
if (NaN) console.log('거짓');
//출력이 되지 않는다
//즉 거짓이다
```

#### 표현식이 참으로 평가될 때
거짓의 반대
true, 17, 'Park' 등등

```JS
if (true) console.log('진실');
if (17) console.log('진실');//0이 아닌 수
if ('Park') console.log('진실')//빈 문자열이 아닌 것
if ({}) console.log('진실')//null, undefined, NaN이 아닌 모든 객체
if ([]) console.log('진실')//빈 배열을 의미
```

<br>

### else
if에 해당하지 않을 때 실행하는 블록을 만들 수 있다

```JS
const n = 17;

if (n > 19)
{
    console.log('성인');
}
else
{
    console.log('미성년자');
}
```

<br>

### else if
if에 해당하지 않을 때 다른 조건에 해당할 때 실행되는 블록을 만들 수 있다


```JS
const n = 17;

if (n > 19)
{
    console.log('어른');
}
else if (n > 13)
{
    console.log('청소년');
}
else
{
    console.log('어린이');
}
``` 

<br>

### 논리 연산자를 이용한 조건문 평가

<table>
<tr>
<th>키워드</th><th colspan = "2">내용</th>
</tr>
<tr>
<td>&&</td><td>AND</td><td>두 항이 모두 참일 때 참을 반환</td>
</tr>
<tr>
<td>||</td><td>OR</td><td>두 항중 하나의 항이 참일 때 참을 반환</td>
</tr>
<tr>
<td>!</td><td>NOT</td><td>논리식이 참이면 거짓, 거짓이면 참을 반환</td>
</tr>
</table>

<a href = "http://tcpschool.com/php/php_operator_logic" target = "_blnak" title = "참고자료">논리연산자</a>

#### && (AND)
```JS
if  (true && true) console.log('진실');
//참
if (true && false) console.log('진실');
//출력이되지 않는다 = 거짓
```

#### || (OR)
```JS
if (true || false) console.log('진실');
//참
if (false || false) console.log('진실');
//출력이되지 않는다 = 거짓
```

#### ! (NOT)
```JS
if (!(false)) console.log('진실');
//참
if (!(true)) console.log('진실');//참이면 거짓
//출력이되지 않느다 = 거짓
```

<br>

### 논리 연산자를 이용한 조건부 실행
논리 연산자의 특성을 이용해 조건부를 실행시킨다

**표현식은 앞을 먼저 평가하고, 뒤를 평가한다**  
이 특성을 활용할 수 있다

`&&`(AND) 연산자는 `표현식 && 표현식` 둘 다 참일 때만 참이다  
즉 앞 표현식이 참일 때 뒤 표현식을 평가한다
```JS
1 && console.log('뒤 표현식 평가');
//앞 표현식이 참이기 때문에 뒤표현식이 실행된다

0 && console.log('뒤 표현식 평가');
//앞 표현식이 거짓이기 때문에 뒤 표현식은 평가할 필요가 없다
```

`||`(OR) 연산자는 `표현식 || 표현식` 둘 중 하나의 표현식이 참일 때 참이다  
즉 앞 표현식이 거짓일 때 뒤 표현식을 평가한다
```JS
0 || console.log('뒤 표현식 평가');
//앞 표현식이 거짓이기 때문에 뒤 표현식이 실행된다

1 || console.log('뒤 표현식 평가');
//앞 표현식이 참이기 때문에 뒤 표현식은 평가할 필요가 없다
```

<br>

### 삼항 연산자를 이용한 조건부 실행
<a href = "https://velog.io/@daybreak/Javascript-%EC%82%BC%ED%95%AD%EC%97%B0%EC%82%B0%EC%9E%90" target = "_blank" title = "참고자료">삼항 연산자</a>를 이용해 조건부를 실행할 수 있다

```JS
let n = 5;
console.log(n % 5 === 0? '5의 배수입니다'  : '5의 배수가 아닙니다');
// a % b === 0 | a를 b로 나눌때 나머지는 0인가 아닌가

const message = n % 5 === 0 ? '5의 배수입니다' : '5의 배수가 아닙니다';
//message에 문자열이 들어간다
console.log(message);
```

<br>

### switch를 이용한 조건문
<a href = "https://www.everdevel.com/JavaScript/js-switch/" target = "_blank" title = "참고자료">switch</a>문을 활용한 조건문  
switch문에서 case를 실행한 후 break문이 없다면 다른 케이스문들이 시행된다  
이 특성을 활용해 break와 case문의 순서를 조정하여 원하는 코드를 만들어 낼 수 있다  

```JS
let n = 5;  

switch (n % 5)//n을 5로 나눈 값
{
    case 0:{
        console.log('5의 배수입니다');
    }
    default:{//항상 맞는 조건
        console.log(n);
    }
}
//case에 맞는 조건을 실행한 후 break문이 없어서
//다음 케이스문이 쭉 시행된다
```
이런 switch의 break가 없을 때 모든 case문을 실행시키는 특성을 활용
```JS
let n = 5;

switch (n % 5)//n을 5로 나눈 값
{
    case 0:{
        console.log('5의 배수입니다');
        break;//5의 배수일 때 걸러짐
    }
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아닙니다');
        //5의 배수가 아닐 때 case에서 내려와서 출력한다
    default:{//항상 맞는 조건
        console.log(n);
    }
}
```

<br>

## 반복문
프로그래밍에서 반복문은 특정 코드블록을 반복적으로 실행하기 위한 문법이다

불필요한 반복은 하지 말아야 한다
```JS
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

//불필요한 반복을 줄일 수 있다

for (let i = 0 ; i < 5 ; i++)
{
    console.log('안녕하세요');
}
```

자바스크립트에서 반복문에는

키워드 | 요약
---|---
for | 고전적인 for문
for in | 객체의 프로퍼티 키 열거 전용
for of | 이러텁늘 순회 전용
forEach() | 배열 순회 전용 메서드
while | 고전적인 while문
do while | 고전적인 do...while문
Object 객체 메소드| 객체 순회 전용
Array.prototye 메소드| 배열 전용

<a href = "https://curryyou.tistory.com/202" target = "_blank" title = "참고자료">JS 반복문</a>

### for
초기식, 표현식, 증감식을 모두 포함하고 있는 반복문

```JS
for (초기화 ; 반복조건 ; 반복이 된 후 실행되는 코드)  
{  
    반복되는 코드 블록  
}
```

**for문에서 변수 선언시 const를 쓰면 값 변경이 불가능해서 에러가 발생한다**

```JS
for (let i = 0 ; i < 5 ; i++)
{
    console.log('안녕하세요',i);
}
// i 의 값도 함께 출력된다

//여러 개의 초기값, 증감값이 생길 수 있다
for (let i = 0, j = 2 ; i < 5 ; i++, j = j * j)
{
    console.logm('안녕하세요',i,j);
}
```
```JS
for (;;)
{
    d
}
//for을 이렇게 사용할 수 있다
//for안에 조건이 없기 때문에 무한루프가 생기게 된다

for (;;)
{
    console.log('안녕하세요');
    if (Math.random() * 100 > 90)//랜덤한 값을 만들고
    {//랜덤한 값이 90초과의 수가 나올 때 if문을 통과한다
    //즉 랜덤한 값에 의해 종료가 된다
        break;
    }
}
```

#### break
반복문에서 즉시 탈출하고 싶을 때 블럭안에서 `break` 를 실행시킨다

```JS
for (int i = 0 ; i < 5 ; i++)
{
    console.log('안녕하세요');
    break;
}
//break를 만나고 반복문을 탈출한다
```

#### continue
반복되는 블럭 안에서 `continue` 를 만나면 거기서 해당 블럭을 종료시킨다  
그리고 다음 반복이 있으면 다음 반복으로 넘어간다

```JS
for (int i = 0 ; i < 5 ; i ++)
{
    console.log('안녕');
    continue;
    console.log('하세요');
}
//continue를 만나고 해당블럭종료, 다음반복시작 하기 때문에
//'하세요' 는 출력되지 못한다
```

<br>

### for of
**<a href = "https://helloworldjavascript.net/pages/260-iteration.html" target = "_blank" title = "참고자료">iterable</a> 한 객체(ex 배열)에 모두 사용할 수 있다**

```JS
for (const i of [1 , 2 , 3])//배열의 요소가 하나하나 i 에 들어간다
{
    console.log(i);
}
//1, 2, 3 이 출력된다
```

<br>

### for in
**모든 프로퍼티 에 모두 사용할 수 있다**  
그래서 객체 안에 있는 프로퍼티 하나하나를 for in으로 돌릴 수 있다 

```JS
Object.prototype.test = function() {};
//프로토타입 안에 프로퍼티를 설정해 놓으면
//프로토타입 안에있는 test도 함께 나오게 되서
//의도한대로 동작하지 않을 수 있다
for (const i in {a : 1, b : 2, c : 3})
{
    console.log(i);
}
//a, b, c 가 출력된다
```

<br>

### for Each
**배열의 각 요소에 대해 순서대로 함수를 한 번 호출한다**

<a href = "https://www.w3schools.com/jsref/jsref_foreach.asp" target = "_blank" title = "참고자료">JS for each</a>

```JS
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item)
{
    sum += item;
}
//배열의 값들을 sum 에 다 더한다
console.log(sum);
```
<br>

### While
조건이 참일 때 까지 계속 실행하는 반복문이다  
조건은 문장안이 실행되기 전 참, 거짓을 판단한다

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while" target = "_blank" title = "참고자료">JS while</a>

```JS
while (조건)  
{  
    조건이 거짓이 될 때까지 실행  
}  
```

```JS
while (true)//무한루프
{
    console.log('안녕하세요');
    if (Math.rnadom() * 100 > 90)//100까지 랜덤한 수를 뽑음
    {//랜덤한 수가 90초과일 때 break문을 만남
        break;
    }
}
```

<br>

### Do While
한 번 실행한 후 조건이 참일 때 까지 실행하는 반복문
```JS
do {

} while (조건);
```
**while과 같지만 한 번은 꼭 실행된다**
```JS
do {
    console.log('안녕하세요');//한 번은 꼭 실행된다
} while(Math.random() * 100 < 90);//랜덤한 수가 90초과일 때까지 실행
```

<br>

## 함수
특정 코드를 하나의 명령으로 실행할 수 있다

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions" target = "_blank" title = "참고자료">JS 함수</a>

### 함수 선언

함수를 만들 때 사용하는 키워드
```JS
function hello()
{

};
```
함수도 객체 중 하나이다
```JS
//이름이 hello 인 함수를 선언
function hello()
{
    console.log('hello');
};
console.log(hello, typeof hello);
//함수가 실행 = hello가 출력
//함수의 타입은 function 이 출력된다 = 함수는 객체 중 하나이다
//이를 표준내장객체 라 한다
```
함수의 매개변수
```JS
//함수의 매개변수
//함수를 호출할 때 값을 변경
//함수에서 사용할 변수
function nice(name)
{
    console.log('nice', name);
};
console.log(nice('Park'));
```
함수에서 `return` 키워드를 사용하여 함수의 결과물을 지정할 수 있다
```JS
let a = 1;
let b = 5;

function add (A , B)//함수에 들어오는 값을
{//대문자 A, B로 사용
    return A + B;
};

const sum = add(a,b);
console.log(sum);
```

<br>

### 함수 표현식
함수 표현식에 의해서 함수가 만들어 질 수 있다  
이같은 함수를 **익명**이라고 한다

```JS
//이름이 meet인 함수 선언
const meet = function()
{
    console.log('meet');
};

console.log(meet, typeof meet);
//함수가 출력된다
//function이라는 타입이 출력된다
```
매개변수
```JS
const you = function(name)
{//매개변수를 할당한다
    console.log('you',name);
}
```
리턴
```JS
const you = function(name)
{
    return `you &{name}`;
}
```

<br>

#### + 선언적 function(이름을 function뒤에 적는 방식) 과 익명 함수(함수에 이름을 붙이지 않는 방식) 의 차이점
선언적 방식은 사용을 먼저 할 수 있고,  
익명함수는 사용을 먼저하지 못한다

선언적방식
```JS
//선언적 방식
function hello1()//함수선언
{
    console.log('hello1');
}

hello1();//사용

//hello1는 위에 선언되었고 사용은 밑에서 사용됐다
//함수선언과 사용의 위치를 바꿔본다

hello2();

function hello2()
{
    console.log('hello2');
}

//함수선언과 사용의 위치를 바꾸어도 정상작동된다
```
익명함수
```JS
//익명함수
const hello3 = function()//함수선언
{
    console.log('hello3')
}

hello3();//사용

//hello3는 위에 선언되었고 사용은 밑에서 사용됐다
//함수선언과 사용의 위치를 바꿔본다

hello4();

var hello4 = function()
{
    cnosole.log('hello4');
}
//함수가 아니라 인식하고 에러가 뜬다
//호이스팅에 의해 함수만 hello4위에 선언된 효과가 나타나서
//함수라 인식

hello5();

const hello5 = function()
{
    console.log('hello5');
}
//const는 호이스팅이 되지 않기 때문에
//hello5는 인식하지 못하고 에러가 뜬다
```

<br>

### 생성자 함수로 함수를 만드는 방법
function에 new를 붙여 함수를 만들고 그 함수를 특정 변수에 넣는 방식   
익명함수를 만들어 붙이는 것과 가깝고 잘 쓰이진 않는다

```JS
//new Function(인자1, 인자2, ... , 함수의 바디);
const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1 ,2 ,3 ));
//6이 출력된다

//선언적방식이 아니기 때문에 위에서 사용하면 에러가 뜬다

console.log(plus(5,6));
const plus = new Function('a', 'b', 'return a+b');
```

<br>

#### function 과 new function(); 의 차이점
전역변수를 사용하려면 `new function();` 을 사용,  
그냥 자신의 윗 변수를 사용하려면 `function` 을 사용한다

new function사용
```JS
{
    const a = 1;
    const test = new Function('return a'); 
    console.log(test());
}
//a 를 인식하지 못해서 에러가 난다


global.a = 0;

{
    const a = 1
    const test = new Function('return a');
    console.log(test());
}
//전역변수(global)의 값 0이 출력된다

//전역변수의 값을 가져와 쓰려면
//new function(); 형태를 사용할 수 있다
```
function사용
```JS
global.a = 0;
{
    const a = 2;
    
    const test = function()
    {
        return a;
    };

    console.log(test());
}
//전역변수 a 의 값인 0 이 아닌
// 2가 출력된다
```

<br>

### arrow function
es6에서 생겼다   
선언적 방식으로 사용할 수 없기 때문에 항상 익명함수이다  

```JS
const hello1 = () =>
{
    console.log('hello1');
};
```
매개변수가 하나일 때 괄호 생략 가능
```JS
const hello2 = /*(*/name/*)*/ => 
{
    console.log('hello2',name);
}
```
리턴
```JS
const hello4 = name =>
{
    return `hello4 ${name}`;
}

// =

const hello5 = name => `hello5 ${name}`;
//이와같이 간략하고 보기쉬운 형태로 바꿀 수 있다
```

<br>

### 생성자 함수
객체를 만들어 낼 때 `function`을 사용해 틀을 만들고,  
그 틀로 `new`를 사용해서 사용할 수 있는 객체로 만들 수 있다

```JS
function Person(name,age)
{
    this.name = name;
    this.age = age;
    //this는 객체로 만들어졌을 때
    //객체를 가리키는 역할을 한다
}

const a = new Person('Park',17);
console.log(p,p.name,p.age);

const b = new Person('BK',17);
console.log(b,b.name,b.age);

//이렇게 다른 객체를 함수를 사용해 만들어낼 수 있다
```
this가 객체로 만들어 졌을 때 객체를 가르키는 역할을 하기 때문에  
arrow function을 만들었을 때 arrow function에는 함수안에 this가 생기지 않기 때문에  
**arrow function으로는 새로운 객체를 만들어내는 생성자 함수로 사용하지 못한다**
```JS
const Cat = (name, age) =>
{
    console.log(this);
    this.name = name;
    this.age = age;
}
const c = new Cat('냥이',1);
//Cat이라는 arrow function은 안에 this를 가지고 있지않아서
//객체에서는 this에 값이나 함수를 프로퍼티로 넣어 줄 수 없기 때문에 
//에러가 뜬다
```

<br>

#### 함수 안에서 함수를 리턴
만들어진 함수는 객체이기 때문에 a,b에 할당하듯이 할당할 수 있다  
즉 함수안에서 함수를 만들어서 리턴할 수 있다

```JS
function plus(base)
{
    return function(num)
    {

    }
    //함수를 사용할 때 받은 인자와
    //함수를 실행해서 만든어진 함수의 인자는
    //시간상으로 다르다
}

const p = plus(5);
console.log(p(10));//plus에 5를 넣음

//즉 처음넣은 5와 아래에서 넣은 10을 합쳐서
//15가 출력된다

const P = plus(7);
console.log(P(8);
//15가 출력된다
```

<br>

#### 함수를 호출할 때, 인자로 함수를 사용
마찬가지로 함수는 객체이기 때문에 인자와 함수를 넣어 안에서 사용할 수 있다

```JS
function hello(c)
{
    console.log('hello');
    c();
}

hello(function()
{
    console.log('콜백')
});
```

<br>
<<<<<<< HEAD

## 객체
객체(object)는 함수 또는 클래스로 틀을 만드는 것이고  
그 틀에서 객체(object)를 하나씩 찍어내게 된다  
이 객체(object)를 인스턴스라고 부른다  

객체를 만들어내는 틀의 역할을 하는 함수를 생성자함수라 한다
```JS
//기본형태
function 틀(){} => new 틀()
```

```JS
function A(){}

const a = new A();
console.log(a, typeof a);
//A {}  "object" 가 출력된다
//A라는 생성자함수를 통해 만든 객체의 모습은
//{} = 아무것도 없다
//객체의 타입은 object이다

console.log(A());
//new를 붙이지 않고 함수를 실행하면 생성자함수가 아니기 때문에
//함수 A를 실행하고 리턴값을 가져오게된다
//리턴값이없다 = undefined
```
생성자함수로 생성하면서 객체내부로 데이터를 넣을 수 있도록  
밖에서 생성자 함수를 호출할 때 인자를 넣어서 처리를 해야한다
```JS
function B(name, age)
{
    console.log(name,age);
};
//인자로 넣을 변수를 처리한다

const b = new B();
//B라는 생성자함수를 호출할 때  
//인자값을 넣지 않으면 undefined가 찍힌다

const C = new B('Park',17);
//B함수를 호출하면서 B함수 안의 console.log 에 의해 인자가 출력된다
```
#### 객체에 속성 추가하기
객체는 중괄호`{}`로 만들어지는데 그 안에 사용할 데이터, 함수 등을 넣을 수 있다  
그렇게 들어간 것을 **프로퍼티** 라 하고 그 프로퍼티가 값을 가지고 있는 것이다  

값을 속성으로 넣기
```JS
//값을 속성으로 넣기
function A()
{
    //{name : 'Park'} 로 값이 들어가게 하려면
    this.name = 'Park'//this가 객체를 의미한다
}

const a = new A();//객체생성

console.log(a)//출력
```
함수를 속성으로 넣기
```JS
function B()
{
    this.hello = function()
    {
        console.log('hello');
    };
}

new B().hello();
//hello가 출력된다 
```

<br>

### Object로 객체 만들기
object는 자바스크립트에서 가장 기본이되는 객체이다  
`new object` 를 활용해 객체를 만들 수 있다  
권장되는 방법은 아니다
```JS
const a = new Object();
//new Object를 호출하고 a라는 변수는 객체가 된다
console.log(a, typeof a);
//{} 와 'object' 가 출력된다
```
```JS
const b = new Object(true);
console.log(b,typeof b);

//Boolean 생성자 함수에서 true라는 값을 가진
//object형의 객체가 나오게 된다
```
```JS
const c = new Object({name : 'Park'});
console.log(c, typeof c);
//name : 'Park' 이고 object형의 객체가 나오게 된다
```

<br>

### 프로토타입 체인
자바스크립트는 프로토타입(prototype)으로 모든 객체들을 연결해서 표현할 수 있다

```JS
function Person(name,age)
{
    this.name = name;
    this.age = age;
    this.hello = function()
    {
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('Park', 17);

p.hello();//p객체의 hello함수를 실행하면
//hello 와 이름(Park), 나이(17)가 출력된다


console.log(p.toString());//작성하지 않은 함수이다
//에러가뜨지않고 [object Object] 가 출력된다
//즉 작성하지 않았지만 호출이 가능하다

console.log(Person.prototype);//이 prototype도 없는 속성이다
//하지만 에러가 뜨지않고 출력이된다
console.log(Person.prototype.toString);
//역시 에러가 뜨지않고 출력이 된다

//이는 프로토타입과 관련되어있다

console.log(p instanceof Person);
console.log(p instanceof Object);
//둘 다 true가 나온다
//그 뜻은 p라고 하는 객체는 
//Person이라는 생성자 함수로 나왔고
//그 Person은 Object로부터 프로토타입 체인을 받아온
//후에 내가 설정한 함수, 프로퍼티를 가지고 있는 형태가된다
```
자바스크립트에서 프로토타입은 중요한 개념 중 하나이다  
보통 class 라는 키워드를이용해 객체를 확장할 수 있는 형태인데  
**자바스크립트는 원래 프로토타입을 이용한 상속방식을 채택했다**

프로토타입을 이용한 객체 확장
```JS
function Person(){}
Person.prototype.hello = function()
{
    console.log('hello');
}

function Korean(region)
{
    this.region = reigon;
    this.where = function()
    {
        console.log('where', this.region);
    }
}

Korean.prototype = Person.prototype;

const k = new Korean();

const k = new Korean('Deagu');
//객체의 프로토타입이 Person이로부터 나온다
//즉 k.hello, k.where 도 출력할 수 있따
k.hello();
k.where();
//부모의 객체를 자식의 객체 어딘가에 프로퍼티로 할당하는 방식이다

console.log(k instanceof Korean);
//가장 가까이에 있는 것은 Korean이다
console.log(k instanceof Person);
//그 포로토타입을 가지고있는 Person은 프로토타입 체인은이다
console.log(k instanceof Object);
//Person은 Object가 주는 것들을 프로토타입으로 가지고 있다
```
이와같이 자바스크립트에서 객체는 프로토타입 형식으로 체인이 되서 확장된 함수들을 사용할 수 있다

### 객체 리터럴
객체를 만들 때 값을 객체로 직접 작성해서 그 값이 객체로 만들어지는 것이 **객체 리터럴** 을 사용한 객체 생성 방법이다

```JS
const a = {};
console.log(a, typeof a);
//function으로 만든 것과 같이
//{} 와 object 타입이 출력된다

const b = {
    name:'Mark'
}
console.log(b,typeof b);    
//객체의 형태가 출력되고 object타입이 출력된다

//프로퍼티에는 값뿐만아니라 객체, 함수 등이 올 수 있다
//함수를 프로퍼티에 넣기
const c = {
    name : 'Park',
    hello1()
    {
        console.log('hello1', this)
    },
    //다른 방법으로 함수를 만들 수 있다
    //프로퍼티는 함수 표현식을 가지는 형식
    hello2:function()
    {
        console.log('hello2', this);
    },
    //arrow function형식
    hello3: () => 
    {
        console.log('hello3', this);
    }
}

c.hello1();
c.hello2();
c.hello3();

//hello1 과 hello2는 
//{name: "Park", hello1: ƒ, hello2: ƒ, hello3: ƒ} 가 출력된다

//hello3 는 {} 출력되는데 그 이유는 
//hello1 과 hello2 는 이 전체 객체를 this라고 인식하지만
//hello3 는 arrow function으로 만들어서 this가 객체를 가르키지 않기 때문이다
```

<br>

### 표준 내장 객체
객체가 이미 런타임 환경에 만들어진 것이다  
대표적인 예는 object, new function으로 새로운 객체를 만드는 것이다  

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects" target = "_blank" title = "참고자료">표준 내장 객체</a>

```JS
//대표적인 표준 내장 객체인 array

const a = new Array('red', 'black', 'white');
//array란는 객체를 생성자 함수로 사용
console.log(a, typeof a);
//대괄호로 표현이 되고 'object'타입이 출력된다
console.log(a instanceof Array);
console.log(a instanceof Object);
//a 는 Array, Object

const b = ['red', 'green','yellow'];
//array로 new를 하는 것 말고도 리터럴로 사용가능하다

console.log(b, typeof b);
//똑같이 위처럼 나온다
console.log(b instanceof Array);
console.log(b instanceof Object
//마찬가지로 instanfeof가 array, object이다

console.log(b.slice(0,1));
//slice는 array에 들어있는 함수이다
//slice(0,1) 은 0번째부터 1개만 잘라온다 = red 가 출력
```

<br>

## 클래스
클래스는 자바스크립트 es6에 새로추가된 기능이다  
기존의 프로토타입기반의 방식을 조금더 확실하게 사용할 수 있다  

클래스를 만드는데는 두 가지가 있다
* 선언적 방식
* 클래스 표현식

선언적 방식
```JS
//선언적 방식
class A {}
console.log(new A());

//클래스 표현식을 변수에 할당
const B = class {};
console.log(new B);
```
**선언적 방식이지만 함수처럼 호이스팅은 일어나지 않는다**
```JS
new C();
class C {}
//인식하지 못한다
```

### 클래스 생성자
함수를 통해 객체를 만들 때 함수에 인자로 넣어  
외부에서 객체를 만들 때 안으로 넣을 수 있다

클래스에서도 constructor(생성자)를 활용해 초기값을 객체 안으로 넣을 수 있다

```JS
class A{}

console.log(new A());

class B
{
    constructor()//생성할 때 실행이 되도록 하는
    {
        console.log('constructor');
    }
}

console.log(new B());//constructor에도 인자를 표현하지 않았기 때문에
//만들 때도 그대로 만들어 준다

//A객체가 만들어지고
//B객체가 만들어질 때 constructor가 출력된다
```
```JS
class C
{
    constructor(name.age)
    { 
        console.log('constructor',name,age);
    }
}
console.log(new C('Park',17));


console.log(new C());
//name, age를 넣지 않으면 undefined 가 뜬다
```

<br>

## 멤버 변수

```JS
class A
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    //이렇게 this를 넣으면
    //객체를 생성해서 name과 age를 넣으면
    //그 객체의 프로퍼티값으로 들어가게 된다
}

console.log(new A('Park',17));

//class의 필드를 바로 써주는 문법은
class B
{
    name;
    age;
}
//런타임에따라 다른 결과가 나온다

class C
{
    name = 'no name';
    age = 0;

    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
}
console.log(new C('Mark', 37));
```
멤버 함수
```JS
class A
{
    hello1()
    {
        console.log('hello1',this);
    }
    //이처럼 함수의 이름, 괄호, 중괄호로 만드는 방법이 있고

    hello2 =  () =>{
        console.log('hello2',this);
    }
    //변수 이름에 함수를 할당하는 방법
}

new A().hello1();
new A().hello2();
//hello1, hello2가 정상적으로 출력되었고
//this로 인해 A라는 class로 만든 객체라는 의미가 출력된다

//이런 멤버 함수는 그 안에서 멤버 변수를 얻어 바로 사용할 수 있다
class B
{
    name = 'Park';

    hello1() {
        console.log('hello',this.name);
    }
}

new B().hello();
```
### get, set 

```JS
class A{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }//문자열을 ! 세 개를 추가
}

const a = new A();
console.log(a);
//_name 이 'no name'으로 출력된다

a.name = 'Park';
//a.name에 Park라고 하는 문자열이
//set되게 되는데 그래서 set함수가 불리게 된다
//불리면 !세 개가 추가가 된다
console.log(a);

console.log(a.name);
//get되게 돼서 !!! + @@@ 형태로 나온다
console.log(a._name);
//문법적으로 강제는 아니지만
// _ (언더바) 는 내부적으로만 사용할 경우에는 _ 단다

//보통 _ 를 바꾸지 않고 get과 set을 설정해서 사용한다
```
readonly
<!-- 페이지 -->

### static 변수, 함수
객체가 아닌 클래스의 변수와 함수

```JS
class A{
    static age = 17;
    static hello(){
        console.log(A.age);
        //클래스 이름으로 직접 값을 부를 수 있다
    }
}

console.log(A , A.age);
A.hello();

class B{
    age = 17;
    static hello(){
        console.log(this.age);
    }
}

console.log(B,B.age);
B.hello();
//B.age = undefined
//B.hello를 호출했을 때 this를 출력하기 때문에 undefined

class C{
    static name = "이 클래스의 이름은 C가 아니다";
}

console.log(C);
//static name 이라는 변수가 class의 이름을 뜻해서
//함수의 이름이 "이 클래스의 이름은 C가 아니다" 가 된다
```
### extends
이미 만들어진 클래스를 활용

상속을 할 때는 extends 라는 키워드를 사용한다
```JS
class Parent{//부모 클래스
    name = 'Park';

    hello(){
        console.log('hello', this.name);
    }
};

//이 부모 클래스를 상속받는 자식 클래스
class Child extends Parent{};//Child는 Parent를 상속 받는다


//이 부모클래스와 부모글래스를 상속받은 클래스를 비교
const P = new Parent();
const C = new Child();
console.log(P,C);
//멤버 변수가 그대로 들어온다

//부모의 멤버 함수에 그대로 접근 가능하다
c.hello();
c.name = 'Anna';
c.hello();
```
### override
부모에서 구현된 함수나 변수가 자식에게 똑같은 이름으로 구현시키면 **오버라이드** 된다고 한다  
자식이 만들어 놓은 함수가 부모의 함수를 바꾸거나 추가하는 결과를 가지게 된다
```JS
class Parent{
    name = 'Park';

    hello(){
        console.log('hello', this.name); 
    }
}
//이렇게 부모가 가지고 있는 함수를
class Child extends Parent{//자식이 상속받은 후
    age = 17;

    hello(){
        console.log('hello',this.name, this.age);
    }//함수를 변경한다
}

const P = new Parent();
const C = new Childe();

console.log(p,c);
//부모는 이름, 자식은 이름,나이가 출력된다

c.hello();
//자식의 함수가 출력된다

c.name = 'BK';
c.hello();
//이름이 BK로 바뀌고 나이가 출력된다
```
### super
클래스의 상속자가 생성자에서 추가하고자 할 때 사용할 수 있다
```JS
class Parent{
    name;

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{
    age;

    constructor(name,age){
        super(name);
        //부모에서 하는 일을 하고 자식이 하는 일을 할 수 있도록
        //super를 호출해야 한다
        this.age;
    }

    hello(){
        console.log('hello', this.name, this.age);
    }
}

const P = new Parent('Park');
const C = new Child('Park',17);

console.log(p,c);
//부모와 상속받은 자식에 다르게 출력된다
c.hello();
//이름과 나이가 둘 다 출력된다
```
### static
클래스안에 있는 static변수를 상속
```JS
class Parent{
    static age = 17;
}

class Child extends Parent{}

console.log(Parent.age, Child.age);
//static변수도 상속이 된다
``` 
부모클래스가 자식클래스에게 상속이 이 되고
부모클래스가 `new` 키워드를 통해 instance로 만들 수 있다
자식클래스가 `new` 키워드를 통해 instance로 만들 수 있다
instance로 만들어진 부모도 instance로 만들어진 자식에게 상속이 된다

<br>

## Promise
함수를 호출하고 끝나는 동안에도 프로그램이 진행되도록 할 수 있다   
이런 비동기적인 상황에서 코드를 명확하게하고 실행되도록 한다
```JS
//생성자를 통해 프로미스 객체를 만들 수 있다
//생성자의 인자로 executor라는 함수를 이용한다

//excutor 함수는 resolve 와 reject 를 인자로 가진다
//resoleve 와 reject는 함수이다

new Promise(/*executor*/(resoleve, reject)) => {};
``` 
#### pending(대기)
```JS
//생성자를 통해 프로미스 객체를 만드는 순간
//pending(대기) 상태가 된다

nwe Promise()resolve, reject) => {});
//이 때 pending상태에 놓이게 된다
```
#### fulfilled(이행,실행)
```JS
//pending상태에 들어간 후 
//executor함수 인자 중 하나인 resoleve함수를 실행하면 
//fulfilled(이행,실행) 상태가 된다
new Promise((resolve, reject)) => {
    resolve(); //fulfilled상태가 된다
}
```
#### rejected(거부)
```JS
//pending상태에 들어간 후
//executor 함수 인자 중 하나인 reject함수를 실행하면 
//rejected(거부) 상태가 된다
new Promise((resoleve,reject)) => {
    reject();//rejected상태가 된다
}
```
<img alt = "JS 프로미스 패턴" title = "참고자료" src = "https://t1.daumcdn.net/cfile/tistory/99BAA9375AFEF1F726" height = "350">

new Promise 로 `executor` 함수를 인자로 받아서 pending상태로 되고  
이 상태에서 비동기적인 상황이 일어난다  
이 비동기적인 상황이 일어날 때 동안은 pending상태로 유지한다  

성공적으로 일을 끝내면 fulfilled 상태에 가도록하는 `resolve` 함수를 호출한다  
성공적으로 일을 끝내지 못하면 rejected 상태에 가도록 하는 `reject` 함수를 호출한다


then
```JS
//p 라는 프로미스 객체를 1000ms 후에 fulfilled가 되도록 하기

const p = new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다
        resolve();//fulfilled 상태가 된다
    }, 1000);//1000ms 뒤에 실행된다
});

p.then(() => {
    //resolve가 불린, fulfilled상태가 될 때 then으로 넘어가서
    //이 함수가 실행된다
    //즉 1초 후에 실행된다
    console.log('1000ms 후에 fulfilled 됩니다');
});
//즉 callback을 작성하는 공간이 된다

//프로미스 객체가 만들어지는 순간과 사용하는 순간의
//차이가 크지 않아서 문제가 되지 않지만
//실제로 사용 할 때는 보통
//사용하는 곳에서 만들어서 엮어주는 작업을 하게 된다
```
```JS
//사용하는 곳에서 만들어서 엮기

function p(){
    return new Promise((resolve,reject) => {
    //return해준다
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다
        resolve();//fulfilled 상태가 된다
    }, 1000);//1000ms 뒤에 실행된다
});
}

//then을 설정하는 시점을 정확히하고,
//함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기위해
//프로미스 객체를 생성하면서 리턴하는 함수(p)를 만들어 함수(p) 실행과 동시에 then을 설정한다

//마찬가지로 정상적으로 fulfilled 상태로 넘어갔을 때
//실행할 코드
p().then(() =>{
    console.log('1000ms 후에 fulfilled 됩니다');
});
```
catch
```JS
function p(){
    return new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다

        reject();//reject 상태가 된다

    }, 1000);//1000ms 뒤에 실행된다
});
}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다');
}).catch(() => {
    console.log('1000ms 후에 rejected 됩니다');
});

//이런 then 과 catch를 사용해 비동기함수가
//정상적, 비정상적 으로 종료됐을 때의
//행동을 성정할 수 있다
```
executor의 `resolve` 함수를 실행할때 인자를 넣어 실행하면, then의 callback함수의 인자로 받을 수 있다
```JS
function p(){
   return new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다
        
        resolve('hello');//hello를 보낸다
        //resolve를 호출하면서 메시지,객체 등을 담아서 보낼 수 있다

    }, 1000);//1000ms 뒤에 실행된다
});
}

p()
.then(message => {
    console.log('1000ms 후에 fulfilled 됩니다',message);
    //성공적으로 실행 된 후 message(hello)가 같이 출력된다
})
.catch(() => {
    console.log('1000ms 후에 rejected 됩니다');
});
```
마찬가지로 executor의 `reject` 함수를 실행할때 인자를 넣어 실행하면, catch의 ccallback함수의 인자로 받을 수 있다
```JS
function p(){
   return new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다
        
        reject('error');//error를 보낸다
        //reject를 호출하면서 메시지,객체 등을 담아서 보낼 수 있다

    }, 1000);//1000ms 뒤에 실행된다
});
}

p()
.then(message => {
    console.log('1000ms 후에 fulfilled 됩니다',message);
    //성공적으로 실행 된 후 message(hello)가 같이 출력된다
})
.catch(reason => {
    console.log('1000ms 후에 rejected 됩니다',reason);
});
```
finally  
then이나 catch를 실행하고 더 최종적으로 해줄일이 있다면 finally를 사용해서 해야할 일을 설정할 수 있다
```JS
function p(){
   return new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        //setTimeout 함수는 특정시간 이후에
        //실행되는 함수를 설정할 수 있다
        
        reject('error');//error를 보낸다
        //reject를 호출하면서 메시지,객체 등을 담아서 보낼 수 있다

    }, 1000);//1000ms 뒤에 실행된다
});
}

p()
.then(message => {
    console.log('1000ms 후에 fulfilled 됩니다',message);
    //성공적으로 실행 된 후 message(hello)가 같이 출력된다
})
.catch(reason => {
    console.log('1000ms 후에 rejected 됩니다',reason);
})
.finally(() => {
    console.log('end');
});
//end가 출력된다
```
비동기작업을 할 때 보통 callback의 연속으로 작업을 했다  
callback함수를 인자로 넣어 로직이 끝나면 callback함수를 호출한다  
이런 경우 함수가 아래로 진행되지않고, callback함수 안으로 진행된다
```JS
function c(callback){
    setTimeout(() =>{
        callback();
    },1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다');
})
//이는 한 번의 비동기 작업 후 callback이 되는 것이다

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다');
        })
    });
});
//3번 함수를 불러서 3초가 된다

//이런 경우에 callback헤드라 부르는 이유가 함수가 아래로 진행되지 않고
//callback함수가 안으로 중첩되어 들어가게된다
```
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있다  
then에 함수를 넣는 방법에는 여러가지가 있다
```JS
function p(){
    return new Promise((resolve,reject) => {
        setTimepout(() =>{
            resolve();
        },1000);
    })
}

p().then(() => {
    return p();
})
//return p로 p함수를 실행하면
//다시 새로운 프로미스 객체를 만들어 리턴하게 된다
.then(() => p())
//arrow function은 리턴을 바할 때
//중괄호를 생략할 수 있다

//즉 p가 한 번 불려서 (1초)
//안의 리턴에서 한 번 불려서 (2초)
//then에서 또 p 를 불러서 (3초) 후에 
.then(p)//이곳에 오게되고
.then(() =>{
    console.log('4000ms 후에 fulfilled 됩니다');
    //4초에 찍힌다
})

//이런식으로 then함수에 프로미스 객체를 return하는 방법을 통해
//이전에 callback했던것처럼 들여쓰기로 안으로 들어가는 것 보다
//순차적으로 체이닝해서 처리가 가능하다

//조금더 보기 편하다
```
지금까지 프로미스객체를 만들 때 생성자(new)를 사용해서 만들었는데  
다른 방법들이 있다
```JS
//Promise라는 객체의 resolve라는 함수를 실행하면서 
//프로미스를 만든다
Promise.resolve(/*value*/);

//value에 넣을 수 있는 것은 크게 2가지다
//프로미스객체를 바로 넣을 수 있다
//일반 값을 넣을 수 있다

//프로미스객체넣기
Promise.resolve(new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('foo');
    },1000);//프로미스 객체가 되고 이 
    //프로미스 객체를 resolve의 인자인 value에 넣는게 된다
}),
).then(data => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다',data,);
});

//객체를 넣는 자리에 value를 넣는 것
Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled 됩니다',data);
});

//1초뒤 실행 과 같은 것이 없어서 fulfilled가 먼저 출력된다

//프로미스 객체의 경우에는 프로미스 객체가 resolve 된 후에 결과를 
//then에 넘겨서 처리하게된다
```
promise.reject를 사용하면 catch로 연결된 rejected 상태로 변경된다
```JS
Promise.reject(/*value*/);

Promise.reject(new Error('reason'))
.then(error => {})
.catch(error => {
    console.log(error);
});
//에러가 뜬다
```
Promise.all 을 사용하기  
여러개의 프로미스 객체를 생성하고 배열로 만들어 인자로 넣고  
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행된다  
then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다
```JS
function p(ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },ms);
    })
}

Promise.all([p(1000), p(2000), p(3000)]).then((messages) =>{
    console.log('모두 fulfilled 된 이후에 실행됩니다',messages);
})
//각각이 모두 fulfilled 된 이후에,
//즉 3초(1+2) 이후에 출력된다
```
Promise.race 을 사용하기  
Promise.all은 모두 fulfilled 되었을 때 실행되는데  
Promise.race는 그중 가장 빠른게 먼저 fulfilled 되었을 때 실행된다
```JS
function p(ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then((message) =>{
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다',message);
})
//가장 빠른 하나가 fulfilled 된 이후에,
//즉 1초 이후에 출력된다
```
자바스크립트에서 비동기를 처리하기 위해 가장 기본이 되는 개념이 promise 이다

<br>

## Async - Await
`async` 는 함수 앞에 위치한다
```JS
async function 함수이름(){}
const 함수이름 = async () => {}
```
이런 형태로 사용할 수 있다

이런 `async function` 를 사용하면 Promise 를 좀 더 간편하게 사용할 수 있다

```JS
//Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

//Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log('${ms} ms 후에 실행된다');
})

//Promise 객체를 리턴하는 함수를 await 로 호출하는 방법
await p(1000);
console.log(`${ms} ms 후에 실행된다`);
//await를 붙이면 실제로는 비동기적인 처리를 보냈지만
//비동기적인 처리가 끝날 때 까지 다음줄로 넘어가지 않는다

//에러가 뜬다
//await 을 사용하는 경우 async 함수 안에서 사용되어야 하기 때문이다
```
```JS
//async 함수를 사용해서 await 사용
function p (ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        },ms);
    });
}

//메인이 만들자마자 실행되는형태이기 때문에
(async function main(){
const ms = await p(1000);
console.log(`${ms} ms 후에 실행된다`);
})();

//async 함수가 있을 때 함수를 실행하면
//안에있는 로직이 모두 실행될 때 까지 프로그램이 종료가 되지 않는다
//한줄한줄 내려갈 때 await가 있을 때
//비동기처리가 끝날 때 까지 기다렸다가 정상적으로 처리가 되면(resolve)
//resolve에 넘어온 값을 받아서 계속 이어서 진행하게 된다

//async - await 가 좋은점은 비동기 처리를
//코드에서 밑으로 흘러가게 표현할 수 있다는 점이다
```
프로미스 객체가 rejected 될 때
```JS
function p (ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        },ms);
    });
}

(async function main(){
    try{
    const ms = await p(1000);
    } catch (error) {
        console.log(error);
    }
})();
//에러 객체가 출력된다
```
프로미스 객체를 `new` 로 생성해서 리턴하는 형태의 함수를 사용했었는데  
`async function` 자체를 사용할 수 있다
```JS
function p (ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        },ms);
    });
}

async function asyncP() {
    return 'Park';
} 

//async키워드가 붙은 함수는 리턴되는 값에 
//promise.resolve 함수로 감싸서 리턴하기 때문에
//async가 달린 함수를 await에서 호출할 수 있다

(async function main(){
    try{
    const name = await asyncP();

    //promise.resolve를 통해 resolve 되기 때문에
    //resolve는 값이 들어오면 그 값이 바로 resolve 된다
    console.log(name);

    } catch (error) {
        console.log(error);
    }
})();
//name이 출력된다
```
연속된 `Promise` 된 처리와  
연속된 `async-await` 으로 된 처리의 비교
```JS
//Promise로 처리할 때
p(1000)
.then(() => p(1000))
.then(() => p(1000))
.then(() => {
    console.log('3000ms 후에 실행');
});

//async-await로 처리할 때
(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    consol.log('3000ms 후에 실행');
})();

//async-await을 사용하면 로직의 이동이 순서대로 진행된다
```
`Promise.all` 또는 `Promise.race` 일 때 `async-await` 로 처리하기
```JS
function p(ms){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

//Promise.all
(async function main(){
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(results);
})();
//3초 후에 배열의 값들이 출력된다

//Promise.race
(async function main(){
    const results = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(results);
})
//1초 후에 값들이 출력된다
```
















