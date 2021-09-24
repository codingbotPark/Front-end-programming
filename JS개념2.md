> 유튜브 <a href = "" target = "_blank" title = "참고자료">생활코딩</a> 의 <a href = "https://www.youtube.com/watch?v=PZIPsKgWJiw&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU&index=1" target = "_blank" title = "참고자료">자바스크립트 입문수업</a> 과 여러 자료들을 참고

<br>

# JAVASCRIPT

## 웹 프로그래밍이란
웹 브라우저 와 관련된 프로그램을 작성하는 것

<img alt = "클라이언트와 서버" src= "https://t1.daumcdn.net/cfile/tistory/99836D4C5E4D1E1F05" height = "300">

간단하게 웹 사이트가 작동하는 과정은 서버 컴퓨터와 클라이언트 컴퓨터 간에 정보를 주고받으며 사용자에게 내용을 보여준다

이 때 **사용자의 검색 요청을 처리해 알맞은 정보를 전달해 주는 컴퓨터를 서버(sever)라고 한다**

웹 프로그래밍은 이에따라
* 사용자의 요청을 처리, 데이터를 관리하는 **백엔드(Back-end)**
* 서버에서 받아온 정보를 어떻게 보여줄지 프로그래밍하는 **프런트엔드 (Front-end)**   

로 나뉜다

<br>

## 자바스크립트로 무엇을 할 수 있을까?
자바스크립트는 원래 움직이는 효과만 주는 언어였다  

하지만 이제 
* 웹 사이트를 동적으로 만드는 일
* 웹 브라우저에서 실행되는 프로그램을 만드는 일
* 서버를 구성하고 서버용 프로그램을 만드는 일(Node.js)

등 여러가지 일에 쓰일 수 있다

<br>

## 자바스크립트의 특징

* 모든 웹 브라우저에서 작동한다  
자바스크립트는 에크마스크립트(ECMAScript)라는 이름으로 바뀌고 1년에 한 번씩 기능이 업그레이드되고 있다.
* 웹 브라우저 실행 결과를 즉시 확인할 수 있다   
웹브라우저만 있다면 실행할 수 있다
* 풀스택 웹 개발뿐 아니라 다양한 용도의 프로그램을 만들 수 있다  
프런트, 백 엔드를 모두 제어할 수 있고, 애플리케이션, 아두이노, 드론, 사물인터넷 환경에서 실행되는 프로그램을 만들 수 있다
* 다양한 자바스크립트 공개 API를 사용할 수 있다
API는 어떤 정보를 다른사람이 손쉽게 가져갈 수 있도록 미리 준비한 체계이다
* 다양한 라이브러리와 프레임워크를 사용할 수 있다


<br>


# 문법

<br>

## 콘솔 사용법
<a href = "https://opentutorials.org/course/580" target = "참고자료">크롬 개발자도구</a>

**f12** 키를 누르면 `element`에 들어갈 수 있다  
`console` 창에서

```JS
alert('Hello world');
```
```JS
console.log('Hello world');
```

를 실행하면 즉석으로 JS를 실행할 수 있다는 것을 확인할 수 있다

\+ `위 방향키` 를 누르면 전에 입력한 코드들을 확인할 수 있다

<br>

## 숫자와 문자

### 숫자
자바스크립트에서는  
나누어떨어지는 **정수**  
```js
alert(3)//정수
```
`~.` 이 붙는 **실수**  
```js
alert(3.3)//실수
```
을 number 라고 한다

<br>

연산
```js
console.log(3.3 + 3.3);//더하기
```
```js
console.log(3.3 - 3.3);//빼기
```
```js
console.log(3.3 * 3.3);//곱하기
```
```js
console.log(3.3 / 3.3);//나누기
```
```js
console.log(3.3 % 3);//나누고 남은 값
```

