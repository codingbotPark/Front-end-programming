> 유튜브 <a href = "" target = "_blank" title = "참고자료">생활코딩</a> 의 <a href = "https://www.youtube.com/watch?v=ImTA5-r9TNc&list=PLuHgQVnccGMDTAQ0S_FYxXOi1ZJz4ikaX" target = "_blank" title = "참고자료">웹 브라우저를 위한 자바스크립트</a> 와 여러 자료들을 참고

<br>

## 웹브라우저 제어
브라우저에서 문서를 제어 할 때 **DOM** 을 사용한다

순수한 자바스크립트 기술을 이용해 웹브라우저를 제어하는 방법은 오늘날 잘 사용하지 않는다  
더 적은 코드로 강력한 효과를 얻을 수 있는 라이브러리가 존재하기 때문이다

**jQuery** 가 현시점에서 가장 많이 사용되고 있다  
하지만 DOM을 알아야 jQuery를 쉽게 제어할 수 있기 때문에

<br>

기본적인 DOM에 대한 제어, 라이브러리 를 같이 활용한다

<br>

## JavaScript
* HTML = 정보
* CSS = 디자인
* JavaScript = 제어

<br>

## HTML에서 JavaScript를 로드
JavaScript를 HTML에 로드 해서 제어할 수 있다

### inline 방식
HTML코드에 직접 기술하는 방식  

```html
<input type = "button" onclick = "alert('Hello World')">
```
`onclick` 은 이벤트이다  
`onclick` 이라는 속성 값이 자바스크립트 것이기 떄문에 브라우저가 자바스크립트 코드라는 것을 알 수 있다  

자바스크립트코드가 어떤 대상의 코드인가를 쉽게알 수 있다는 장점이 있지만,    
정보(HTML)와 제어(JS)가 같이 있기 때문에 유지보수에 문제점이 생긴다

### script태그 이용
script태그를 만들어 안에 자바스크립트 코드를 기술하는 방식

```html
<input type = "button" id = "test" value = "Hello World">
<script>
var test = document.getElementById('test');
test.addEventListener('click',function(){
    alert('Hello World');
})
</script>
```
`script` 태그 안의 내용들은 몰라도 된다  
`script` 태그를 활용한 방식이 있다는 것에 집중하자

HTML코드와 JS코드를 분리할 수 있다는 장점이 있지만,  
엄격하게 html과 js를 분리할 수 있는 방법이 있다

### 외부 파일 로드
js파일을 별도로 분리해 엄격히 정보와 제어를 분리할 수 있다

```html
<!-- html파일 -->
<input type = "button" id = "test" value = >
<script src = "./script.js"></script>
```
```js
// script.js이라는 이름의 js파일
var test = document.getElementById('test');
test.addEventListener('click',function(){
    alert('Hello World');
})
```
js파일의 재활용성을 높일 수 있고, 캐쉬를 통해 속도의 향상, 전송량의 경량화의 장점이 있다 

### onloead
스크립트 파일의 위치

`script` 태그가 `head` 태그에 위치 할 수도 있지만,  
`body` 태그가 끝나는 지점에 `script` 태그를 위치시키는 것이 더 바람직 하다

`script` 파일을 `head` 에 위치
```html
<!-- html파일 -->
<head>
    <script>
        var test = document.getElementById('test');
        test.addEventListener('click',function(){
        alert('Hello World');
        })
    </script>
</head>
<body>
    <input type = "button" id = "test" value = "Hello World">
</body>
<!-- 에러 발생 -->
```

만약 `head` 태그에 `script`태그를 위치를 시킨다면  
아래의 html코드들이 해석되기 전 `script` 파일이 해석되어서 에러가 발생한다

이 떄 `window` 객체를 사용하면 동작 시킬 수 있다  
```html
<head>
<script>
    window.onload = function(){
        var test = document.getElementById('test');
        test.addEventListener('click',function(){
            alert('Hello World');
        })
    }
</script>
</head>
<body>
    <input type = "button" id = "test" value = "Hello World">
</body>
<!-- 실행된다 -->
```
`window.onload` 하고 함수를 실행시키면  
현제 있는 모든 코드가 읽히고, 다운로드하고, 완성이 되었을 때 `onload` 라는 메소드를 호출하도록 되어서 실행이 된다

`head` 에 `script` 를 넣는 것은 `body` 에 넣는 것보다 느리다   

그래서 `body` 태그가 끝나는 시점에 `script` 를 넣는게 바람직하다

<br>

## BOM (Browser Object Model)
DOM, BOM, JavaScript는 window객체에 소속되어 있다

<img alt = "window와 BOM, DOM" src = "https://postlude.github.io/2020/02/16/javascript-object/1.JPG" title = "참고자료" height = "400">

```js
window.alert('Hello World');
alert('Hello World');
//둘다 같은 효과를 낸다
```

이 내장 함수(alert) 는 window가 생략된 것이다

<br>

## 사용자와 커뮤니케이션

### alert
경고창, 사용자에게 정보제공/ 디버깅 등의 용도로 사용

```js
alert(1);
alert(2);
alert(3);
```

확인을 누르기 전까지 다음 로직이 실행되지 않음

### confirm
확인을 누르면 true, 취소를 누르면 false를 리턴한다

```js
confirm('ok?');
```
```js
function func(){
    if (confirm('ok?')){
        alert('ok');
    } else {
        alert('cancel');
    }
}
func();
//확인를 누르면 ok,
//취소를 누르면 cancel
```

### prompt
사용자에게 값을 입력받을 수 있다

```js
prompt('password?');
```
```js
function func(){
    if (prompt('id') === 'Park'){
        alert('welcome');
    } else {
        alert('fail');
    }
}
func();
//입력값이 Park일 때 welcome,
//아닐 때 fail 
```

<br>

## location
