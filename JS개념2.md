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


## 값으로서 함수와 콜백
자바스크립트에서는 함수도 객체이다  
즉 함수도 어떠한 변수에 담을 수 있다   

```js
function a (){}
```
함수 a는 변수 a에 담겨진 값이다    
이는 
```js
var a = function(){}
```
와 같다


```js
a = {
    b:function(){

    }
};
```
b는 객체안에서 key, value 이자 변수를 담당하고 속성(proparty)라고 한다  
또  **이처럼 객체의 속성 값으로 담겨진 함수를 메소드(method)라고 부른다**  
즉 위의 예제에서 함수 b 는 메소드 b라 한다

<br>

### 함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다
```js
function cal(func,num){
    return func(num);
}

function increase (num) {
    return num + 1;
}

function decrease (num) {
    return num - 1;
}

alert (cal (increase, 1));
alert (cal (decrease, 1));
```

### 함수는 함수의 리턴값으로도 사용할 수 있다
```js
function cal (mode) {
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left,right){return left - right}
    }
return funcs[mode]
}

alert(cal('plus')(2,1));
alert(cal('minus')(2,1));
```

### 배열의 값으로도 사용할 수 있다
```js
var process = [
    function () {return input + 10},
    function () {return input * input},
    function () {return input / 2};
]

var input = 1;
for (var i = 0 ; i < process.length;i++){
    input = process[i](input);
}

alert(input);
```

### 콜백
```js
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
numbers.sort();
```
이 코드에서  
`sort` 라는 메소드는 자바스크립트가 기본적으로 제공하는 기능이고,  
**내장객체** , **내장 메소드** , **빌트인 객체** , **빌트인 메소드** 라고 한다  

반대로 우리가 만드는 객체, 메소드, 함수는 **사용자정의 객체 / 함수** 라 한다


```js
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort());
//[1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9]
```

숫자의 크기가 아닌 문자로 비교를해서 오름차순으로 정렬이 되지 않았다


<a href = "https://opentutorials.org/course/50/109" target = "_blank" title = " 참고자료">sort</a>

```js
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortfunc = function(a,b){
    console.log(a,b);
    if (a > b){
        return 1;
    } else if (a < b){
        return -1;
    } else {
        return 0;
    }
}
console.log(numbers.sort(sortfunc));
//sortfunc에 () 가 없어도 되는 이유는
//함수를 호출 () 하는 것이 아닌 인자로 전달하기 때문에

//어렵게하면 함수는 1급 객체이기 때문에 함수 자체를 다른 함수의 인수로 전달할 수 있다
```
이 맥락에서 `sortfunc` 를 콜백함수가 된다  
즉 콜백함수를 수신받는 sort라는 메소드가 콜백함수의 내용을 인자로 받아서 내부적으로 호출  
**즉 값으로서 함수를 사용할 수 있기 때문에 원래의 함수의 동작방법을 완전히 바꿀 수 있다**



콜백으로 작업이 완료된 후에 처리해야 할 일을 지정했을 때 미리 등록한 작업을 실행하도록 할 수 있다  
다음 코드는 일반적인 환경에서 작동하지 않고 서버 환경에서만 동작한다

사용자가 어떤 이벤트를 만들었을 때 서버와 웹 브라우저가 통신하는 기법을 **Ajax** 라고 한다 


### 클로저
내부함수가 외부함수의 맥락에 접근할 수 있는 것  

```js
function outter(){
    function inner(){
        var title = 'codingbotPark1';
        alert (title);
    }
    inner();
}
outter();
```

어떠한 함수 안에서만 사용되는 함수가 있다면 함수 바깥쪽에 선언하게되면   
응집성, 가독성이 낮아지고 오류가 발생할 수 있다  
**함수안에서 사용되야하는 함수가 있을 때 내부함수를 사용할 수 있다**

<br>

이런 내부 함수를 사용했을 때 **클로저**에 의해  
**내부함수는 외부함수의 지역변수에 접근할 수 있다**  