\+ 더 많은 연산   
`Math` 를 활용할 수 있다
```js
Math.pow(3,2);//3제곱
```
```js
Math.round(10.6);//반올림
```
```js
Math.ceil(10.2);//올림
```
```js
Math.floor(10.2);//내림
```
```js
Math.sqrt(9);//제곱근
```
```js
Math.random();//랜덤한 수
```
```js
//소수가 나오기 때문에
100 * Math.random();
//100을 곱해주면 100미만의 랜덤한 수가 나온다
```
```js
//지저분한 소수를 반올림
Math.round(100 * Math.random());
```

### 문자
문자를 넣을 때 큰 따움표`"`로 시작하면 큰따움표로, 작은 따움표`'`로 시작하면 작은따움표로 끝내야 한다  
자바스크립트를 해석하는 브라우저가 큰 따움표(작은 따움표)로 시작하고 끝나는 것을 인식하기 때문이다  

브라우저에게 인식시키지 않고싶으면 역슬래시를 앞에 붙이면 된다
```js
//console.log("codingbot"Park");
//오류가 나온다
console.log("codingbot\"Park");
//이를 escape라고 한다
```

\+ 타입보기  
typeof 뒤 알고싶은 데이터형식을 넣는다
```js
typeof 1;//number(숫자)가 출력된다
```
```js
typeof "1";//string(문자열)이 출력된다
```

### 문자에 대한 명령들

`\n` 으로 줄바꿈을 할 수 있다
```js
alert("codingbot\nPark");//역슬래시 + n
```

<br>

```js
console.log("codingbot" + "Park");//두 문자열이 붙어서 출력된다 
```

숫자 더하기
```js
console.log(3+3);//6
```
문자열 더하기
```js
console.log("3" + "3");//33이 출력된다
```

`~.length` 로 문자열의 길이를 구할 수 있다
```js
"codingbotPark".length;
```

<a href = "https://opentutorials.org/course/50/37" target = "_blank" title = "참고자료">여러가지 명령어 보기</a>

<br>

## 변수
`var` 은 변수를 선언하겠다는 것을 의미한다  
`var` 을 생략할 수 있지만 **유효범위** 에 영향을 미친다  
변수의 이름은 `&` , `_` , 특수문자 , 키워드 문자 를 제외한 모든 문자로 시작할 수 있다

```js
var a = 1;
alert(a);

a = 10;
alert(a);
//1과 10이 경고창에 뜬다
```
즉 `a`는 어떤 값을 담는 그릇이다

연산
```js
var a = 1;
var b = 2;
alert(a + b);
```
문자열도 들어갈 수 있다
```js
var a = 'codingbot';
var b = 'Park';
a + b;
```

### 변수를 사용해야하는 이유
* 코드의 재활용성을 높인다
* 유지보수를 돕는다
* 가독성을 높인다

<br>

## 주석
브라우저에서 해석을 하지 않는다

* 코드에 대한 설명
* 어떤 코드를 일시적으로 포함시키지 않을 때  
사용한다

```js
//'적을말' 의 형태
```
코드에 대한 이해를 돕기위해 적당한 해석을 주석으로 붙여야 한다

`ctrl` + `/`   
또는   
`ctrl` + `k` + `c`  
로 주석  

`ctrl` + `/`  
또는  
`ctrl` + `k` + `u`  
로 주석을 풀 수 있다

<br>

## 연산자
컴퓨터에게 지시하기위한 기호  
조건문에 많이 사용된다

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#operators" target = "_blank" title = "참고자료">연산자</a>

<br>

### 대입 연산자
값 등을 대입하는 것
```js
a = 1;//대입 연산자
```

<br>

### 비교연산자
값이 **같은지** , **다른지** , **큰지** , **작은지** 구분하는 것이다  

<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators" target = "_blank" title = "참고자료">비교연산자</a>

```js
1 != 5;//다르면 true
```
```js
1 > 5;//크면 true
```
```js
1 < 5;//작으면 true
```
```js
3 >= 3;//크거나 같으면 true
```
```js
3 <= 3;//작거나 같으면 true
```

#### boolean
즉 결과는 **true** 또는 **false** 중 하나이다  
true와 false는 **boolean** 이라는 타입이다

