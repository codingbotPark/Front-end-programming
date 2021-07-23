# CSS
CSS = Cascading Style Sheets = 종속형 스타일 시트  
마크업 언어가 실제 표시된는 방법을 기술하는 언어이다

## 역사
CSS는 1994년 하콤 비움 리(Håkon Wium Lie)가 처음 제안하였다.

<a href = "https://ko.wikipedia.org/wiki/CSS#%EC%97%AD%EC%82%AC" target = "_blank" title = "참고자료">위키백과\<CSS></a>

HTML에서 정보를 전달하는 일, 꾸미는 일을 할 수 있었는데 웹이 발전해나가면서 HTML은 정보를 표현하는 일에 전념하게 되고 CSS는 디자인을 담당하게 된다

HTML에서 CSS가 분화될 수 밖에 없었던 이유는 분화 시켰을 때 효과가 훨신 더 크다 라는 판단이 있어서 이다

```html
<style>
    {
        coler:blue;
    }
</style>

<li>HTML</li>
<li>CSS</li>
<li>JS</li>
```
이런 행태를 띈다

정보와 디자인을 분리하면 
* 웹페이지를 해석해서 처리를 할 때 더 효율적으로 할 수 있다
* 과거(HTML과 CSS가 같이 사용될 때)에 비해 괸리가 쉬워진다

<br>

과거
```html
<li><font color = "blue">HTML</li>
<li><font color = "blue">CSS</li>
<li><font color = "blue">JS</li>
```
현재
```html
<style>
li {
    color:blue;
}
</style>
    
<li>HTML</li>
<li>CSS</li>
<li>JS</li>
```

<br>

# 문법

<br>

## HTML과 CSS가 만나는 법
CSS를 실행하는 방법에는 세가지가 있다

<a href = "https://www.codingfactory.net/10529" target = "_blank" title = "참고자료">css를 html에 적용시키는 방법</a>

### 1. 인 라인(Inline)
**HTML태그의 style속성에 CSS코드를 넣는 방법**

```html
<h4 style = "color:red">Hello World</h4>
```
꾸미는 데 한계가 있으며, 재사용이 불가능하다는 단점이 있다

<br>

### 2. 인터널(Internal)
**HTML문서 안의 style태그안에 CSS코드를 넣는 방법**

```html
<style>
h4 {
    color:blue;
}
</style>

<h4>Hello World</h4>
```
HTML문서 안의 여러 요소를 한 번에 꾸밀 수 있지만 다른 HTML문서에 적용이 불가능하다

<br>

### 3. 링킹(Linking)
**별도의 CSS파일을 HTML문서와 연결하는 방법**

css파일 (style.css 라는 제목의 파일)
```css
h4 {
    color:blue;
}
```
html파일
```html
<link rel = "stylesheet" href = "style.css">
<h4>Hello World</h4>
```
적용을 원하는 HTML문서에 `<link rel = "stylesheet" href = 파일이름("style.css")>` 코드를 추가한다

여러 HTML문서에 link태그로 연결만 하면 적용할 수 있다

<br>

## 선택자와 선언
![선택자와 선언](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLz8IiWnEN-ijFqCQR7d6OHbGrE805GIz6g&usqp=CAU)

<br>

## 선택자의 종류
선택자가 css가 발전함에 따라 다양한 선택자가 나타났다. 모든 선택자를 외울 필요는 없기 때문에 <a href = "https://flukeout.github.io/" target = "_blank" title = "flukeout.github.io">간단한 게임</a>, cheat sheet를 활용할 수 있다.

<img alt = "CSS Cheat Sheet" src = "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MTVfMTI0/MDAxNTg5NTI0NzE0OTgz.R5TZVafo9iyY9LYq-qv5_SLjjYuCbyCOHoKfpQ-KhAUg.Zs21xDfHjoBaGUrawm5oA9b3nWdZb6hxECstcTLYdpYg.JPEG.dongbak90/css_cheat_sheet.JPG?type=w800" height = "400" title = "참고자료"> <img alt = "CSS Cheat Sheet" src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20100225_21%2Fluckychhan_1267079027904SnWAa_png%2Fcss-cheat-sheet-v2_luckychhan.png&type=sc960_832" height = "400" title = "참고자료">
    