```js
function outter(){
    var title = 'codingbotPark1';
    function inner(){
        alert (title);
    }
    inner();
}
outter();
```

\+ 외부함수가 더이상 사용되지 않아도 내부함수가 외부함수에 접근할 수 있다
클로저의 특징이다  

```js
function outter(){
    var title = 'codingbotPark';
    return function(){
        alert(title);
    }
}
inner = outter();
inner();
```

이러한 클로저의 특징을 사용하는 예는

```js
function factory_movie(title){
    return{
        get_title : function (){
            //함수안 함수객체
            return title;
        },
        set_title : function (_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
//ghost in the shell 출력
alert(matrix.get_title());
//Matrix 출력
ghost.set_title('원피스');

alert(ghost.get_title());
//원피스 출력
alert(matrix.get_title());
//Matrix 출력
```
`factory_movie` 로 두 개의 객체를 만들었고  
`객체명.get_title` 에 값을 줌으로써  
`_title` -> `title` 이 된다  
즉 `factory_movie` 의 지역변수를 바꾸게 된다  

<br>

두 개의 객체는 각각 실행된 맥락에 따른 외부함수의 지역변수에 접근할 수 있었고 지역변수의 값은 유지 =>  
`ghost.set_title` 을 `Ghost in the shell` 에서 `원피스` 로 변경한다는 것은 `ghost` 객체의 `title` 값만 바꿀 뿐이고,  
`Matrix` 객체의 타이틀 값에는 영향을 미치지 않는다

<br>

이러한 맥락에서 **private변수** 가 나온다  
`ghost` , `matrix` 객체의 `get_title` 과 `set_title` 은 접근할 수 있는 메소드이다  
하지만 이 `get_title` , `set_title` 이 내부적으로 사용하고 있는 변수는 `title` 이고, 외부함수의 지역변수이다  
`fatory_movie` 함수가 리턴했을 때 함수는 생이 마감됐기 때문에 지역변수 `title` 은 `get_title` 과 `set_title` 을 통해 접근할 수 있다  

소프트웨어가 커지면 많은 사람이 코드를 작성하게된다  
이런 경우 많은 데이터가 존재하게 되는데 그 데이터를 누구나 수정할 수 있다면 소프트웨어가 망가질 수 있다  

프라이빗 변수를 사용의 장점
* 변수에 접근이 아무나 못하기 때문에 함수의 맥락에 영향을 주지 않는다
* 변수의 값을 바꿀 때 값을 확인할 수 있다
```js
function factory_movie(title){
    return{
        get_title : function (){
            //함수안 함수객체
            return title;
        },
        set_title : function (_title){
        if (typeof _title === 'String'){
            title = _title;
        } else {
            alert('제목이 문자열이 아닙니다');
        }
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
//ghost in the shell 출력
alert(matrix.get_title());
//Matrix 출력

//1을 ghost변수로 접근
ghost.set_title(1);

alert(ghost.get_title());
//원피스 출력
alert(matrix.get_title());
//Matrix 출력
```
이와같이
변수의 값을 private 하게 만들어서 값을 안전하게 저장, 수정되도록 한다


## arguments
arguments 라는 객체는 함수 안에서 함수의 정보들을 담고있는 객체이다  
배열같이 생겼지만 배열이 아니다

**매개변수와 인자의 차이**
```js
function a(arg){
} 

a(1);
```
`a(arg)` 은 매개변수(parameter)이다
`a(1)` 은 인자(argument)이다  

```js
function sum(){
    var i, _sum = 0;
    for (i = 0;i<arguments.length;i++){
        _document.write(i+' : '+arguments[i] + '<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
``` 
`arguments` 라는 배열이 하는 역할은  
사용자가 전달한 인자가 저장되어있다  
즉 인자에 접근할 수 있다

`argumets.length` 는 이 코드에서 4이다

즉 이러한 `arguments` 를 통해서 함수에 인자를 받지 않지만 인자로 전달한 값들에 접근할 수 있다