#### 동등 연산자
일치할 때 `==`
```js
1 == 5;//같으면 true
```
```js
1 == "1";//true
```
동등연산자에서 1은 true이다
```js
true == 1;
```

#### 일치 연산자
정확하게 일치할 때 `===`  
동등연산자는 가지고 있는 실질적인 답이 같으면 true,  
일치연산자는 데이터의 타이까지 같으면 true
```js
1 === 1;//정확하게 같으면 true
```
```js
1 === "1";//false
```

##### null
프로그래머가 의도적으로 값이 없는 상태를 의도적으로 부여함을 의미한다
```js
var a = null;
```
##### undefined
할당되지 않음, 즉 의도하지 않은 상황
```js
var a;
```

이 null 과 undefined 를 비교하기
```js
var a = null;
var b;
alert (a === b);//false
alert (a == b);//true
```
동등 연산자로 볼 때 true  
일치 연산자로 볼 때 false

**이처럼 정확한 비교를 하기 때문에 일치 연산자를 사용하는 것이 권장된다**

#### 부등 연산자
피연산자가 서로 다를 때 `!=`

```js
alert ("one" != "two");//true
```
```js
alert (1 != "1");//false
```

#### 불일치 연산자
피연산자의 값 또는 타입이 서로 다를 때 `!==`

```js
alert(1 !== "1");//true
```
```js
alert("1" !== "1");//false
```

#### 큼
왼쪽 피연산자가 더 클 때 `>`
```js
10 > 1;//true
```
`<` 는 반대

#### 크거나 같음
왼쪽 피연산자가 더 크거나 같을 때 `>=`
```js
10 >= 10;//true
```
`<=`는 반대

<br>

## 조건문
조건이 참일 때 실행된다

```js
if (조건)
    실행될 구문
```

```js
if (true)
    alert("참입니다");//실행이 된다
```
```js
if (false)
    alert("참입니다");//실행이 안된다
```

### else
참이아닌 나머지 상황

```js
if (false)
    alert("참입니다");
else 
    alert("나머지상황");
```

### else if
참이 아닐 때 다음 조건

```js
if (false)
    alert("참입니다");
else if (true)
    alert("다음조건");
else
    alert("나머지상황");
```

### 변수와 비교연산자를 사용
조건문에 true , false 가 조건이면 필요없는 조건문이다     
**변수와 비교연산자를 조건문에 사용한다**

```js
var age;
age = prompt("당신의 나이는");

if (age < 19)
    alert("미성년자");
else
    alert("성인");
```














빈문자열 `''` 은 거짓

undefined 는 거짓

null은 거짓

NaN은 거짓





`배열이름.push('넣을 문자,숫자');` 로 배열에 값을 넣을 수 있따

`배열이름.concat([](배열의 형태));` 로 배열에 복수의 값을 넣을 수 있따

`배열이름.unshift('z');` 로 배열의 가장앞에 값을 넣을 수 있다

`배열이름.splice(배열에 추가할 특정 인덱스(index), 인덱스로부터 삭제될 원소들의 개수(howmany), index와 howmany 사이에 추가할 값)` 로 값을 삭제, 삽입할 수 있다
```js
//howmany가 0이면 값을 삭제하지 않는다는 것이다
var a = ['a','b','c','d'];
a.splice(1,0,'x','y');
//['a', 'x', 'y', 'b', 'c', 'd']
```
```js
var a = ['a','b','c','d'];
a.splice(1,1,'x','y');
//['a', 'x', 'y', 'c', 'd']
```

`배열이름.shift();` 로 배열의 첫번째 원소를 제거할 수 있다

`배열이름.pop();` 로 배열의 마지막 원소를 제거할 수 있다

`배열이름.sort();` 로 배열을 정렬할 수 있다
```js
var a = ['z','a','A','b'];
a.sort();
//['A', 'a', 'b', 'z']
//자바스크립트가 기본적으로 알고있는 순서대로 정렬이 된다
```
```js
var a = ['z','a','A','b'];
a.reverse();
//역순으로 정렬
```
<a href = "https://opentutorials.org/course/50/109" target = "_blank" title = "참고자료">정렬기준정하기</a>