<br>

### <a href = "https://www.nextree.co.kr/p8468/" target = "_blank" title = "참고자료">선택자의 종류</a>

<br>

### 아이디선택자
아이디를 부여해서 변경시킨다

```html
<style>
li {
    color:blue;
}
#select{
    font-size:50px;
}
</style>
    
<li>HTML</li>
<li id = "select">CSS</li>
<li>JS</li>
```
**id값이 'select'인 것을 선택할 때 `#` + `id값 (select)` 을(를) 한다**

<br>

### 클래스선택자
id의 값이 중복된다면 웹표준에 어긋난다

```html
<style>
li {
    color:blue;
}
#select{
    font-size:50px;
}
.deactive{
    text-decoration: line-through;
}
</style>
    
<li class = "deactive">HTML</li>
<li id = "select">CSS</li>
<li class = "deactive">JS</li>
```
**class값이 'deactive'인 것을 선택할 때 `.` + `class값 (deactive)` 을(를) 한다**

class라는 것은 어떠한 대상을 관리하기 쉽도록 그룹핑 하는 것이다  

<br>

### 부모 자식 선택자

```html
<style>
    ul li {
        color:red;
    }
    ol li{
        border:1px solid red;
    }
    ul,ol{
        background-color: powderblue;
    }
</style>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
</ul>
<ol>
    <li>HTML</li>
    <li>CSS</li>
        <ol>
            <li>selector</li>
            <li>declaration</li>
        </ol>
    <li>JS</li>
</ol>
```
**`ul` 밑 `li`를 선택할 때 `ul` + `  (띄어쓰기)` + `li` 를 한다**  

**`ul` 과 `li`를 모두 선택할  때 `ul` + `,` + `li` 를 한다**  

<br>

```html
<style>
    #lecture>li{
        border:1px solid red;
    }
</style>

<ol id="lecture">
    <li>HTML</li>
    <li>CSS</li>
        <ol>
            <li>selector</li>
            <li>declaration</li>
        </ol>
    <li>JS</li>
</ol>
```
**`ol` 의 직계 자손, 즉 HTML, CSS, JS만 선택하고 싶을 때 `기준태그의 id` + `> (꺾쇠)` + `선택할 태그 (li)`**

<br>

### 수도 클래스 셀렉터(pseudo class selector)
클래스 선택자처럼 동작하지만 각각의 엘리먼트들의 상태에 따라서 엘리먼트를 선택하는 선택자가 바뀐다

<a href = "https://ofcourse.kr/css-course/%EA%B0%80%EC%9E%A5-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%84%A0%ED%83%9D%EC%9E%90" target = "_blank" title = "참고자료">가상 클래스 선택자</a>

```html
    <style>
        a:visited{
            color:purple;
        }
        a:active{
            color:olivedrab;
        }
        a:hover{
            color:orange;
        }
        a:focus{
            color:red;
        }
    </style>

    <a href="https://github.com/codingbotPark" target = "_blank" title = "클릭한 상태로 
    ">클릭</a>
    <a href="https://github.com/codingbotPark" target = "_blank" title = "olivedrab색">클릭</a>
```
선택자 두 개가 동급이면 CSS는 뒤쪽에 있는 선언을 선택한다

**`:active` = 마우스를 클릭했을 때**
**`:hover` = 마우스를 올려놓았을 때**
**`:visited` = 방문한 적이 있을 때**
**`:focus` = 포커스가 되었을 때**

<br>

## 속성
> 속성들의 사용도에 따른 순서

### font-size
단위 (px, em, rem, ...)  
px = 절대적  
em, rem = 상대적  

<a href = "https://webclub.tistory.com/122" target = "_blank" title = "참고자료">Font SizeM</a>  
<a href = "https://velog.io/@ursr0706/em%EB%8B%A8%EC%9C%84%EC%99%80-rem%EB%8B%A8%EC%9C%84-523lgn8l" target = "_blank" title = "참고자료">em과 rem</a>