```js
function one(arg1){
    console.log(
        'one.length' , one.length,
        'arguments', arguments.length
    );
}
one('val1','val2');
```
이 때 `one.length` 는 1 (매개변수로 정의한 매개변수의 수)  
`arguments.length` 는 2 (함수로 전달된 인자의 수)

<br>

## 함수의 호출(apply)
자바스크립트에서 함수는 객체이다  
객체에 속성이 들어있고 속성에 값이 들어있다면 속성이라 하고 함수가 들어있다면 **메소드** 라고 한다  

```js 
function sum(arg1, arg2){
    return arg1+arg2;
}
```
이러한 `sum` 이라는 함수가 존재했을 때

```js
sum.apply;
// function apply() {[native code]} 가 출력된다
```
`native code` 가 출력되는 것은 브라우저가 제공하는 메소드이기 때문에 코드를 보여줄 수 없다  
즉 내장된 코드이다
```js
sum.apply(null,[4,2]);
// 6이 출력된다
```
`apply` 의 두 번째 인자로 전달된 배열은 함수에 인자를 전달하는것(`sum (4,2)`) 와 같다   

**apply를 사용하는 이유는 첫 번째 인자로 전달된 `null` 을 바꿔서 apply를 사용한다**

### apply 사용

```js
o1 = {val1 : 1, val2: 2, val3:3};
o2 = {v1 : 10, v2 : 50 v3 : 100, v4:25};
function sum(){
    var _sum = 0;
    for (name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1));
//6이 출력된다
alert(sum.apply(o2)); 
//185이 출력된다
```

`apply` 를 사용하지 않고 같은 효과를 낸다면

```js
function sum(){
    var _sum = 0;
    for (name in this){
        _sum += this[name];
    }
    return _sum;
}
o1 = {val1 : 1, val2: 2, val3:3 ,sum : sum};
o2 = {v1 : 10, v2 : 50 v3 : 100, v4:25 , sum:sum};
alert(o1.sum());
alert(o2.sum());
``` 







# 객체지향프로그래밍
지금까지는 절차지향과 관련된 기능들이 있었고, 앞으로는 객체지향주제이다  
**객체지향 프로그래밍(Object-Oriented Programming)은 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만드는 것이다**  
이 객체들을 조립해서 하나의 프로그램을 만드는 것이 객체지향 프로그래밍이라고 할 수 있다

<br>

예를 들자면 글목록, 본문, 댓글 의 기능이 있다면  
각각의 로직을 가지고 그 로직들로 구성이 된다  
이런 로직들을 많은 사람들이 다루기 위해 그룹핑이 필요하다  
**객체는 그런 하나하나의 그룹핑 이라 볼 수 있다**
이러한 그룹핑은 하나하나의 **기능(코드)들의 재활용성을 높여준다**  

## 문법과 설계

### 문법
언어가 제공하는 기능을 익히는 것, 객체를 만드는 법

### 설계
좋은 객체를 만드는 법, 현실은 복잡하지만 그 복잡함 전체가 필요한 것은 아니다  
이런 현실의 복잡함을 단순하게 필요한 부분만 추출하는 것을 **추상화(abstract)** 라고 한다  
적당한 **모듈화**가 필요하기 때문에 힘들다  

<br>

## 생성자와 new
**자바스크립트는 본인만의 독특한 객체지향성격을 가지고 있고 자바스크립트 계열의 언어들은 보통 prototype-based programiming 이라 부른다**  
객체지향언어의 문법과 비슷하게 사용하면서 함수형 언어의 특성을 가지고 있는 특성을 가지고 있다   

<br>

객체란 서로 연관된 변수, 함수를 그룹핑한 그릇이라 할 수 있다. **객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다**

```js
var person = {}
```
`var person = {}` 에서 중괄호 `{}` 는 객체이다  
이러한 객체에 값을 넣는 방법은

