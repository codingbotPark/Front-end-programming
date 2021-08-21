>웹사이트 <a href= "https://learnjs.vlpt.us/basics/01-hello-javascript.html" target = "_blank" title = "참고자료">벨로퍼트와 함께하는 모던 자바스크립트</a> , **패스트캠퍼스 JavaScript (이웅재 강사)** 와 여러자료들을 참고

<br>

# JavaScript
JavaScript는 객체 기반의 스크립트 프로그래밍 언어이다  
주로 웹브라우저에사용되고, 이제는 단순히 웹페이지에서만 국한되지 않고 Node.js 를 활용해 서버프로그래밍에도 사용되고 있다

## 역사
'넷스케이프 커뮤니케이션스' 라는 회사는 웹이 더 동적으로 변화할 필요를 느끼고 개발되었다  

원래 모카(Mocha)라는 이름으로 개발되었으나 라이브스크립트(liveScript)로 불렸고, 나중에 **자바스크립트** 로 이름이 바뀌었다

<a href = "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#%EC%97%AD%EC%82%AC" target = "_blank" ttle = "참고자료">위키백과\<JavaScript></a>

<br>

# 문법
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