## 객체
객체(object)는 배열과 비슷한 '연관되어있는 데이터들을 담아낸다'   
객체와 배열의 차이점은   
배열은 자동으로 인덱스가 추가된다  
객체는 인덱의 값으로 숫자, 문자 등 직접 원하는 데이터를 지정할 수 있다  
다른언어에서는 **연관배열(associative array)** , **맵(map)** , **딕셔너리(Dictionary)** 라는 데이터 타입이다

```js
//객체는 중괄호로 만든다
{'height': 177, 'weight' : 67}
//인덱스를 만들고 값을 넣는다
```
객체에서의 인덱스는 문자이다  
값은 다른 데이터 타입도 가능하다

이런 객체를 만들고 변수에 담아 사용한다
```js
var student = {'height': 177, 'weight' : 67}
```

다른 객체를 만든는 방법
```js
var student = {};
//빈 객체를 만들고
student['height'] = 177;
//객체안에 인덱스와 값을 넣는다
student['weight'] = 67;
```
위와같이 값에 접근하려면 대괄호`[]`를 사용한다  
따라서 값에 접근을 하면
```js
student['height'];
//177
```

```js
student['we' + 'ight'];
//67
```

객체에서 인덱스는 **key** , 값은 **value** 라 한다



객체에는 순서가 없다
```js
var student = {'height' : 177, 'weight' : 67};
for (key in student) {
    document.write("key : " + key + "value" + student[key] + "<br \>");
}
```
key와 value를 출력한다

이를 li태그로 출력한다
```js
var student = {'height' : 177, 'weight' : 67};
for (key in student) {
    document.write("<li>key : " + key + "value" + student[key] + "<br \>");
}
```

객체 안의 값이 객체일수도,  
객체안의 값이 함수일 수도 있다
```js
var student = {
    'physical' : {'weight' : 53, 'height' : 170},
    'show' : function()
    {
        alert('Hello World')
    }
}

student['show']();
//Hello World 가 출력된다
```

This 변수  
함수가 속해있는 객체를 가르키는 변수
```js
var student = {
    'physical' : {'weight' : 53, 'height' : 170},
    'show' : function()
    {
        alert(this)
    }
}
//This는student가 된다
```
즉 this를 활용하여 현재있는 객체에 다른 요소를 선택할 수 있다
```js
var student = {
    'physical' : {'weight' : 53, 'height' : 170},
    'show' : function()
    {
        console.log(this.physical);
    }
}

student['show']();
```
this가현재 속해있는 객체를 담을 수 있다

`student` 라는 하나의 객체 안에 `'physical'` , `'show'` 라는 데이터와 함수를 그루핑 했다  
이러한 것을 **객체지향 프로그래밍이라 한다**  
연관된 데이터, 처리를 하나의 그릇 안에 그루핑해놓은 프로그래밍 스타일 기법이다  


## 모듈
전체 프로그램을 여러 개의 파일을 모듈이라는 형태로 분리한다  
이러한 기법의 대표적인 행동이 하나의 코드를 여러개의 파일로 분리하는 것이다  
이러한 기법을 사용하면  
* 코드의 재활용성을 높임
* 코드를 개선하면 이를 사용하는 모든 프로그램의 동작이 개선
* 코드 수정에 빠르게 필요한 부분을 찾을 수 있음  
등의 장점이 있다

자바스크립트 자체에는 모듈이라는 개념이 존재하지 않지만  
호스트 환경(자바스크립트가 구동되는 환경)에 따라 모듈화 방법이 제공되고 있다

### 모듈이 없는 애플리케이션, 없는 애플리케이션의 비교
```html
<!-- main.html 파일 -->
<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
</head>
<body>
    <script>
        function welcome() {
            return 'Hello World';
        }
        alert(welcome());
    </script>
</body>
</html>
```
이러한 html 코드를 모듈화를 거쳐
```html
<!-- main.html 파일 -->
<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <script src = "greeting.js"></script>
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>
```
```js
// greeting.js 파일
function welcome() {
    return 'Hello World';
}
```