```js
person.name = 'Park';
```
`객체이름.변수 = 값` 의 형태로 객체에 값을 넣을 수 있다  
이러한 객체안의 값을 프로퍼티, 속성 이라 한다

```js
person.introduce = function(){
    return 'My name is' + this.name;
}
```

`this` 는 함수가 속해져있는 객체, 즉 `person` 이라는 객체를 가르킨다  
즉 `this.name` 은 앞의 `Park` 가 된다
객체안의 함수를 메소드 라 한다  

한 번에 나타내면

```js
var person = {};
person.name = 'Park';
person.intoduce = function(){
    return 'My name is' + this.name;
}
```

이 때 객체 안에 직접 프로퍼티와 메소드를 정의해주면 가독성, 집중도가 더 높아진다

```js
var person = {
    'name' : 'Park',
    'introduce' : function() {
        return 'My name is' + this.name;
    }
}
```

여러개의 객체를 만드려 할 때 **생성자**를 사용 함으로서 중복을 줄일 수 있다  
생성자(constructor)는 객체를 만드는 역할을 하는 함수이고, 객체를 만드는 창조자이다  

```js
function Person() {};
var p = new Person();
p.name = 'park';
p.introduce = function() {
    return 'My name is' + this.name;
}

document.write(p.introduce());
```

이렇게 객체를 만들 수 있다  
이 때 여러 사람을 위한 객체를 만드려면 

```js
function Person() {};

var p1 = new Person();
p1.name = 'Park';
p1.introduce = function() {
    return 'My name is' + this.name;
}

var p2 = new Person();
p2.name = 'codingbot';
p2.introduce = function(){
    return 'My name is' + this.name;
}

document.write(p1.introduce());
document.write(p2.introduce());
```

하지만 이는 같은 메소드임에도 중복이 되어야 한다  
이를 함수의 인자를 받아서 개선할 수 있다

```js
function Person(name) {
    this.name = name;
    this.introduce = function(){
        return 'My name is' + this.name;
    }
}

var p1 = new Person ('park');
var p2 = new Person ('codingbot');
document.write(p1.introduce());
document.write(p2.introduce());
```

즉 이러한 **생성자는 객체에 대한 초기화를 한다**는 것을 알 수 있다   

<br>

## 전역객체
모든 객체는 이 전역객체(global object)의 프로퍼티이다

```js
function func() {
    alert ('Hello?');
}
```
이 함수를 
```js
func();
```
로 도 실행할 수 있고
```js
window.func();
```
로 도 실행할 수 있는 것을 확인할 수 있다

이는 `window` 는 객체이고 `func` 는 속성(함수)임을 알 수 있다  
이러한 `window` 는 생략하면 암시적으로 사용하게 된다

즉 모든 전역변수와 함수는 사실 `window` 객체의 프로퍼티라고 볼 수 있다

<br>

## this
`this` 는 함수 내에서 함수 호출 맥락을 의미힌다  
맥락 은 상황에 따라 의미가 달라질 수 있다 즉 가변적이다  

<br>

함수에서 `this` 는 전역객체를 의미하는 `window` 이다

```js
function func() {
    if (window === this){
        console.log("window === this");
    }
}
func();
//window === this 가 출력된다
```

객체의 소속인 메소드의 `this` 는 그 객체를 가르킨다

```js
var o = {
    func : function() {
        if (o === this){
            document.write("o === this");
        }
    }
}
o.func();
//o === this 가 출력된다
```

**생성자 안에서 `this` 는 그 생성자가 만든 객체를 가르킨다**

```js
var funcThis = null;

function Func() {
    funcThis = this;
} 

//일반 함수로 호출
var o1 = Func();
if (funcThis === window){
    document.write('window </br>');
}
//위에서 봤듯 함수를 호출하면 그 함수는
//window의 메소드이기 때문에 this는 window를 가르킨다

//생성자로 호출
var o2 = new Func();
if (funcThis === o2){
    document.write('o2 </br>');
}
//new를 하면 비어있는 객체를 만들고
//그 생성자 안에서 this가 된다
```

### +apply, call
함수의 메소드인 apply와 call을 이용하면 this의 값을 제어할 수 있다

함수를 정의할 때
```js
function sum(x,y){return x+y};
sum(1,2);
```
이런 형식과 다르게 생성자를 사용하여 나타내면
```js
var sum2 = new Function('x','y', 'return x+y;');
sum2(1,2);
```
`Function('x', 'y', 'return x+y')` 에서 `x`와`y` 는 인자, `return x+y` 는 본문 내용이다

이렇게 본문 내용을 지정하게 되면 내용이 길어지거나 할 때 불편해진다  
그래서 `function sum(x,y){return x + y}` 형태로 보내면 자바스크립트 해석기는 객체로 만들어 준다  
이를 **함수 리터럴** 이라 한다

이와같이 
```js
var o = {};
```

`{~~}`은 **객체 리터럴**,

```js
var a = [1,2,3];
```
`[~~]` 은 **배열 리터럴** 이라 할 수 있다

<br>

**이처럼 우리가 명시적으로 객체를 만들 수 있지만 편리하게 어떤 값을 만들 수 있도록 하는 것이 리터럴 이다**

```js
var o = {};
var p = {};
function func() {
    switch(this) {
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;
    }
}
func();
func.apply(o);
//함수를 실행시키면 this의 값은 o가 된다
func.apply(p); 
//this의 값은 p가 된다
```

전통적인 객체 지향에서 메소드는 어떠한 객체에 포함되어있다  
즉 메소드는 다른 곳에 가지 못한다  
그래서 객체를(주인-master) 메소드를(노예-slave)라고 부르곤 한다  

**하지만 자바스크립트는 유연하다**
함수는 `window` 의 메소드가 될 수도,  
`o` 의 메소드가 될 수도,
`p` 의 메소드가 될 수도 있다

<br>

## 상속
객체안에 변수, 메소드가 있다고 할 때 이러한 객체를 상속받을 수 있다   
**중요한 것은 상속 받는 객체는 부모객체의 필요한 부분만 재활용 할 수 있다는 점이다**   

```js
function Person(name) {
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}
var p1 = new Person ('Park');
document.write(p1.introduce () + "<br />");
//My name is Park 가 출력된다
```
이를 아래와 같이 바꿀 수 있다
```js
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}
var p1 = new Person ('Park');
document.write(p1.introduce() + "<br />");
//My name is Park 가 출력된다
```
어떠한 객체를 생성했을 때 객체가 기본적으로 가져야할 속성, 프로퍼티 를 세팅하는 방법으로 생성자를 사용했었다  
하지만 생성자를 사용하는 방법 말고  
`prototype` 이라는 특수한 프로퍼티를 사용하는 방법이 있다  

즉 이 코드를 해석하면 `Person` 이라는 생성자에 `prototype` 이라는 프로퍼티가 있고 이 안에는 객체가 들어가 있다  
이 `객체.name` 을 함으로써 `name` 에 값을 넣은 것이다

**이렇게 상속의 기본적인 준비를 했다**

지금은 자바스크립트에서의 상속 사용법에 초점을 두고 있다  
다음 토픽 `prototype` 에서 구체적으로 어떤 원리로 상속이 되는가에 대해 알 수 있다

```js
function Person(name) {
   this.name = name; 
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();

var p1 = new Programmer('Park');
document.write(p1.introduce() + "<br />");
//My name is Park 가 출력된다
```
`Programmer` 생성자를 통해 만든 객체가 `Person` 생성자를 통해 만들어진 객체와 같은 기능을 가지도록 만든 것이다 

`Programmer` 생성자에 `introduce` 라는 메소드가 정의 되어있지 않지만 `introduce` 메소드를 사용할 수 있다  
그 이유는 `introduce` 는 `Person` 객체에 `prototype.introduce` 라는 메소드가 정의되어 있고 `Programmer` 가 `introduce` 메소드를 상속받고 있기 때문이다   