## ui, api
### UI
User Interface의 약자

### API
Application Programing Interface의 약자

### UI, API의 문서

#### 자바스크립트 API 문서
이런 자바스크립트언어 자체의 API이기 떄문에 어떤 호스트에서나 같이 사용할 수 있다
* <a href = "https://www.ecma-international.org/" target = "_blank" title = "참고자료">ECMAScript(표준문서)</a>
* <a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript" target = "_blank" title = "참고자료">자바스크립트 레퍼런스(MDN)</a>

#### 호스트 환경 API 문서
* <a href = "https://nodejs.org/ko/docs/" target = "_blank" title = "참고자료">node.js</a>
* <a href = "https://developers.google.com/apps-script/" target = "_blank" title = "참고자료">google apps script</a>


## 정규표현식
문자열에서 특정한 문자를 찾아내는 도구








# 함수
## 유효범위
## 전역변수와 지역변수
### 전역변수
```js
var scope = 'global';
function fscope1(){
    alert(vscope);
}
function fscope2(){
    alert(vscope);
}
fscope1();
fscope2();
```

### 지역변수
```js
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert(vscope);
}
fscope();
// 이러한 코드가 있을 때 `vscope`는 `alert`하는 곳과 가까운곳에 선언된 'local'이 된다
```




```js
function fscope(){
    var lv = 'local variables';
    alert(lv);
}
alert(lv);
fscope();
//함수 안에서 선언한 지역변수는 함수 밖에서 사용할 수 없다
```
```js
var vscope= 'global';
function fscope(){
    var vscope = 'local';
}
fscope();
alert(vscope);
//global이 출력된다
//함수안 변수선언에 var이 없었다면 변수 vscope를 바꾸는 것이기 때문에
//vscope는 local이 된다
```
이런 지역변수와 전역변수의 충돌을 막기 위해 전역변수가 필요 없을 때는 지역변수를 사용한다  
즉 이름이 같은 변수를 함수 안 밖에서 선언할 때 `var`키워드를 모두 붙인다

### 전역 변수를 다루는 방법
어쩔 수 없이 전역 변수를 사용해야할 때가 있다  
전역변수를 하나만을 선언하고 하나의 전역변수안에 사용해야하는 변수들을 넣는 방법을 사용하면 변수가 충돌할 확률이 떨어진다  
```js
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());
```
이런 하나의 전역변수도 사용하지 않고싶다면 전체를 함수로 만들어서 지역변수가 되도록하는 방법을 사용할 수 있다
```js
(function(){
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;

function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());
}())
```

### 유효범위 대상
많은 언어가 블록({})에 대한 유효범위를 제공하는것과 달리,   자바스크립트는 함수에 대한 유효범위만을 제공한다  
```js
for (var i = 0;i < 1; i++ ){
    var name = 'Park';
}
alert(name);
```

### 정적 유효범위
함수가 선언된 시점에서의 유효범위를 갖는, 이러한 방식을 정적 유효범위(static scoping) 혹은 렉시컬(lexical scoping)이라고 한다

```js
var i = 5;
function a(){
    var i = 10;
    b();
}
function b(){
    document.write(i);
}

a();
```
함수 a에서 함수 b가 실행되었지만  
변수의 값은 a함수 안에서의 지역변수가 아닌 b함수가 처음 정의된 곳을 기준으로 하여전역변수값 5를 가졌다  
함수가 정의된 시점을 기준으로 변수의 범위를 갖기 때문이다

<a href = "https://devbox.tistory.com/entry/JavaScript-%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84" target = "_blank" title = "참고자료">정적 유효범위</a>

동적 유효범위 = 사용되는 대상에 따라 그 대상이 가지고 있는 변수에 접근할 수 있다
정적 유효범위 = 사용될 때가 아닌 정의될 때의 변수를 사용하게 된다