<br>

`Programmer.prototype` 이라는 특수한 프로퍼티 값으로 `new Person()` 을 했다  
`new Person` 을 하면 생성자에 의해 객체가 생성되게 되고 이 때 자바스크립트가 `prototype` 이라는 속성을 생성자 함수가 가지고 있는지 보고 생성자 함수에 있는 객체와 같은 객체를 만들어서 생성자의 결과로 리턴한다  

그래서 `new Person` 으로 만들어진 객체는 `prototype` 으로 지정한 `name` 과 `introduce` 를 가지고 있다  

<br>

이 `introduce` 와 `name` 을 가지고 있는 객체가 `Programmer.prototype` 이라는 속성의 값이 된다  
속성의 값이 됨으로써 `this.name = name` 이 되고  

### 기능의 추가
객체가 물려받은 기능에 기능을 추가

```js
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is' + this.name;
}

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return "hello world";
}

var p1 = new Programmer('Park');
document.write(p1.introduce() + "<br />");
document.write(p1.coding() + "<br />");
```

`Person` 은 `introduce` 만,   
`Programmer` 는 `introduce` 와 `coding` 이 필요할 때  
위처럼 상속을 사용하면 상속하면서 다른 기능을 추가할 수 있다  
(`new Person()` 에서 상속하고 그 아랫줄 에서 기능을 추가하고 있다)

<br>

이를 활용해 아래와 같이 상속 후 다른 기능을 추가하는 작업을 할 수 있다

```js
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is' + this.name;
}

function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return "hello world";
}

//<new

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function() {
    return "hard working!";
}

//new>
var p1 = new Programmer('Park');
document.write(p1.introduce() + "<br />");
document.write(p1.coding() + "<br />");

var p2 = new Designer('codingbot');
document.write(p2.introduce() + "<br />");
document.write(p2.design() + "<br />");
```

`Person` 이라는 공통의 부모가 있고,  
`Programmer` 와 `Designer` 가 상속받는다  

<br>

## prototype
객체의 원형이라 할 수 있다  
함수는 객체이고 생성자로 사용될 함수도 객체이다  
**객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 용도가 약속된 특수한 프로퍼티이다**

```js
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
//true가 출력된다
```

`Sub` 에 접근했을 때 `ultraProp` 는 정의되어있지 않다  
이 때 자바스크립트는 내부적으로 `Super`, `Ultra` 에서 `ultraProp` 를 찾게된다  

이를 가능하도록 하는 핵심적인 역할을 **`prototype`** 이 한다   

생성자는 함수이고 이 함수를 호출할 때 `new` 를 붙임으로서 생성자 함수가 된다  
이는 새로운 객체를 만들어 리턴하기 때문에 `o` 변수 안에는 생성자 함수로 만들어진 객체가 들어가게 된다  

**기본적인 프로퍼티값과 메소드를 가지도록 만들 수 있다**

`Ultra.prototype.ultraProp = true` 라는 객체가 `new Ultra()` 를 통해 `Super.prototype` 이 되고,  
이 `Super.prototype` 이 `new Super()` 를 통해 `Sub.prototype` 이 되고,  
이 `Sub.prototype` 이 `new Sub()` 을 통해 `o` 이 되는 것이다 

**이런 구조를 prototype chain** 이라 한다 

```js
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();
console.log(o.ultraProp);
//2출력
```

`Sub.prototype.ultraProp` 를 했고, 상속을 받았기 때문에 `ultraProp` 를 찾을 수 있다  

```js
function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();

function Sub(){}
//<new
var s = new Super();
s.ultraProp = 3;
sub.prototype = s;
//new>

var o = new Sub();
console.log(o.ultraProp);
//3이 출력된다
```

`o.ultraProp` 를 `o` 에서 찾는데 없으면 그 `o` 를 만든 생성자, 즉 `Sub` 의 `prototype` 에서 찾게된다  
`sub.prototype = s` 이고 `s.ultraProp` 를 찾아서 3이 출력된다  

### +주의해야할 점

```js
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function sub() {}
// Sub.prototype = new Super()
Sub.prototype = Super.prototype;

var o = new Sub();
console.log(o.ultraProp);
```

**`객체명.prototype` 에 할당될 값에는 상속받고자 하는 객체를 넣어야 한다**  
그렇게 안하고 `객체.prototype` 의 값으로 `상속받고자하는객체.prototype` 을 한다면   
상속받고자하는객체 에게 영향을 줘서  
하위객체에 어떤 값을 추가하는 것이 부모객체에 어떤 기능을 추가하는 것과 동일한 효과를 하기 때문이다

<br>

## 표준 내장 객체의 확장
표준 내장 객체(Standard Built-in Object) 는 자바스크립트가 기본적으로 제공하는 객체이다 

* Object
* Function
* Array
* String
* Boolean
* Number
* Math
* Data
* RegExp

등이 있다

우리가 직접 객체를 만들고 사용하는 것은 **사용자 정의 객체** 라고 한다

### 배열의 확장
내장 객체에 어떤 기능을 추가하는 방법  
(prototype) 을 사용

```js
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
function getRandomValueFromArray(arr){
    var index = (
        Math.floor(arr.length * Math.random()));
    // arr.length * Math.random();
    //0부터 1사이의 소수를 제공
    //10 * 0.1234 를 하면 정수부분은 0에서 9가 나오듯이
    //5 * 0.1234 를 하면 정수부분은 0에서 4가 나온다
    //값은 소수가 나오기 때문에 정수로 바꾸기 위해
    //floor 를 사용한다
    return arr[index];
    //만든 수번째 인덱스를 리턴
}
console.log(getRandomValueFromArray(arr));
```
`Array` 는 배열을 만들기 위한 생성자 함수이다  

`arr` 에 있는 도시들을 랜덤으로 값을 가져오기  
인덱스 0, 1, 2, 3, 4 중 랜덤한 값을 가져와야한다   

> 모든배열이 이런 랜덤으로 값을 뽑는 기능을 가지도록 하기

```js
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');

//random이라는 메소드이름으로 만든다
Array.prototype.random = function(){
    var index = Math.floor(this.length * Math.random());
    return this[index];
}

console.log(arr.random());
```
배열 생성자를 통해 만들어진 객체가 가지고 있는 `random` 이라는 함수 안에서 `this` 는 배열 생성자를 통해 만들어진 배열 객체가 되기 때문에 `this` 를 사용할 수 있다   

<br>

## Object
Object라는 이름을 가진 객체(object)가 있다  
Object객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다  
**모든 객체들의 부모이다**

```js
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function sub() {}
Sub.prototype = new Super()

var o = new Sub();
console.log(o.ultraProp);
```

이런식으로 `prototype` 을 통해 상속이 된다  
요기서 부모인 `Ultra` 는 아무런 상속을 받지 않았지만  
암시적으로 `Object` 라는 객체를 상속받고 있는 것이다

즉 `Object` 라는 객체의 속성은 모든 객체가 가지고 있는 프로퍼티가 된다  
이는 `object` 가 가지고 있는 `prototype` 은 모든 객체가 사용할 수 있는 기능이라는 뜻이다  

### Object AIP 사용법
<a href = "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object" target = "_blank" title = "참고자료">MDN Object</a>

Object.keys 사용 (예시)  
키값만을 배열로 만들어 리턴  
주어진 객체의 속성 이름들을 반복문과 동일한 순서로 순회
```js
var arr = ["a","b","c"];
console.log('Object.key(arr)' , Object.keys(arr));
//Object.key(arr) ['0', '1', '2'] 가 출력
```
```js
var o ={"name":"Park", "age":17, "city" : "seoul"};
console.log(Object.keys(o));
//['name', 'age', 'city'] 가 출력   
```

