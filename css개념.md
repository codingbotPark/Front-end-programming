# CSS
CSS = Cascading Style Sheets = 종속형 스타일 시트  
마크업 언어가 실제 표시된는 방법을 기술하는 언어이다

## 역사
CSS는 1994년 하콤 비움 리(Håkon Wium Lie)가 처음 제안하였다.

<a href = "https://ko.wikipedia.org/wiki/CSS#%EC%97%AD%EC%82%AC" target = "_blank" title = "참고자료">위키백과\<CSS></a>

HTML에서 정보를 전달하는 일, 꾸미는 일을 할 수 있었는데 웹이 발전해나가면서 HTML은 정보를 표현하는 일에 전념하게 되고 CSS가 디자인을 담당하게 된다

HTML에서 CSS가 분화될 수 밖에 없었던 이유는 분화 시켰을 때 효과가 훨신 더 크다 라는 판단이 있어서 이다

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
선택자가 css가 발전함에 따라 다양한 선택자가 나타났다. 모든 선택자를 외울 필요는 없기 때문에 <a href = "https://flukeout.github.io/" target = "_blank" title = "참고자료">간단한 게임</a>, cheat sheet를 활용할 수 있다.

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







## font-size
단위 (px, em, rem, ...)  
px = 절대적  
em, rem = 상대적  

<a href = "https://webclub.tistory.com/122" target = "_blank" title = "참고자료">Font SizeM</a>  
<a href = "https://velog.io/@ursr0706/em%EB%8B%A8%EC%9C%84%EC%99%80-rem%EB%8B%A8%EC%9C%84-523lgn8l" target = "_blank" title = "참고자료">em과 rem</a>

```html
<style>
#px{font-size:16px;}
#rem{font-size:1rem;}
</style>

<div id = "px">PX</div>
<div id = "rem">REM</div>
```
폰트의 크기를 설정하면 px의 크기는 똑같지만 rem의 크기는 설정한 값에 따라 바뀐다

<br>

## color
컬러를 지정하는 방식에는 크게 세 가지가 있다

* color name
* RGB
* HSL

<a href = "https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=wooin21s&logNo=221318040166" target = "_blank" title = "참고자료">CSS color</a>

<br>

### 1. color name
**색상의 이름을 정해주는 방법**

```html
<style>
#color-colorname{
    color:powderblue;
}
</style>

<p id = "color-colorname">Color Name</p>
```
<style>
#color-colorname{
    color:powderblue;
}
</style>

<p id = "color-colorname">Color Name</p>

색상에 이름을 짓는 것에는 한정이 있다  <a href = "https://www.w3schools.com/colors/colors_names.asp" target = "_blank" title = "참고자료">(CSS Color Name)</a>

<br>

### 2. RGB (Red, Green, Blue)
<a href = "https://www.google.com/search?q=%EB%B9%9B%EC%9D%98+%EC%82%BC%EC%9B%90%EC%83%89&oq=%EB%B9%9B%EC%9D%98+%EC%82%BC%EC%9B%90%EC%83%89&aqs=chrome..69i57j35i39i362l7j0l2...7.1696j0j15&sourceid=chrome&ie=UTF-8" target = "_blank" title = "단어">빛의 삼원색</a> 을 조합하여 색을 나타내는 방법 <a href = "https://www.w3schools.com/colors/colors_rgb.asp" target = "_blank" title = "참고자료">(CSS RGB Test)</a>

```html
<style>
#color-RGB{
    color:rgb(20,195,80);
}
</style>

<p id = "color-RGB">RGB</p>
```
<style>
#color-RGB{
    color:rgb(20,195,80);
}
</style>

<p id = "color-RGB">RGB</p>


#### + HEX (HEXadecimal) 
RGB값을 16지수로 표시해 사용하는 방법 <a href = "https://www.w3schools.com/colors/colors_hexadecimal.asp" target = "_blank" title = "참고자료">(CSS HEX Test)</a>

```html
<style>
#color-HEX{
    color:#d2c310;
}
</style>

<p id = "color-HEX">HEX</p>
```
<style>
#color-HEX{
    color:#d2c310;
}
</style>

<p id = "color-HEX">HEX</p>

<br>

### 3. HSL (Hue Saturation Lightness)
CSS3에서 새롭게 표준으로 소개된 색 표현 방법  <a href = "https://www.w3schools.com/colors/colors_hsl.asp" target = "_blank" title = "참고자료">(CSS HSL Test)</a>

* Hue (색조) (색상환 0~36)
* Saturation (포화도) (회색이 들어간 정도 0~100%)
* Lightness (빛) (흰색이 들어간 정도 0~100%)

```html
<style>
#color-HSL{
    color:hsl(235, 100%, 35%);
}
</style>

<p id = "color-HSL">HSL</p>
```
<style>
#color-HSL{
    color:hsl(235, 100%, 35%);
}
</style>

<p id = "color-HSL">HSL</p>

<br>

## Text-Align
<a href = "https://ofcourse.kr/css-course/text-align-%EC%86%8D%EC%84%B1" target = "_blank" title = "참고자료">CSS Test-Align</a>

```html
<style>
#Text-Align-right
{ text-align:right; }
#Text-Align-left
{ text-align:left; }
#Text-Align-center
{ text-align:center; }
</style>

<p id = "Text-Align-right">I am on the right side</p>
<p id = "Text-Align-left">I am on the left side</p>
<p id = "Text-Align-center">I am on the center</p>
```
<style>
#Text-Align-right
{ text-align:right; }
#Text-Align-left
{ text-align:left; }
#Text-Align-center
{ text-align:center; }
</style>

<p id = "Text-Align-right">I am on the right side</p>
<p id = "Text-Align-left">I am on the left side</p>
<p id = "Text-Align-center">I am on the center</p>

<br>

## font
폰트를 정의하는 속성이다  

<a href = "https://ofcourse.kr/css-course/font-%EC%86%8D%EC%84%B1" target = "_blank" title = "참고자료">CSS font</a>

* **font-style** = 글꼴의 스타일 
* **font-weight** = 글자 두께
* **font-variant** = 글꼴 변형
* **font-size** = 글자 크기
* **line-height** = 줄 간격
* **font-family** = 글꼴
<!--표 + 각각의 항목마다 값

순서 = 
style
variant
weight
size
height
family

family에 글꼴사항
-->

이 6개의 글골 관련속성을 font라는 하나의 속성에 한번에 사용 할 수 있다

```html
<style>
.font {
    font-style:italic;
    font-weight:600;
    font-size:36px;
    line-height:2;
    font-family: "돋움", "궁서", serif;
}
</style>

<p class = "font">스타일 = 이탈릭체글자</p>
<p class = "font">두께 = 36px </p>
<p class = "font">줄 간격 = 2</p>
<p class = "font">글꼴 = 돋움, 궁서, serif</p>
```
family에서 여러개의 글꼴을 넣어서줌으로써 글꼴이 없다면 뒤에있는 글꼴이 적용된다

<style>
.font {
    font-style:italic;
    font-weight:600;
    font-size:36px;
    line-height:2;
    font-family: "돋움", "궁서", serif;
}
</style>

<p class = "font">스타일 = 이탈릭체글자</p>
<p class = "font">두께 = 36px </p>
<p class = "font">줄 간격 = 2</p>
<p class = "font">글꼴 = 돋움, 궁서, serif</p>

<br>

## Web Font
사용자가 폰트를 가지고 있지 않는 경우 **서버에서 그 폰트를 사용자의 웹브라우저가 다운로드해서 폰트를 사용할 수 있도록 하는 방법**  

<br>

#### 웹폰트의 단점  
<a href = "https://isme2n.github.io/devlog/2017/07/26/problem-of-webfont/" target ="_blank" title = "참고자료">Web Font의 장단점</a>

* **용량**  
한글 웹폰트는 영문 웹폰트에비해 용량이 크다 이는 초기 로딩시간을 늘린다

* 확장성  
용량문제로 한글 웹폰트는 대부분 경량화를 거친다, 이 과정에서 자주쓰지 않는 글자들이 빠진다

* FOIT (Flash Of Invisible Text)  
글자가 보이지 않다가 보이는 현상, 웹폰트를 다운로드 하는 동안 글자가 보이지 않는다

* FOUT (Flash Of Unstyled Text)  
글꼴이 깜빡이면서 바뀌는 현상, 웹폰트를 다운로드가 완료되면 폰트가 바뀐다

<a href = "https://fonts.google.com/" target = "_blank" title = "참고자료">google font</a> 

<!-- 구글폰트에서 웹폰트로 설정하는 과정 (css 19강)-->

<br>

## 상속
HTML구성요소에 효과를 주게 되면 그 태그의 하위의 구성요소가 효과를 이어받게 되는 것

내용을 전부 바꾸려면 각각의 구성요소들을 하나하나 바꾸어도 되지만 상위 구성요소를 바꾸어 줄 수 있다
```html
    <style>
        #inherited{
            color:skyblue;
        }
    </style>

<ul id = "inherited">
    <li>html</li>
    <li>css</li>
    <li>JS</li>
</ul>
```
ul태그 안에 있는 내용들은 모두 효과를 이어받는다

<style>
#inherited{
    color:skyblue;
}
</style>

<ul id = "inherited">
    <li>html</li>
    <li>css</li>
    <li>JS</li>
</ul>

**상속**이라는 개념을 활용해서 더 효율적일 수 있다
 
### +<a href = "https://www.w3.org/TR/CSS21/propidx.html" target = "_blank" title = "참고자료">속성별 상속여부</a>
상속이 적용되는 속성이 있고 안되는 속성이 있다

```html
<style>
#inherited{
    color:skyblue;
    border:1px solid red;
}
</style>

<ul id = "inherited">
    <li>html</li>
    <li>css</li>
    <li>JS</li>
</ul>
```
`border:1px solid red` = 1px두께의 빨간색 테두리
<style>
#inherited{
    color:skyblue;
    border:1px solid tomato;
}
</style>

<ul id = "inherited">
    <li>html</li>
    <li>css</li>
    <li>JS</li>
</ul>


상속이 이루어 진다면 li태그들도 영향을 받아야 하지만 받지 않는다

<!-- border는 상속 x color은 상속 o 사진 -->

<br>

## Stylish
지금까지 배웠던 것들을 바탕으로해서 '스타일리쉬'라고 하는 플러그인, 유저스타일이라고 하는 서비스를 활용

<!--
 순서그림 
생활코딩21강
-->

<br>

## Cascading
CSS(Cascading style Sheet)의 **Cascading**이라는 기능, 규칙은 CSS의 이름에서 알 수 있듯이 중요한 기능이다

1990년에 html이 등장하고 디자인을 하는 언어들 중 CSS기술이 채택된 중요한 측면을 웹의 창시자들은 **Cascading**에 두고있다

<a href = "https://victorydntmd.tistory.com/190" target = "_blank" title = "참고자료">CSS 캐스케이딩</a>

캐스케이딩은 3가지에 의해 결정된다
* 중요도 (css가 어디에서 선언되었는지)
* 명시도 (대상을 구체적으로 지정할수록)
* 코드 순서

<br>

### 중요도
* 웹브라우저는 기본적으로 html을 해석하는 기계이고 기본적인 디자인이 되어있다 ex) h태그

* 웹브라우저 사용자도 웹페이지의 디자인에 대한 결정권이 있다

* 웹페이지를 만드는 저자도 웹페이지가 어떤 모습으로 보여야 할지에 대한 결정권이 있다

**즉 이 3자가 서로 조화를 이뤄서 웹을 만들어간다 는 철학을 가지고 있었다**

이 철학을 기반으로 웹의 창시자들이 CSS를 선택했다

이 조화에는 **우선 순위**가 기반으로 있다  

<a href = "https://opentutorials.org/course/1237/4149" target = "_blank" title = "참고자료">CSS 캐스케이딩 중요도</a>

!important 선언을 한 사용자 스타일 > !important 선언을 한 저자 스타일  
<span style = "color:gold">저자 스타일</span> > <span style = "color:gold">사용자 스타일</span> > <span style = "color:gold">User Agent선언 (브라우저 자체의 선언)</span>

<br>

## 명시도
```html
<style>
li{ color:yellowgreen; }
#idsel { color:blue; }
.classsel { color:yellow }
</style>
        
<ul>
<li>html</li>
<li id = "idsel" class = "classsel" style ="color:orange">css</li>
<li>JS</li>
</ul>
```
태그, id, class, 인라인 기법으로 디자인을 지정

<!-- 결과사진 -->

하나의 요소에 여러 디자인이 적용되었을 때 웹브라우저가 표현하는 디자인은 우선순위에 의해 결정된다

![CSS 케스케이딩 명시도](https://res.cloudinary.com/eightcruz/image/upload/v1522747066/y1voylqixc5kf07ipckr.png)

**즉 구체적이고 일반적인 규칙일수록 우선순위가 높다**

<br>

## 코드 순서
같은 선택자끼리라면 늦게 선언된 스타일이 우선 적용된다  
<a href = "https://victorydntmd.tistory.com/190" target = "_blank" title = "참고자료">CSS 캐스케이딩 코드 순서</a>

```html
<style>
#CSSCascading{
    color:slategray;
}

#CSSCascading{
    color:yellowgreen;
}
</style>

<p id = "CSSCascading"></p>
```
<style>
#CSSCascading{
    color:slategray;
}

#CSSCascading{
    color:yellowgreen;
}
</style>

<p id = "CSSCascading">I am yellowgreen</p>

<br>

### +Specificity Calculator
CSS는 어떤 스타일이 적용이 될지 일종의 점수를 매기는 것  
**선택자가 같다면 구체적일수록 우선순위가 높다**

<a href = "https://victorydntmd.tistory.com/190" target = "_blank" title = "참고자료">CSS 캐스케이딩 Specificity Calculator</a>

```html
<style>
#yellow #yellowgreen{
    color:yellowgreen;
}

#yellow{
    color:yellow;
}
</style>

<div id = "yellow">
<p id = "yellowgreen">What is my color?</p>
</div>
```
<style>
#yellow #yellowgreen{
    color:yellowgreen;
}

#yellow{
    color:yellow;
}
</style>

<div id = "yellow">
<p id = "yellowgreen">What is my color?</p>
</div>

코드 순서에 따르면 늦게 선언된 스타일에 따르지만 **Specificity Calculator** 에 의해 구체적인 선택자에 따른다

<br>

## inline, block
html의 여러 태그들은 태그의 성격에 따라 화면 전체를 쓰는 태그와 자기자신의 크기만큼을 사용하는 태그로 나누어진다

<a href = "https://www.daleseo.com/css-display-inline-block/" target = "_blank" title ="참고자료">inline, block, inline-block</a>  
<a href = "http://www.homejjang.com/09/block_inline.php" target = "_blank" title = "참고자료">block과 inline 태그</a>

### inline
줄바꿈 없이 한 줄에 다른 요소(element)들과 나란히 배치된다
width, height속성을 지정해도 무시된다

```html
<style>
.inline{
    border:1px solid yellowgreen
}
</style>

<a href = "https://github.com/codingbotPark" class = "inline">inline</a>
<a href = "https://www.instagram.com/0b0ut/" class = "inline">inline</a>
```
<style>
.inline{
    border:1px solid yellowgreen
}
</style>

<a href = "https://github.com/codingbotPark" target = "blank" title = "깃허브" class = "inline">inline</a>
<a href = "https://www.instagram.com/0b0ut/" target = "blank" title = "인스타그램" class = "inline">inline</a>

테두리가 자기자신의 크기만큼 있는 것을 확인할 수 있다

<br>

### block
줄바꿈이 들어가서 다른 요소(element)들을 밀어낸다

```html
<style>
.block{
    border:1px solid yellowgreen;
}
</style>

<p class = "block">1block</p><p class = "block">2block</p>
```
<style>
.block{
    border:1px solid yellowgreen;
}
</style>

<p class = "block">1block</p><p class = "block">2block</p>

테두리가 화면 전체로 있는 것을 확인할 수 있다

<br>

### +inline, block변경
inline, block으로 변경할 수 있다

```html
<style>
.inlineblock{
    border:1px solid yellowgreen;
}
#inline-block{
    display:block;
}
#block-inline{
    display:inline;
}
</style>

<a href = "https://github.com/codingbotPark" class = "inlineblock" id ="inline-block">inline</a>
<p class = "inlineblock" id = "block-inline">1block</p>
```
display를 설정해줘서 inline과 block을 바꾼다

<style>
.inlineblock{
    border:1px solid yellowgreen;
}
#inline-block{
    display:block;
}
#block-inline{
    display:inline;
}
</style>

<a href = "https://github.com/codingbotPark" class = "inlineblock" id ="inline-block">inline</a>
<p class = "inlineblock" id = "block-inline">1block</p>

`inline`과 `block`의 형태가 바뀐 것을 볼 수 있다

<br>

## Box model
각각의 태그들이 웹페이지에 표현될 때 태그의 부피감을 결정한다

<a href = "http://tcpschool.com/css/css_boxmodel_boxmodel" target = "_blank" title = "참고자료">Box model</a>

```html
<style>
.BoxModel{
    border:10px solid red;
    padding:60px;
    margin:30px;
    width:120px;
}
</style>

<p class = "BoxModel">border = 테두리</p>
<p class = "BoxModel">padding = 내용과 테두리의 간격</p>

<a href = "http://tcpschool.com/css/css_boxmodel_boxmodel">참고자료</a>입니다
```
`border` = 내용을 감싸는 테두리  
`padding` = 내용과 테두리의 간격   
`margin` = 테두리와 이웃하는 요소 사이의 간격   

<img alt = "박스모델" src = "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2306503858ED857C2D" height = "200
" width = "400">

<style>
.BoxModel{
    border:7px solid red;
    padding:20px;
    margin:40px;
    width:120px;
}
</style>

<p class = "BoxModel">border = 테두리</p>
<p class = "BoxModel">padding = 내용과 테두리의 간격</p>

<a href = "http://tcpschool.com/css/css_boxmodel_boxmodel" class = "BoxModel">참고자료</a>입니다

<br>

텍스트와 떨어진 간격을 보면 a태그도 `margin`이 적용되는 것을 확인할 수 있다  
inline방식인 a태그가 width와 height와 같은 값들이 무시되는 것을 확인할 수 있다

<br>

## box-sizing
만약 박스 크기를 지정할 때, 그 요소(element)가 만약 `padding`이나 `border`와 같은 값들을 가지고 있을 때 사이즈는 예상한 것과 다른 경우가 나온다
  
이러한 요소(element)들의 크기를 예측하기 어려워지는 문제를 `box-sizing`으로 해결할 수 있다

<a href = "https://ofcourse.kr/css-course/box-sizing-%EC%86%8D%EC%84%B1" target = "_blank" title = "참고자료">box-sizing</a>

```html
<style>
.box-sizing{
    margin:10px;
    width:150px;
}
#box-sizing-small{
    border:5px solid red;
}
#box-sizing-large{
    border:20px solid red;
}
</style>

<p class = "box-sizing" id = "box-sizing-small">box-sizing</p>
<p class = "box-sizing" id = "box-sizing-large">box-sizing</p>
```
<style>
.box-sizing{
    margin:10px;
    width:150px;
}
#box-sizing-small{
    border:5px solid red;
}
#box-sizing-large{
    border:20px solid red;
}
</style>

<p class = "box-sizing" id = "box-sizing-small">box-sizing</p>
<p class = "box-sizing" id = "box-sizing-large">box-sizing</p>

기본적으로 content의 넓이와 높이가 설정된다

```html
<style>
.box-sizing-B{
    box-sizing:border-box;
    margin:10px;
    width:150px;
}
#box-sizing-small{
    border:5px solid red;
}
#box-sizing-large{
    border:20px solid red;
}
</style>

<p class = "box-sizing-B" id = "box-sizing-small">box-sizing</p>
<p class = "box-sizing-B" id = "box-sizing-large">box-sizing</p>
```
<style>
.box-sizing-B{
    margin:10px;
    width:150px;
    box-sizing:border-box;
}
#box-sizing-small{
    border:5px solid red;
}
#box-sizing-large{
    border:20px solid red;
}
</style>

<p class = "box-sizing-B" id = "box-sizing-small">box-sizing</p>
<p class = "box-sizing-B" id = "box-sizing-large">box-sizing</p>

`box-sizing:border-box;`로 border의 `width`가 150px로 나타나는 것을 확인할 수 있다

<br>

## 마진겹침
테두리와 다른 요소(element)의 테두리와의 간격, `margin`이 어떤 경우에는 사라져버리는 현상을 마진겹침 현상이라 한다

<a href = "https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4" target = "_blank" title = "참고자료">마진겹침</a>
<!-- 닫기 -->

#### 마진 상쇄 규칙 사용
* 마진 상쇄는 인접한 두 박스가 온전한 `block-level`요소일 경우에만 적용된다
* 마진 값이 0이더라도 상쇄 규칙은 적용된다
* 좌우 마진은 겹치더라도 상쇄되지 않는다

<br>

## <a href = "https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4" target = "_blank" title = "참고자료">마진겹침현상 3가지</a>

### 1. 인접 형제 박스 간 상하 마진이 겹칠 때
* 겹처진 두 `margin` 중 더 큰 `margin`값이 `margin`값이 된다
* 겹쳐진 두 값이 동일할 경우 중복을 상쇄한다

<img alt = "인접 형제 박스 간 상하 마진이 겹칠 때 - 겹쳐진 두 값이 동일할 때" src = "https://media.vlpt.us/post-images/raram2/97e16a40-121f-11ea-aaba-65695302c179/01-margin-collapsing-sibling-case.png" height = "300">

```html
<style>
.margin-collapsing1{
    margin:20px;
}
</style>

<ul>
<li class = "margin-collapsing1">html</li>
<li class = "margin-collapsing1">css</li>
<li class = "margin-collapsing1">js</li>
</ul>
```
<style>
.margin-collapsing1{
    margin:20px;
}
</style>

<ul>
<li class = "margin-collapsing1">html</li>
<li class = "margin-collapsing1">css</li>
<li class = "margin-collapsing1">js</li>
</ul>

리스트에서 위아래의 마진이 겹치는 것을 확인할 수 있다

<br>

### 2. 빈 요소의 상하 마진이 겹칠 때
* border와 같이 상하로 늘어나는 프로퍼티 값을 명시적으로 주지 않음
* 내부에 inline콘텐츠가 존재하지 않음  

이와같이 높이(height)가 0인 상태의 블록 요소(element)를 **빈 요소**라 말한다

* 위와 아래를 가르는 경계가 없어서 자신의 상단 마진의 값과 하단 마진의 값을 비교해 더 큰 값으로 상쇄한다
* 겹쳐진 두 값이 동일할 경우 중복을 상쇄한다
* 빈 요소와 인접 박스들의 마진 겹침이 일어나는 구조에서는 아래와 같이 여러번 상쇄한다

<img alt = "빈 요소의 상하 마진이 겹칠 때 - 빈 요소와 인접 박스들의 마진 겹침" src = "https://media.vlpt.us/post-images/raram2/ffac75c0-121f-11ea-aaba-65695302c179/02-margin-collapsing-emptybox-case.png" height = "300">

```html
<style>
#margin-collapsing2-1{
    /* border:1px solid yellowgreen; */
    margin-top:100px;
}
#margin-collapsing2-2{
    background-color:yellowgreen;
    margin-top:50px;
}
</style>

<div id = "margin-collapsing2-1">
    <div id = "margin-collapsing2-2">
        테두리 X
    </div>
</div>
```

<style>
#margin-collapsing2-3{
    border:1px solid yellowgreen;
    margin-top:100px;
}
#margin-collapsing2-4{
    background-color:yellowgreen;
    margin-top:50px;
}
</style>        
<div id = "margin-collapsing2-3">
    <div id = "margin-collapsing2-4">
        테두리 O
    </div>
</div>

<style>
#margin-collapsing2-1{
    margin-top:100px;
}
#margin-collapsing2-2{
    background-color:yellowgreen;
    margin-top:50px;
}
</style>

<div id = "margin-collapsing2-1">
    <div id = "margin-collapsing2-2">
        테두리 X
    </div>
</div>


테두리가 없을 때 테두리만큼의 공간이 상쇄되는 것을 확인할 수 있다

<br>

### 3. 부모 박스와 첫 번째 자식 박스의 상단 마진이 겹칠 때
콘텐츠 간의 간격을 벌리는 경계를 브라우저는 부모 박스와 첫 번째 자식 간의 경계를 그 사이에 있는 `border`, `padding`, `inline`콘텐츠 유무로 판단한다

* 부모의 `margin`이 첫 번째 자식의 `margin` 보다 **클 때** 자식의 `margin` 을 상쇄한다
* 부모의 `margin`이 첫 번째 자식의 `margin` 보다 **작을 때** 부모의 `margin` 을 상쇄한다
* 부모의 `margin`과 첫 번째 자식의 `margin`과 **같을 때** 중복을 상쇄한다

<img alt = "부모 박스와 첫 번째 자식 박스의 상단 마진이 겹칠 때 - 부모와 자식의 마진값이 같을 때" src = "https://media.vlpt.us/post-images/raram2/42b57370-1221-11ea-aaba-65695302c179/05-margin-collapsing-firstchild-case3.png" height = "300">

```html
<style>
#margin-collapsing3-3{
margin-top:50px;
margin-bottom:100px;
/* border:1px solid yellowgreen; */
}
#margin-collapsing3-4{
background-color:yellowgreen;
margin-top:100px;
}
</style>

<div id = "margin-collapsing3-3"></div>
<div id = "margin-collapsing3-4">테두리 X</div>
```
<style>
#margin-collapsing3-1{
margin-top:50px;
margin-bottom:100px;
border:1px solid yellowgreen;
}
#margin-collapsing3-2{
background-color:yellowgreen;
margin-top:100px;
}
</style>

<div id = "margin-collapsing3-1"></div>
<div id = "margin-collapsing3-2">테두리 O</div>

<style>
#margin-collapsing3-3{
margin-top:50px;
margin-bottom:100px;
}
#margin-collapsing3-4{
background-color:yellowgreen;
margin-top:100px;
}
</style>

<div id = "margin-collapsing3-3"></div>
<div id = "margin-collapsing3-4">테두리 X</div>


테두리가 없을 때 부모의 `margin`과 자식의 `margin`의 중복이 상쇄되는 것을 확인할 수 있다

<br>

#### +부모의 박스와 마지막 자식 박스의 하단 마진이 나란히 겹칠 때
상단 마진끼리 겹칠 때와 같은 원리이다

<img alt = "부모의 박스와 마지막 자식 박스의 하단 마진이 나란히 겹칠 때 - 부모의 마진이 더 클 때" src = "https://media.vlpt.us/post-images/raram2/59ea9cf0-1221-11ea-aaba-65695302c179/06-margin-collapsing-lastchild-case.png" height = "300">  

<br>
<br>

## 포지션
요소(element)들이 화면상의 어디에 위치할 것인가 를 결정

<a href = "https://victorydntmd.tistory.com/185" target = "_blank" title = "참고자료">CSS 포지션</a>

포지션 | 설명
|:---:| --- |
static | 기본
relative | 상대적인 크기
absolute |절대적인 크기
fixed | 스크롤과 상관없이 화면에 고정

<br>

### static
`left`, `top`, `right`와 같은 **offset**값을 무시하고 자기가 원래 위치해야 하는 위치에 정적으로 위치하게 한다  
각각의 요소(element)들은 `position:static;`을 기본 값으로 가지고 있다

```html
<style>
.position-1-1{
    border:1px solid yellowgreen;
    margin:10px;
}
/* #position-1-2{
    left:100px;
    top:100px;
} */
</style>

<div class = "position-1-1">other</div>
<div class = "position-1-1">
    parent
    <div class = "position-1-1" id = "position-1-2">me X</div>
</div>
```
me의 `position`을 정해주지 않았다 = `position:static;`

<style>
.position-1-1{
    border:1px solid yellowgreen;
    margin:10px;
}
/* #position-1-2{
    left:100px;
    top:100px;
} */
</style>

<div class = "position-1-1">other</div>
<div class = "position-1-1">
    parent
    <div class = "position-1-1" id = "position-1-2">me X</div>
</div>

<br>

<style>
.position-1-1{
    border:1px solid yellowgreen;
    margin:10px;
}
#position-1-2{
    left:100px;
    top:100px;
}
</style>

<div class = "position-1-1">other</div>
<div class = "position-1-1">
    parent
    <div class = "position-1-1" id = "position-1-2">me O</div>
</div>

차이점이 없는 것을 확인할 수 있다

<br>

### relative
자기가 원래 위치해야 하는 위치를 기준으로 상대적인 offset 거리만큼 이동한다

```html
<style>
.position-2-1{
    border:1px solid yellowgreen;
    margin:10px;
}
#position-2-2{
    /* position: relative; */
    left:100px;
    top:100px;
}
</style>

<div class = "position-2-1">other</div>
<div class = "position-2-1">
    parent
    <div class = "position-2-1" id = "position-2-2">me X</div>
</div>
```
`me`에 `position:relative;` 를 지정했다

<style>
.position-2-1{
    border:1px solid yellowgreen;
    margin:10px;
}
#position-2-2{
    /* position: relative; */
    left:100px;
    top:100px;
}
</style>

<div class = "position-2-1">other</div>
<div class = "position-2-1">
    parent
    <div class = "position-2-1" id = "position-2-2">me X</div>
</div>

<style>
.position-2-3{
    border:1px solid yellowgreen;
    margin:10px;
}
#position-2-4{
    position:relative;
    left:100px;
    top:100px;
}
</style>

<div class = "position-2-3">other</div>
<div class = "position-2-3">
    parent
    <div class = "position-2-3" id = "position-2-4">me O</div>
</div>

<br>
<br>
<br>
<br>

`me`의 위치가 오른쪽으로 `100px` , 아래로 `100px` 바뀐 것을 확인할 수 있다

<br>

### absolute
부모를 기준으로 상대적으로 위치를 지정할 수 있는 `relative` 와 달리 **`absolute` 는 html 요소(element)를 기준으로 절대적으로 위치를 지정할 수 있다**

```html
<style>
#position-3-1, #position-3-2{
    border:5px solid yellowgreen;
}
#position-3-3{
    background-color:gray;
    color:white;

    /* position:absolute; */
}
</style>

<div id = "position-3-1">other</div>
<div id = "position-3-2">
    parent
    <div id = "position-3-3">me (absolute X)</div>
</div>
```
`me`에 `position:absolute;`를 지정했다

<style>
#position-3-1, #position-3-2{
    border:5px solid yellowgreen;
}
#position-3-3{
    background-color:gray;
    color:white;

    /* position:absolute; */
}
</style>

<div id = "position-3-1">other</div>
<div id = "position-3-2">
    parent
    <div id = "position-3-3">me (absolute X)</div>
</div>

<br>

<style>
#position-3-4, #position-3-5{
    border:5px solid yellowgreen;
}
#position-3-6{
    background-color:gray;
    color:white;

    position:absolute;
}
</style>

<div id = "position-3-4">other</div>
<div id = "position-3-5">
    parent
    <div id = "position-3-6">me (absolute O)</div>
</div>

<br>

요소(element)에 `absolute` 를 지정하게 되면 그 요소(element)는 부모와 링크가 끊기기 때문에 **테두리가 부모만 감싸게 되고, 배경의 크기는 자신의 컨텐츠 만해지는** 것을 확인할 수 있다

<br>

```html
<style>
#position-3-7, #position-3-8{
    border:5px solid yellowgreen;
}
#position-3-9{
    background-color:gray;
    color:white;

    position:absolute;
    left:0px;
    top:0px;
}
#position-3-8{
    position:relative;
}
</style>

<div id = "position-3-7">other</div>
<div id = "position-3-8">
    parent
    <div id = "position-3-9">me</div>
</div>
```
`parent` 에 `postition:relative` 를 지정했다

<style>
#position-3-7, #position-3-8{
    border:5px solid yellowgreen;
}
#position-3-9{
    background-color:gray;
    color:white;

    position:absolute;
    left:0px;
    top:0px;
}
#position-3-8{
    position:relative;
}
</style>

<div id = "position-3-7">other</div>
<div id = "position-3-8">
    parent
    <div id = "position-3-9">me</div>
</div>

**`absolute`는 `static`이 아닌 조상**의 위치에 offset이 적용되는 것을 확인할 수 있다

<br>

### fixed
특정 요소(element)를 화면에 그 위치에 고정시켜서 스크롤로 완전히 독립하게 한다

```html
<style>
#position-4-1, #position-4-2{
border:5px solid yellowgreen;
}
#position-4-4{
height:10000px;
background-color:yellowgreen;
}
#position-4-3{
background-color:black;
color:white;
            
position:fixed;
left:0;
bottom:0;
width:100%;
height:30px;
text-align:center;
}
</style>
        
<div id = "position-4-1">other</div>
    <div id = "position-4-2">
        parent
            <div id = "position-4-3">me</div>
    </div>
<div id = "position-4-4">large</div>
```
`me`에 `position:fixed;`를 지정했다

<!-- 사진 -->

요소(element)가 화면에 고정되는 것을 확인할 수 있다

`absolute` 와 같이 부모와 링크가 끊기기 때문에 **`width` 와 `height` 값을 지정해주지 않으면 컨텐츠 크기만큼 된다**

<br>

## Flex
레이아웃(layout)은 컨텐츠를 만들 때 컨텐츠를 정리해서 구조화 시키는 것이다  
**레이아웃(layout)을 표현할 때 사용된다**

레이아웃(layout)을 표현하는 방법에는 여러가지가 있었다

* 표(table)를 이용해 layout을 만드는 방법  
유지보수의 문제, 표와 정보로서의 내용이 혼동
* 포지션(position)을 통해서 각각의 요소(element)의 위치를 옮기는 방법
* floating (이미지가 있으면 옆의 글씨들이 흘러가게 하는 효과)를 활용하는 방법

<br>

<img alt = "CSS Flex" src = "https://studiomeal.com/wp-content/uploads/2020/01/02.jpg" height = "300">

정렬되고자 하는 각각의 아이템(item)들은 부모에 혜당하는 컨테이너(container)가 필요하다

컨테이너(container)와 아이템(item)들은 컨테이너(container)에게 부여해햐 하는 속성이 있고, 아이템(item)에게 부여해야 하는 속성이 구분되어 있다

<img alt = "flex 속성" src = "https://media.vlpt.us/images/psj0810/post/78899b35-4a93-404c-8596-a2b3bf275611/flex2.jpg" height = "350">

>container -> item의 순서

<br>

<a href = "https://studiomeal.com/archives/197" target = "_blank" title = "참고자료">CSS Flex</a>  
<a href ="https://heropy.blog/2018/11/24/css-flexible-box/" target = "_blank" title = "참고자료">CSS Flex</a>  
<a href = "https://codepen.io/enxaneta/pen/adLPwv" target = "_blank" title = "참고자료">Flex 테스트</a>

<br>

> 컨테이너(container)에 적용하는 속성들


### display : flex ;
**Flex 를 사용할 때 컨테이너(container)에게 `display:flex;`를 주고 시작한다**

```html
<style>
.flex-container-1-1-1{
    background-color:gray;
    /* display:flex; */
}
.flex-item-1-1-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-1-1">
    <div class = "flex-item-1-1-1">X</div>
    <div class = "flex-item-1-1-1">1</div>
    <div class = "flex-item-1-1-1">2</div>
    <div class = "flex-item-1-1-1">3</div>
    <div class = "flex-item-1-1-1">4</div>
</div>
```
부모에게 `display:flex;`를 지정한다

<style>
.flex-container-1-1-1{
    background-color:gray;
    /* display:flex; */
}
.flex-item-1-1-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-1-1">
    <div class = "flex-item-1-1-1">X</div>
    <div class = "flex-item-1-1-1">1</div>
    <div class = "flex-item-1-1-1">2</div>
    <div class = "flex-item-1-1-1">3</div>
    <div class = "flex-item-1-1-1">4</div>
</div>

<br>

<style>
.flex-container-1-1-2{
    background-color:gray;
    display:flex;
}
.flex-item-1-1-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-1-2">
    <div class = "flex-item-1-1-2">O</div>
    <div class = "flex-item-1-1-2">1</div>
    <div class = "flex-item-1-1-2">2</div>
    <div class = "flex-item-1-1-2">3</div>
    <div class = "flex-item-1-1-2">4</div>
</div>

`display:flex;`를 주면 자식들이 자기 성격(div = block-level)을 자유자제로 배치할 수 있게되는 것을 확인할 수 있다  

<br>

### flex-direction
**아이템(item)들이 배치되는 축의 방향을 결정한다**

<img alt = "flex-direction" src = "https://studiomeal.com/wp-content/uploads/2020/01/05-1.jpg">

<br>

#### row
기본값, 아이템(item)들을 가로방향으로 배치된다

```html
<style>
.flex-container-1-2-1{
    background-color:gray;
    display:flex;
    flex-direction:row;
}
.flex-item-1-2-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
}
</style>

<div class = "flex-container-1-2-1">
    <div class = "flex-item-1-2-1">1</div>
    <div class = "flex-item-1-2-1">2</div>
    <div class = "flex-item-1-2-1">3</div>
    <div class = "flex-item-1-2-1">4</div>
    <div class = "flex-item-1-2-1">5</div>
</div>
```
`flex-direction:row;` 을 추가했다

<style>
.flex-container-1-2-1{
    background-color:gray;
    display:flex;
    flex-direction:row;
}
.flex-item-1-2-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
}
</style>

<div class = "flex-container-1-2-1">
    <div class = "flex-item-1-2-1">1</div>
    <div class = "flex-item-1-2-1">2</div>
    <div class = "flex-item-1-2-1">3</div>
    <div class = "flex-item-1-2-1">4</div>
    <div class = "flex-item-1-2-1">5</div>
</div>

<br>

#### row-reverse
아이템(item)들을 가로방향으로 역순으로 배치된다

```html
<style>
.flex-container-1-2-2{
    background-color:gray;
    display:flex;
    flex-direction:row-reverse;
}
.flex-item-1-2-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-2">
    <div class = "flex-item-1-2-2">1</div>
    <div class = "flex-item-1-2-2">2</div>
    <div class = "flex-item-1-2-2">3</div>
    <div class = "flex-item-1-2-2">4</div>
    <div class = "flex-item-1-2-2">5</div>
</div>
```
`flex-direction:row-reverse;`을 추가했다

<style>
.flex-container-1-2-2{
    background-color:gray;
    display:flex;
    flex-direction:row-reverse;
}
.flex-item-1-2-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-2">
    <div class = "flex-item-1-2-2">1</div>
    <div class = "flex-item-1-2-2">2</div>
    <div class = "flex-item-1-2-2">3</div>
    <div class = "flex-item-1-2-2">4</div>
    <div class = "flex-item-1-2-2">5</div>
</div>

<br>

#### column
아이템(item)들을 수직방향으로 정렬시킨다

```html
<style>
.flex-container-1-2-3{
    background-color:gray;
    height:150px;
    display:flex;
    flex-direction:column;
}
.flex-item-1-2-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-3">
    <div class = "flex-item-1-2-3">1</div>
    <div class = "flex-item-1-2-3">2</div>
    <div class = "flex-item-1-2-3">3</div>
    <div class = "flex-item-1-2-3">4</div>
    <div class = "flex-item-1-2-3">5</div>
</div>
```
`flex-direction:column` , `height:150px;` 을 추가했다

<style>
.flex-container-1-2-3{
    background-color:gray;
    height:150px;
    display:flex;
    flex-direction:column;
}
.flex-item-1-2-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-3">
    <div class = "flex-item-1-2-3">1</div>
    <div class = "flex-item-1-2-3">2</div>
    <div class = "flex-item-1-2-3">3</div>
    <div class = "flex-item-1-2-3">4</div>
    <div class = "flex-item-1-2-3">5</div>
</div>

<br>

#### column-reverse
아이템(item)들을 수직방향으로 역순으로 정렬시킨다

```html
<style>
.flex-container-1-2-4{
    background-color:gray;
    height:150px;
    display:flex;
    flex-direction:column-reverse;
}
.flex-item-1-2-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-4">
    <div class = "flex-item-1-2-4">1</div>
    <div class = "flex-item-1-2-4">2</div>
    <div class = "flex-item-1-2-4">3</div>
    <div class = "flex-item-1-2-4">4</div>
    <div class = "flex-item-1-2-4">5</div>
</div>
```
`flex:direction:column-reverse` , `height:150px` 을 추가했다

<style>
.flex-container-1-2-4{
    background-color:gray;
    height:150px;
    display:flex;
    flex-direction:column-reverse;
}
.flex-item-1-2-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen; 
}
</style>

<div class = "flex-container-1-2-4">
    <div class = "flex-item-1-2-4">1</div>
    <div class = "flex-item-1-2-4">2</div>
    <div class = "flex-item-1-2-4">3</div>
    <div class = "flex-item-1-2-4">4</div>
    <div class = "flex-item-1-2-4">5</div>
</div>

<br>

### flex-wrap
**아이템(item)의 줄바꿈을 어떻게 할지 결정한다**

<img alt = "flex-wrap" src = "https://studiomeal.com/wp-content/uploads/2020/01/06-1.jpg" width = "500">

<br>

#### nowrap
기본값, 줄바꿈을 하지않고 넘치면 아이템(item)들이 작아진다
(컨테이너의 크기가 아이템들의 크기의 합보다 작으면)

```html
<style>
.flex-container-1-3-1{
    background-color:gray;
    display:flex;
    flex-wrap:nowrap;
}
.flex-item-1-3-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-1">
    <div class = "flex-item-1-3-1">1</div>
    <div class = "flex-item-1-3-1">2</div>
    <div class = "flex-item-1-3-1">3</div>
</div>
```
`flex-wrap:nowrap;` 을 추가했다

<style>
.flex-container-1-3-1{
    background-color:gray;
    display:flex;
    flex-wrap:nowrap;
    width:200px;
}
.flex-item-1-3-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-1">
    <div class = "flex-item-1-3-1">1</div>
    <div class = "flex-item-1-3-1">2</div>
    <div class = "flex-item-1-3-1">3</div>
</div>

아이템(item)들이 줄어든 것을 확인할 수 있다

<br>

#### wrap
넘치면 아이템(item)들이 줄바꿈을 하고 밑으로 넘어간다  
(컨테이너의 크기가 아이템들의 크기의 합보다 작으면)

```html
<style>
.flex-container-1-3-2{
    background-color:gray;
    display:flex;
    flex-wrap:wrap;
}
.flex-item-1-3-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-2">
    <div class = "flex-item-1-3-2">1</div>
    <div class = "flex-item-1-3-2">2</div>
    <div class = "flex-item-1-3-2">3</div>
</div>
```
`flex-wrap:wrap;` 을 추가했다

<style>
.flex-container-1-3-2{
    background-color:gray;
    display:flex;
    flex-wrap:wrap;
    width:300px;
}
.flex-item-1-3-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-2">
    <div class = "flex-item-1-3-2">1</div>
    <div class = "flex-item-1-3-2">2</div>
    <div class = "flex-item-1-3-2">3</div>
</div>

줄바꿈, 아래로 내려가는 것을 확인할 수 있다

<br>

#### wrap-reverse
넘치면 아이템(item)들이 줄바꿈을 하고 위로 올라간다
(컨테이너의 크기가 아이템들의 크기의 합보다 작으면)

```html
<style>
.flex-container-1-3-3{
    background-color:gray;
    display:flex;
    flex-wrap:wrap-reverse;
    width:300px;
}
.flex-item-1-3-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-3">
    <div class = "flex-item-1-3-3">1</div>
    <div class = "flex-item-1-3-3">2</div>
    <div class = "flex-item-1-3-3">3</div>
</div>
```
`flex-wrap:wrap-reverse;` 을 추가했다

<style>
.flex-container-1-3-2{
    background-color:gray;
    display:flex;
    flex-wrap:wrap-reverse;
    width:300px;
}
.flex-item-1-3-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-3-2">
    <div class = "flex-item-1-3-2">1</div>
    <div class = "flex-item-1-3-2">2</div>
    <div class = "flex-item-1-3-2">3</div>
</div>

줄바꿈, 위로 올라가는 것을 확인할수 있다

<br>

### flex-flow
**`flex-direction` 과 `flex-wrap` 을 같이 지정할 수 있다**  
`flex-direction` , `flex-wrap` 의 순서로 한 칸 씩 떼고 적는다

```html
<style>
.flex-container-1-4-1{
    background-color:gray;
    display:flex;
    flex-flow:row-reverse wrap;
    width:300px;
}
.flex-item-1-4-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-4-1">
    <div class = "flex-item-1-4-1">1</div>
    <div class = "flex-item-1-4-1">2</div>
    <div class = "flex-item-1-4-1">3</div>
</div>
```
`flex-flow:row-reverse wrap;` 을 추가했다

<style>
.flex-container-1-4-1{
    background-color:gray;
    display:flex;
    flex-flow:row-reverse wrap;
    width:300px;
}
.flex-item-1-4-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    width:100px;
    height:100px;
    margin:5px;
}
</style>

<div class = "flex-container-1-4-1">
    <div class = "flex-item-1-4-1">1</div>
    <div class = "flex-item-1-4-1">2</div>
    <div class = "flex-item-1-4-1">3</div>
</div>

`flex-direction:row-reverse` + `flex-wrap:wrap` 와 같은 효과를 확인할 수 있다

<br>

### justify-content, aling-items

<img alt = "flex main axis, cross axis" src = "https://studiomeal.com/wp-content/uploads/2020/01/04-1.jpg" height = "250">
<img alt = "justify, align" src = "https://studiomeal.com/wp-content/uploads/2020/01/09-1.jpg" height = "250">

<br>

### justify-content
**메인축(main axis) 방향으로 아이템(item)들을 정렬한다**

<img alt = "justify-content" src = "https://o.quizlet.com/Stu3DSru1O2NcBSXMCXDzg.png" height = "350">

<br>

#### flex-start
기본값, 아이템(item)들을 시작점으로 정렬  
`flex-direction`이 `row`(가로)일 때는 왼쪽, `column`(세로)일 때는 위

```html
<style>
.flex-container-1-5-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-start;
}
.flex-item-1-5-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-1">
    <div class = "flex-item-1-5-1">1</div>
    <div class = "flex-item-1-5-1">2</div>
    <div class = "flex-item-1-5-1">row</div>
</div>
```
`justfity-content:flex-start;` 을 추가했다

<style>
.flex-container-1-5-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-start;
}
.flex-item-1-5-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-1">
    <div class = "flex-item-1-5-1">1</div>
    <div class = "flex-item-1-5-1">2</div>
    <div class = "flex-item-1-5-1">row</div>
</div>

<br>

<style>
.flex-container-1-5-2{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:flex-start;
}
.flex-item-1-5-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-2">
    <div class = "flex-item-1-5-2">1</div>
    <div class = "flex-item-1-5-2">2</div>
    <div class = "flex-item-1-5-2">column</div>
</div>

<br>

<style>
.flex-container-1-5-3{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-start;

    width:310px;
}
.flex-item-1-5-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-3">
    <div class = "flex-item-1-5-3">1</div>
    <div class = "flex-item-1-5-3">2</div>
    <div class = "flex-item-1-5-3">wrap</div>
</div>

<br>

#### flex-end
아이템(item)들을 끝점으로 정렬
`flex-direction`이 `row`(가로)일 때는 오른쪽, `column`(세로)일 때는 아래

```html
<style>
.flex-container-1-5-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-end;
}
.flex-item-1-5-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-4">
    <div class = "flex-item-1-5-4">1</div>
    <div class = "flex-item-1-5-4">2</div>
    <div class = "flex-item-1-5-4">row</div>
</div>
```
`flex-flow:row wrap;` 을 추가했다

<style>
.flex-container-1-5-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-end;
}
.flex-item-1-5-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-4">
    <div class = "flex-item-1-5-4">1</div>
    <div class = "flex-item-1-5-4">2</div>
    <div class = "flex-item-1-5-4">row</div>
</div>

<br>

<style>
.flex-container-1-5-5{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:flex-end;
}
.flex-item-1-5-5{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-5">
    <div class = "flex-item-1-5-5">1</div>
    <div class = "flex-item-1-5-5">2</div>
    <div class = "flex-item-1-5-5">column</div>
</div>

<br>

<style>
.flex-container-1-5-6{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:flex-end;

    width:310px;
}
.flex-item-1-5-6{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-6">
    <div class = "flex-item-1-5-6">1</div>
    <div class = "flex-item-1-5-6">2</div>
    <div class = "flex-item-1-5-6">wrap</div>
</div>

<br>

#### center
아이템(item)들을 가운데로 정렬한다

```html
<style>
.flex-container-1-5-7{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:center;
}
.flex-item-1-5-7{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-7">
    <div class = "flex-item-1-5-7">1</div>
    <div class = "flex-item-1-5-7">2</div>
    <div class = "flex-item-1-5-7">row</div>
</div>
```
`justify-content:center;` 을 추가했다

<style>
.flex-container-1-5-7{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:center;
}
.flex-item-1-5-7{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-7">
    <div class = "flex-item-1-5-7">1</div>
    <div class = "flex-item-1-5-7">2</div>
    <div class = "flex-item-1-5-7">row</div>
</div>

<br>

<style>
.flex-container-1-5-8{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:center;
}
.flex-item-1-5-8{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-8">
    <div class = "flex-item-1-5-8">1</div>
    <div class = "flex-item-1-5-8">2</div>
    <div class = "flex-item-1-5-8">column</div>
</div>

<br>

<style>
.flex-container-1-5-9{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:center;

    width:310px;
}
.flex-item-1-5-9{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-9">
    <div class = "flex-item-1-5-9">1</div>
    <div class = "flex-item-1-5-9">2</div>
    <div class = "flex-item-1-5-9">wrap</div>
</div>

<br>

#### space-between
아이템(item)들 사이에 같은 거리를 두고 정렬한다

```html
<style>
.flex-container-1-5-10{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-between;
}
.flex-item-1-5-10{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-10">
    <div class = "flex-item-1-5-10">1</div>
    <div class = "flex-item-1-5-10">2</div>
    <div class = "flex-item-1-5-10">row</div>
</div>
```
`justify-centent:space-between;` 을 추가했다

<style>
.flex-container-1-5-10{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-between;
}
.flex-item-1-5-10{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-10">
    <div class = "flex-item-1-5-10">1</div>
    <div class = "flex-item-1-5-10">2</div>
    <div class = "flex-item-1-5-10">row</div>
</div>

<br>

<style>
.flex-container-1-5-11{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:space-between;
}
.flex-item-1-5-11{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-11">
    <div class = "flex-item-1-5-11">1</div>
    <div class = "flex-item-1-5-11">2</div>
    <div class = "flex-item-1-5-11">column</div>
</div>

<br>

<style>
.flex-container-1-5-12{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-between;

    width:310px;
}
.flex-item-1-5-12{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-12">
    <div class = "flex-item-1-5-12">1</div>
    <div class = "flex-item-1-5-12">2</div>
    <div class = "flex-item-1-5-12">wrap</div>
</div>

<br>

#### space-around
아이템(item)들의 둘레에 일정한 간격을 두고 정렬한다  


```html
<style>
.flex-container-1-5-13{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-around;
}
.flex-item-1-5-13{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-13">
    <div class = "flex-item-1-5-13">1</div>
    <div class = "flex-item-1-5-13">2</div>
    <div class = "flex-item-1-5-13">row</div>
</div>
```
`justify-content:space-around` 을 추가했다

<style>
.flex-container-1-5-13{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-around;
}
.flex-item-1-5-13{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-13">
    <div class = "flex-item-1-5-13">1</div>
    <div class = "flex-item-1-5-13">2</div>
    <div class = "flex-item-1-5-13">row</div>
</div>

<br>

<style>
.flex-container-1-5-14{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:space-around;
}
.flex-item-1-5-14{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-14">
    <div class = "flex-item-1-5-14">1</div>
    <div class = "flex-item-1-5-14">2</div>
    <div class = "flex-item-1-5-14">column</div>
</div>

<br>

<style>
.flex-container-1-5-15{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-around;

    width:310px;
}
.flex-item-1-5-15{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-15">
    <div class = "flex-item-1-5-15">1</div>
    <div class = "flex-item-1-5-15">2</div>
    <div class = "flex-item-1-5-15">wrap</div>
</div>

<br>

#### space-evenly
아이템(item)들사이와 시작점, 끝점 사이에 일정한 간격을 두고 정렬한다

```html
<style>
.flex-container-1-5-16{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-evenly;
}
.flex-item-1-5-16{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-16">
    <div class = "flex-item-1-5-16">1</div>
    <div class = "flex-item-1-5-16">2</div>
    <div class = "flex-item-1-5-16">row</div>
</div>
```
`justify-content:space-evenly;` 을 추가했다

<style>
.flex-container-1-5-16{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-evenly;
}
.flex-item-1-5-16{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-16">
    <div class = "flex-item-1-5-16">1</div>
    <div class = "flex-item-1-5-16">2</div>
    <div class = "flex-item-1-5-16">row</div>
</div>

<br>

<style>
.flex-container-1-5-17{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;

    justify-content:space-evenly;
}
.flex-item-1-5-17{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-17">
    <div class = "flex-item-1-5-17">1</div>
    <div class = "flex-item-1-5-17">2</div>
    <div class = "flex-item-1-5-17">column</div>
</div>

<br>

<style>
.flex-container-1-5-18{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    justify-content:space-evenly;

    width:310px;
}
.flex-item-1-5-18{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
    height:30px;
}
</style>

<div class = "flex-container-1-5-18">
    <div class = "flex-item-1-5-18">1</div>
    <div class = "flex-item-1-5-18">2</div>
    <div class = "flex-item-1-5-18">wrap</div>
</div>

<br>

<img alt = "justify-content space-between, space-around, space-evenly" src="https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg" height = "350">

<br>

### align-items
**수직축(cross axis) 방향으로 아이템(item)들을 정렬한다**

<img alt = "aling-items" src = "https://o.quizlet.com/N6QeFZQCEV3p1w3fACDNLw.png" height = "350">

<br>

#### stretch
기본값, 아이템(item)들이 수직축(cross axis)방향으로 끝까지 늘어난다

```html
<style>
.flex-container-1-6-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:stretch;

    height:110px;
}
.flex-item-1-6-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-1">
    <div class = "flex-item-1-6-1">1</div>
    <div class = "flex-item-1-6-1">2</div>
    <div class = "flex-item-1-6-1">row</div>
</div>
```
`align-items:stretch` 을 추가했다

<style>
.flex-container-1-6-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:stretch;

    height:110px;
}
.flex-item-1-6-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-1">
    <div class = "flex-item-1-6-1">1</div>
    <div class = "flex-item-1-6-1">2</div>
    <div class = "flex-item-1-6-1">row</div>
</div>

<br>

<style>
.flex-container-1-6-2{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;

    align-items:stretch;

    height:110px;
}
.flex-item-1-6-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-2">
    <div class = "flex-item-1-6-2">1</div>
    <div class = "flex-item-1-6-2">2</div>
    <div class = "flex-item-1-6-2">column</div>
</div>

<br>

<style>
.flex-container-1-6-3{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:stretch;

    height:110px;
    width:310px;
}
.flex-item-1-6-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-3">
    <div class = "flex-item-1-6-3">1</div>
    <div class = "flex-item-1-6-3">2</div>
    <div class = "flex-item-1-6-3">wrap</div>
</div>

<br>

#### flex-start
아이템(item)들을 시작점으로 정렬한다  
`flex-direction` 이 `row`(가로)일 때는 위, `column`(세로)일 때는 왼쪽

```html
<style>
.flex-container-1-6-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:flex-start;

    height:110px;
}
.flex-item-1-6-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-4">
    <div class = "flex-item-1-6-4">1</div>
    <div class = "flex-item-1-6-4">2</div>
    <div class = "flex-item-1-6-4">row</div>
</div>
```
`align-items:flex-start` 을 추가했다

<style>
.flex-container-1-6-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:flex-start;

    height:110px;
}
.flex-item-1-6-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-4">
    <div class = "flex-item-1-6-4">1</div>
    <div class = "flex-item-1-6-4">2</div>
    <div class = "flex-item-1-6-4">row</div>
</div>

<br>

<style>
.flex-container-1-6-5{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;

    align-items:flex-start;

    height:110px;
}
.flex-item-1-6-5{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-5">
    <div class = "flex-item-1-6-5">1</div>
    <div class = "flex-item-1-6-5">2</div>
    <div class = "flex-item-1-6-5">column</div>
</div>

<br>

#### flex-end
아이템(item)들을 끝점으로 정렬한다  
`direction` 이 `row`(가로)일 때는 아래, `column`(세로)일 때는 오른쪽

```html
<style>
.flex-container-1-6-6{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:flex-end;

    height:110px;
}
.flex-item-1-6-6{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-6">
    <div class = "flex-item-1-6-6">1</div>
    <div class = "flex-item-1-6-6">2</div>
    <div class = "flex-item-1-6-6">row</div>
</div>
```
`align-items:flex-end` 을 추가했다

<style>
.flex-container-1-6-6{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:flex-end;

    height:110px;
}
.flex-item-1-6-6{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-6">
    <div class = "flex-item-1-6-6">1</div>
    <div class = "flex-item-1-6-6">2</div>
    <div class = "flex-item-1-6-6">row</div>
</div>

<br>

<style>
.flex-container-1-6-7{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;

    align-items:flex-end;

    height:110px;
}
.flex-item-1-6-7{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-7">
    <div class = "flex-item-1-6-7">1</div>
    <div class = "flex-item-1-6-7">2</div>
    <div class = "flex-item-1-6-7">column</div>
</div>

<br>

#### center
아이템(item)들을 가운데로 정렬

```html
<style>
.flex-container-1-6-8{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:center;

    height:110px;
}
.flex-item-1-6-8{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-8">
    <div class = "flex-item-1-6-8">1</div>
    <div class = "flex-item-1-6-8">2</div>
    <div class = "flex-item-1-6-8">row</div>
</div>
```
`align-items:center` 을 추가했다

<style>
.flex-container-1-6-8{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:center;

    height:110px;
}
.flex-item-1-6-8{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-8">
    <div class = "flex-item-1-6-8">1</div>
    <div class = "flex-item-1-6-8">2</div>
    <div class = "flex-item-1-6-8">row</div>
</div>

콘텐츠가 가운데에 위치하는 것을 확인할 수 있다
<br>
<br>

<style>
.flex-container-1-6-9{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;

    align-items:center;

    height:110px;
}
.flex-item-1-6-9{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-6-9">
    <div class = "flex-item-1-6-9">1</div>
    <div class = "flex-item-1-6-9">2</div>
    <div class = "flex-item-1-6-9">column</div>
</div>

<br>

#### baseline
아이템(item)들을 텍스트 베이스라인(baseline)을 기준으로 정렬한다

```html
<style>
.flex-container-1-6-10{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:baseline;

    height:110px;
}
.flex-item-1-6-10{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
#flex-item-1-6-10-1{
    height:70px;
}
#flex-item-1-6-10-2{
    height:50px;
}
</style>

<div class = "flex-container-1-6-10">
    <div class = "flex-item-1-6-10" 
    id = "flex-item-1-6-10-1">1</div>
    <div class = "flex-item-1-6-10"
    id = "fled-item-1-6-10-2">2</div>
    <div class = "flex-item-1-6-10">row</div>
</div>
```
`align-items:baseline;` 을 추가했다

<style>
.flex-container-1-6-10{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    align-items:baseline;

    height:110px;
}
.flex-item-1-6-10{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
#flex-item-1-6-10-1{
    height:70px;
}
#flex-item-1-6-10-2{
    height:50px;
}
</style>

<div class = "flex-container-1-6-10">
    <div class = "flex-item-1-6-10" 
    id = "flex-item-1-6-10-1">1</div>
    <div class = "flex-item-1-6-10"
    id = "fled-item-1-6-10-2">2</div>
    <div class = "flex-item-1-6-10">row</div>
</div>

글씨의 <a href = "https://cphinf.pstatic.net/mooc/20180930_2/1538299310812y3Shi_PNG/11123.png" target = "_blank" title = "참고자료">baseline</a> 을 기준으로 정렬되는 것을 확인할 수 있다

<br>

<style>
.flex-container-1-6-11{
    background-color:gray;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;

    align-items:baseline;

    height:110px;
}
.flex-item-1-6-11{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;

    margin:5px;
    width:100px;
}
#flex-item-1-6-11-1{
    width:400px;
}
#flex-item-1-6-11-2{
    width:200px;
}
</style>

<div class = "flex-container-1-6-11">
    <div class = "flex-item-1-6-11"
    id = flex-item-1-6-11-1>1</div>
    <div class = "flex-item-1-6-11"
    id = flex-item-1-6-11-2>2</div>
    <div class = "flex-item-1-6-11">column</div>
</div>

<br>

### align-content
**`flex-wrap:wrap;` 이 설정된 상태에서, 아이템(item)들의 줄이 2줄이상 되었을 때의 수직축(cross axis) 방향 정렬을 결정한다**

<img alt = "align-content" src = "https://heropy.blog/images/screenshot/css-flexible-box/flex-align-content.jpg" height = "400">

<br>

<a href = "https://developer.mozilla.org/ko/docs/Web/CSS/align-content" target = "_blank" title = "참고자료">Flex align-content</a>

<br>

#### stretch
기본값, 컨테이너(container)의 교차 축(cross axis)을 채우기 위해 아이템(item)을 늘린다

```html
<style>
.flex-container-1-7-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:stretch;

    width:310px;
    height:310px;
}
.flex-item-1-7-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-1">
    <div class = "flex-item-1-7-1">1</div>
    <div class = "flex-item-1-7-1">2</div>
    <div class = "flex-item-1-7-1">stretch</div>
</div>
```
`align-content:stretch;` 을 추가했다

<style>
.flex-container-1-7-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:stretch;

    width:310px;
    height:310px;
}
.flex-item-1-7-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-1">
    <div class = "flex-item-1-7-1">1</div>
    <div class = "flex-item-1-7-1">2</div>
    <div class = "flex-item-1-7-1">stretch</div>
</div>

`align-content:stretch`일때 아이템(item)들의 `height`값이 없어서(`auto`기본값) 교차축(cross axis)방향으로 늘어나는 것을 확인할 수 있다

<br>

#### flex-start
아이템(item)을 시작점으로 정렬한다

```html
<style>
.flex-container-1-7-2{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:flex-start;

    width:310px;
    height:310px;
}
.flex-item-1-7-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-2">
    <div class = "flex-item-1-7-2">1</div>
    <div class = "flex-item-1-7-2">2</div>
    <div class = "flex-item-1-7-2">flex-start</div>
</div>
```
`align-content:flex-start` 을 추가했다

<style>
.flex-container-1-7-2{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:flex-start;

    width:310px;
    height:310px;
}
.flex-item-1-7-2{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-2">
    <div class = "flex-item-1-7-2">1</div>
    <div class = "flex-item-1-7-2">2</div>
    <div class = "flex-item-1-7-2">flex-start</div>
</div>

<br>

#### flex-end
아이템(item)을 끝점으로 정렬한다

```html
<style>
.flex-container-1-7-3{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:flex-end;

    width:310px;
    height:310px;
}
.flex-item-1-7-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-3">
    <div class = "flex-item-1-7-3">1</div>
    <div class = "flex-item-1-7-3">2</div>
    <div class = "flex-item-1-7-3">flex-end</div>
</div>
```
`align-content:flex-end;` 을 추가했다

<style>
.flex-container-1-7-3{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:flex-end;

    width:310px;
    height:310px;
}
.flex-item-1-7-3{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-3">
    <div class = "flex-item-1-7-3">1</div>
    <div class = "flex-item-1-7-3">2</div>
    <div class = "flex-item-1-7-3">flex-end</div>
</div>

<br>

#### center
아이템(item)을 가운데로 정렬한다

```html
<style>
.flex-container-1-7-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:center;

    width:310px;
    height:310px;
}
.flex-item-1-7-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-4">
    <div class = "flex-item-1-7-4">1</div>
    <div class = "flex-item-1-7-4">2</div>
    <div class = "flex-item-1-7-4">center</div>
</div>
```
`align-content:center` 을 추가했다

<style>
.flex-container-1-7-4{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:center;

    width:310px;
    height:310px;
}
.flex-item-1-7-4{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-4">
    <div class = "flex-item-1-7-4">1</div>
    <div class = "flex-item-1-7-4">2</div>
    <div class = "flex-item-1-7-4">center</div>
</div>

<br>

#### space-between
시작 아이템(item)은 시작점, 마지막 아이템(item)은 끝점, 나머지 아이템(item)은 사이에 고르게 정렬된다

```html
<style>
.flex-container-1-7-5{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-between;

    width:310px;
    height:310px;
}
.flex-item-1-7-5{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-5">
    <div class = "flex-item-1-7-5">1</div>
    <div class = "flex-item-1-7-5">2</div>
    <div class = "flex-item-1-7-5">space-between</div>
</div>
```
`align-centent:space-between` 을 추가했다

<style>
.flex-container-1-7-5{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-between;

    width:310px;
    height:310px;
}
.flex-item-1-7-5{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-5">
    <div class = "flex-item-1-7-5">1</div>
    <div class = "flex-item-1-7-5">2</div>
    <div class = "flex-item-1-7-5">space-between</div>
</div>

<br>

#### space-around
아이템(item)들의 둘레에 일정한 간격을 두고 정렬한다

```html
<style>
.flex-container-1-7-6{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-around;

    width:310px;
    height:310px;
}
.flex-item-1-7-6{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-6">
    <div class = "flex-item-1-7-6">1</div>
    <div class = "flex-item-1-7-6">2</div>
    <div class = "flex-item-1-7-6">space-around</div>
</div>
```
`align-content:space-around;` 을 추가했다

<style>
.flex-container-1-7-6{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-around;

    width:310px;
    height:310px;
}
.flex-item-1-7-6{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-6">
    <div class = "flex-item-1-7-6">1</div>
    <div class = "flex-item-1-7-6">2</div>
    <div class = "flex-item-1-7-6">space-around</div>
</div>

<br>

#### space-evenly
아이템(item)들사이와 시작점, 끝점 사이에 일정한 간격을 두고 정렬한다

```html
<style>
.flex-container-1-7-7{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-evenly;

    width:310px;
    height:310px;
}
.flex-item-1-7-7{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-7">
    <div class = "flex-item-1-7-7">1</div>
    <div class = "flex-item-1-7-7">2</div>
    <div class = "flex-item-1-7-7">space-evenly</div>
</div>
```
`align-content:space-evenly` 을 추가했다

<style>
.flex-container-1-7-7{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;

    align-content:space-around;

    width:310px;
    height:310px;
}
.flex-item-1-7-7{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    width:100px;
}
</style>

<div class = "flex-container-1-7-7">
    <div class = "flex-item-1-7-7">1</div>
    <div class = "flex-item-1-7-7">2</div>
    <div class = "flex-item-1-7-7">space-evenly</div>
</div>

<br>

> 아이템(item)에 적용하는 속성들

### flex-basis
**아이템(item)의 기본 크기를 설정한다**  
`flex-direction` 이 `row` 일 때는 너비(width), `column` 일 때는 높이(height)

```html
<style>
.flex-container-2-1-1{
background-color:gray;
display:flex;
flex-flow:row wrap;

}
.flex-item-2-1-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;

flex-basis:100px;
}
</style>

<div class = "flex-container-2-1-1">
    <div class = "flex-item-2-1-1">1</div>
    <div class = "flex-item-2-1-1">2</div>
    <div class = "flex-item-2-1-1">flex-basis</div>
</div>
```
`flex-basis` 을 추가했다  

<style>
.flex-container-2-1-1{
background-color:gray;
display:flex;
flex-flow:row wrap;
}
.flex-item-2-1-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;z

flex-basis:100px;
}
</style>

<div class = "flex-container-2-1-1">
    <div class = "flex-item-2-1-1">1</div>
    <div class = "flex-item-2-1-1">22222222222222222</div>
    <div class = "flex-item-2-1-1">flex-basis</div>
</div>

`width, height` 와 `flex-basis`의 차이점은   
* `flex-basis` 는 아이템(item)의 컨텐츠가 `flex-basis` 의 값보다 클 때 `flex-basis` 의 값을 넘어간다
* `width, height` 는 아이템(item)의 컨텐츠가 `width, height` 의 값보다 클 때 `widht, height` 의 값을 유지한다

<style>
.flex-container-2-1-2{
background-color:gray;
display:flex;
flex-flow:row wrap;

}
.flex-item-2-1-2{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;

width:100px;
}
</style>

<div class = "flex-container-2-1-2">
    <div class = "flex-item-2-1-2">1</div>
    <div class = "flex-item-2-1-2">22222222222222222</div>
    <div class = "flex-item-2-1-2">width(height)</div>
</div>

<br>

### flex-grow
**아이템(item)의 증가 너비 비율을 설정한다 (숫자가클수록 커짐)**  
`flex-basis` 의 값보다 커질 수 있을지 결정  
0(기본값)보다 큰 값이 세팅되면 해당 아이템(item)은 유연한(flexible) 박스로 변하고 빈 공간을 채운다

```html
<style>
.flex-container-2-2-1{
background-color:gray;
display:flex;
flex-flow:row wrap;

}
.flex-item-2-2-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
flex-basis:100px;

flex-grow:1;
}
</style>

<div class = "flex-container-2-2-1">
    <div class = "flex-item-2-2-1">1</div>
    <div class = "flex-item-2-2-1">22222222222222222</div>
    <div class = "flex-item-2-2-1">1 : 1 : 1</div>
</div>
```
`flex-grow:1` 을 추가했다 

<style>
.flex-container-2-2-1{
background-color:gray;
display:flex;
flex-flow:row wrap;

}
.flex-item-2-2-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
display:flex;
flex-basis:20px;

flex-grow:1;
}
</style>

<div class = "flex-container-2-2-1">
    <div class = "flex-item-2-2-1">1</div>
    <div class = "flex-item-2-2-1">22222222222222222</div>
    <div class = "flex-item-2-2-1">1 : 1 : 1 (flex-basis O)</div>
</div>

`flex-basis` 의 값을 제외한 여백부분을 `flex-grow` 의 값의 비율로 나누어 가진다

<style>
.flex-container-2-2-2{
background-color:gray;
display:flex;
flex-flow:row wrap;
}
.flex-item-2-2-2{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
display:flex;
/* flex-basis:100px; */

flex-grow:1;
}
</style>

<div class = "flex-container-2-2-2">
    <div class = "flex-item-2-2-2">1</div>
    <div class = "flex-item-2-2-2">22222222222222222</div>
    <div class = "flex-item-2-2-2">1 : 1 : 1 (flex-basis X)</div>
</div>

즉 `flex-basis` 를 삭제하면 아이템(item)의 여백 부분의 크기가 같아진다

<style>
.flex-container-2-2-3{
background-color:gray;
display:flex;
flex-flow:row wrap;
}
.flex-item-2-2-3{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
display:flex;
}
#flex-item-2-2-3-1{
flex-grow:1;
}
#flex-item-2-2-3-2{
flex-grow:3;
}
#flex-item-2-2-3-3{
flex-grow:1;
}
</style>

<div class = "flex-container-2-2-3">
    <div class = "flex-item-2-2-3" id = "flex-item-2-2-3-1">1</div>
    <div class = "flex-item-2-2-3" id = "flex-item-2-2-3-2">22222222222222222</div>
    <div class = "flex-item-2-2-3" id = "flex-item-2-2-3-3">1 : 3 : 1 (flex-basis X)</div>
</div>

즉 `flex-basis` 의 비율을 각각 다르게주면 여백 부분의 비율이 달라진다

<br>

### flex-shrink
**아이템(item)의 감소 너비 비율을 설정한다 (숫자가 클수록 작아짐)**  
`flex-basis` 의 값보다 작아질 수 있을지 결정  
기본값이 1이기 때문에 세팅이 없어도 `flex-basis` 의 값보다 작아질 수 있다

```html
<style>
.flex-container-2-3-1{
background-color:gray;
display:flex;
flex-flow:row wrap;
height:180px;
}
.flex-item-2-3-1{
display:flex;
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
flex-basis:400px;

justify-content:center;
align-items:center;
}
.flex-item-2-3-1:nth-child(1){flex-shrink:0}
.flex-item-2-3-1:nth-child(2){flex-shrink:1}
.flex-item-2-3-1:nth-child(3){flex-shrink:2}
</style>

<div class = "flex-container-2-3-1">
    <div class = "flex-item-2-3-1">1 (0 = 사라지지않음)</div>
    <div class = "flex-item-2-3-1">2 (1 = 3분의 1)</div>
    <div class = "flex-item-2-3-1">3 (2 = 3분의 2)</div>
</div>
```
`flex-shrink:0~2` 을 추가했다   
텍스트기준으로 `.flex-item-2-3-1` 은 컨테이너이기 때문에 `display:flex;` 와 `justify-content` , `align-items` 로 텍스트를 중앙으로 정렬했다

<style>
.flex-container-2-3-1{
background-color:gray;
display:flex;
flex-flow:row wrap;
height:180px;
}
.flex-item-2-3-1{
display:flex;
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
justify-content:center;
align-items:center;
flex-basis:400px;
}
.flex-item-2-3-1:nth-child(1){flex-shrink:0}
.flex-item-2-3-1:nth-child(2){flex-shrink:1}
.flex-item-2-3-1:nth-child(3){flex-shrink:2}
</style>

<div class = "flex-container-2-3-1">
    <div class = "flex-item-2-3-1">1 (0 = 사라지지않음)</div>
    <div class = "flex-item-2-3-1">2 (1 = 3분의 1)</div>
    <div class = "flex-item-2-3-1">3 (2 = 3분의 2)</div>
</div>

<br>

### flex
**`flex-grow`(증가율) , `flex-shrink`(감소율) , `flex-basis`(기본크기) 를 같이 지정할 수 있다**   
`flex-grow` , `flex-shrink` , `flex-basis` 의 순서로 한 칸 씩 떼고 적는다  
`(flex:1; = flex-grow:1; / flex-shrink:1; / flex-basis:0%;)`  
`(flex:1 1 auto; = flex-grow:1; / flex-shrink:1; / flex-basis:auto;)`

```html
<style>
.flex-container-2-4-1{
background-color:gray;
display:flex;
flex-flow:row wrap;
height:180px;
}
.flex-item-2-4-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
display:flex;
justify-content:center;
align-items:center;

flex:1 1 40%;
}
</style>

<div class = "flex-container-2-4-1">
    <div class = "flex-item-2-4-1">1</div>
    <div class = "flex-item-2-4-1">2</div>
    <div class = "flex-item-2-4-1">3</div>
    <div class = "flex-item-2-4-1">flex-grow:1</div>
    <div class = "flex-item-2-4-1">flex-shrink:1</div>
    <div class = "flex-item-2-4-1">flex-basis:40%</div>
    <div class = "flex-item-2-4-1">1 : 1 : 40%</div>
</div>
```
`flex:1 1 40%` 을 추가했다

<style>
.flex-container-2-4-1{
background-color:gray;
display:flex;
flex-flow:row wrap;
height:180px;
}
.flex-item-2-4-1{
background-color:yellowgreen;
color:white;
border:1px solid yellowgreen;
margin:5px;
display:flex;
justify-content:center;
align-items:center;

flex:1 1 40%;
}
</style>

<div class = "flex-container-2-4-1">
    <div class = "flex-item-2-4-1">1</div>
    <div class = "flex-item-2-4-1">2</div>
    <div class = "flex-item-2-4-1">3</div>
    <div class = "flex-item-2-4-1">flex-grow:1</div>
    <div class = "flex-item-2-4-1">flex-shrink:1</div>
    <div class = "flex-item-2-4-1">flex-basis:40%</div>
    <div class = "flex-item-2-4-1">1 : 1 : 40%</div>
</div>

<br>

### align-self
**수직축으로 아이템(item)을 정렬 할 수 있다**  
`align-items`의 아이템(item) 버전, `align-items` 는 전체 아이템(item)의 수직축 방향 정렬, `align-self` 는 해당 아이템(item)의 수직축 정렬

<img alt = "align-self" src = "https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg">

<br>

```html
<style>
.flex-container-2-5-1{
    background-color:gray;
    display:flex;
    flex-flow:row column;
    height:180px;
}
.flex-item-2-5-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex: 1 1 15%;
}
.flex-item-2-5-1:nth-child(1){align-self:auto;}
.flex-item-2-5-1:nth-child(2){align-self:stretch;}
.flex-item-2-5-1:nth-child(3){align-self:flex-start;}
.flex-item-2-5-1:nth-child(4){align-self:flex-end;}
.flex-item-2-5-1:nth-child(5){align-self:center;}
.flex-item-2-5-1:nth-child(6){align-self:baseline;}
</style>

<div class = "flex-container-2-5-1">
<div class = "flex-item-2-5-1">auto</div>
<div class = "flex-item-2-5-1">stretch</div>
<div class = "flex-item-2-5-1">flex-start</div>
<div class = "flex-item-2-5-1">flex-end</div>
<div class = "flex-item-2-5-1">center</div>
<div class = "flex-item-2-5-1">baseline</div>
</div>
```
아이템(item)마다 `align-self` 을 추가했다

<style>
.flex-container-2-5-1{
    background-color:gray;
    display:flex;
    flex-flow:row column;
    height:180px;
}
.flex-item-2-5-1{
    background-color:yellowgreen;
    color:white;
    border:1px solid yellowgreen;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex: 1 1 15%;
}
.flex-item-2-5-1:nth-child(1){align-self:auto;}
.flex-item-2-5-1:nth-child(2){align-self:stretch;}
.flex-item-2-5-1:nth-child(3){align-self:flex-start;}
.flex-item-2-5-1:nth-child(4){align-self:flex-end;}
.flex-item-2-5-1:nth-child(5){align-self:center;}
.flex-item-2-5-1:nth-child(6){align-self:baseline;}
</style>

<div class = "flex-container-2-5-1">
<div class = "flex-item-2-5-1">auto</div>
<div class = "flex-item-2-5-1">stretch</div>
<div class = "flex-item-2-5-1">flex-start</div>
<div class = "flex-item-2-5-1">flex-end</div>
<div class = "flex-item-2-5-1">center</div>
<div class = "flex-item-2-5-1">baseline</div>
</div>

<br>

### order
**아이템(item)의 시각적 배치순서를 결정할 수 있다**  
작은 숫자일 수록 먼저 배치되고 시각적 순서일 뿐 html 자체의 구조를 바꾸진 않는다

```html
<style>
.flex-container-2-6-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    height:100px;
}
.flex-item-2-6-1{
    background-color:yellowgreen;
    border:1px solid yellowgreen;
    margin:5px;
    color:white;
    flex-basis:100px;
    display:flex;
    justify-content:center;
    align-items:center
}
.flex-item-2-6-1:nth-child(1){order:3;}
/* 변경후의 위치를 기준으로 order을 사용해서 child(2)를 바꿈 */
.flex-item-2-6-1:nth-child(2){order:1;}
</style>

<div class = "flex-container-2-6-1">
<div class = "flex-item-2-6-1">1</div>
<div class = "flex-item-2-6-1">2</div>
<div class = "flex-item-2-6-1">3</div>
</div>
```
`order:` 을 추가했다

<style>
.flex-container-2-6-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    height:100px;
}
.flex-item-2-6-1{
    background-color:yellowgreen;
    border:1px solid yellowgreen;
    margin:5px;
    color:white;
    flex-basis:100px;
    display:flex;
    justify-content:center;
    align-items:center
}
.flex-item-2-6-1:nth-child(1){order:3;}
/* 변경후의 위치를 기준으로 order을 사용 */
.flex-item-2-6-1:nth-child(2){order:1;}
</style>

<div class = "flex-container-2-6-1">
<div class = "flex-item-2-6-1">1</div>
<div class = "flex-item-2-6-1">2</div>
<div class = "flex-item-2-6-1">3</div>
</div>

순서가 반대로된 것을 확인할 수 있다

<br>

### +z-index
**Z축 정렬을 할 수 있다(숫자가 클 수록 위로 올라감)**

```html
<style>
.flex-container-2-7-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    height:100px;
}
.flex-item-2-7-1{
    background-color:yellowgreen;
    margin:5px;
    color:white;
    border:1px solid yellowgreen;
}
</style>

<div class = "flex-container-2-7-1">
<div class = "flex-item-2-7-1">1</div>
<div class = "flex-item-2-7-1">2</div>
<div class = "flex-item-2-7-1">3</div>
</div>
```

<style>
.flex-container-2-7-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
    height:100px;
}
.flex-item-2-7-1{
    background-color:yellowgreen;
    margin:5px;
    color:white;
    border:1px solid yellowgreen;
    flex-basis:100px;
    display:flex;
    justify-content:center;
    align-items:center;
}
.flex-item-2-7-1:nth-child(2){
z-index:1;
transform:scale(2);
}
</style>

<div class = "flex-container-2-7-1">
<div class = "flex-item-2-7-1">1</div>
<div class = "flex-item-2-7-1">2</div>
<div class = "flex-item-2-7-1">3</div>
</div>

<br>
<br>

<a href = "https://flexboxfroggy.com/#ko" target = "_blank" title = "참고자료">CSS Flex 게임</a>

<br>

## Multi Column
컬럼(column)을 나눔으로서 가독성을 높일 수 있다
이러한 컬럼(column)을 css로 적당한 크기로 나눌 수 있다

```html
<style>
.multi-column-1{
    column-count:2;
}
</style>

<div class = "multi-column-1">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>
```
`column-count:2;` 을 추가했다  

<style>
.multi-column-1{
    column-count:2;
}
</style>

<div class = "multi-column-1">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>

<br>

```html
<style>
.multi-column-2{
    text-align:justify;
    column-width:200px;
}
</style>

<div class = "multi-column-2">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>
```
`column-width` 와 `text-align:justify;` 을 추가했다  
컬럼(column)의 폭을 200px로 맞춰서 나누어 진다  
`text-align:justify;` 는 컬럼(column)을 나누고 단어의 빈자리를 곧게 만들어준다

<style>
.multi-column-2{
    text-align:justify;
    column-width:200px;
}
</style>

<div class = "multi-column-2">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>

<br>

컬럼(column)의 폭이 200px이면 컬럼이 되기 때문에 페이지의 크기에 따라 컬럼(column)이 달라지는 것을 확인할 수 있다

```html
<style>
.multi-column-3{
    text-align:justify;
    column-count:4;
    column-width:200px;
    column-gap:30px;
}
</style>

<div class = "multi-column-3">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>
```
`column-align:4;` 와 `column-width:200px` 와 `column-gap:30px;` 을 추가했다  
이 `column-width` 와 `column-count` 를 같이 사용함으로써 최대 컬럼(column)의 개수를 지정할 수 있다  
`column-gap` 을 지정해 컬럼(column) 사이의 간격을 정할 수 있다

<style>
.multi-column-3{
    text-align:justify;
    column-count:4;
    column-width:200px;
    column-gap:30px;
}
</style>

<div class = "multi-column-3">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>

컬럼(column)의 수가 최대 `column-count` 의 값만큼 나오는 것을 확인할 수 있다

<br>

```html
<style>
.multi-column-4{
    text-align:justify;
    column-count:4;
    column-width:200px;

    column-rule-style:dashed;
    column-rule-width:5px;
    column-rule-color:yellowgreen;
}
.column-title{
    column-span:all;
}
</style>

<div class = "multi-column-4">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language <h2 class = "column-title">HTML</h2> is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets <h2 class = "column-title">CSS</h2> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>
```
`column-rule-style:dashed;` 와 `column-rule-width:5px;` 와 `column-rule-color:yellowgreen;` 와 `column-span:all;` 을 추가했다  
`column-rule-style` , `column-rule-width` , `column-rule-color` 등을 활용하여 컬럼(column)을 디자인 할 수 있다  
`column-span` 을 활용하여 컬럼(column)안에 들어가는 제목을 컬럼(column)의 영향에서 벗어나게할 수 있다

<style>
.multi-column-4{
    text-align:justify;
    column-count:4;
    column-width:200px;

    column-rule-style:dashed;
    column-rule-width:5px;
    column-rule-color:yellowgreen;
}
.column-title{
    column-span:all;
}
</style>

<div class = "multi-column-4">
My name is codingbotPark. nice to meet you. Hyper Text Markup Language <h2 class = "column-title">HTML</h2> is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets <h2 class = "column-title">CSS</h2> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</div>

<br>

## Media query
미디어의 상태에 따라 다른 디자인을 적용한다

```html
<style>
.media-query{
    height:100px;
}
@media(width:500px){
    .media-query{
        background-color:yellowgreen;
    }
}
@media(max-width:499px){
    .media-query{
        background-color:yellow;
    }
}
@media(min-width:501px){
    .media-query{
        background-color:gray;
    }
}
</style>

<div class = "media-query"></div>
```
`@media` 을 추가했다  
`width:500px` 화면의크기가 정확히 500px이 되었을 때  
`max-width:499px;` 화면의 크기가 499px 이하일 때  
`min-width:501px` 화면의 크기가 501px 이상일 때   
케스케이딩(cascading)도 생각을 해야한다

<style>
.media-query{
    height:100px;
}
@media(width:500px){
    .media-query{
        background-color:yellowgreen;
    }
}
@media(max-width:499px){
    .media-query{
        background-color:yellow;
    }
}
@media(min-width:501px){
    .media-query{
        background-color:green;
    }
}
</style>

<div class = "media-query"></div>

페이지의 크기에 따라 배경색이 변하는 것을 확인할 수 있다

\+ 모바일에서는 크기가 다르기 때문에 `<meta name = "viewport" content = "width=device-width, initial-scale=1.0">` 을 추가하면 요소들의 크기를 모바일에 맞게 맞추어진다

### + Media query예제
Holy Grail layout형식에서 모바일일 때의 변경

<img alt = "Holy Grail layout" src = "https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/2367/4744.png" height:350px>

<br>

```html
<style>
.media-query-container{
    display:flex;
    flex-direction:column
}
.media-query-header{
    border-bottom:1px solid yellowgreen;
    padding-left:20px;
}
.media-query-footer{
    border-top:1px solid yellowgreen;
    padding:20px;
    text-align:center;
}
.media-query-content{
    display:flex;
    /* display:flex;의 기본값은 row(가로)로 정렬하기 때문에 nav, 내용, ad의 순서가 가로로 올 수 있다 */
}
.media-query-content .media-query-nav{
    border-right:1px solid yellowgreen;
}
.media-query-content .media-query-aside{
    border-left:1px solid yellowgreen;
}
.media-query-nav, .media-query-aside{
    flex-basis:150px;
    flex-shrink:0;
}
.media-query-main{
    padding:10px;
}
</style>

<div class = "media-query-container">
    <header class = "media-query-header">
        <h3>codingbotPark</h3>
    </header>
    <section class = "media-query-content">
        <nav class = "media-query-nav">
            <ul>
            <li>html</li>
            <li>css</li>
            <li>JS</li>
            </ul>
        </nav>
        <main class = "media-query-main">
            My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
        </main>
        <aside class = "media-query-aside">
            AD
        </aside>
    </section>
    <footer class = "media-query-footer">
        <a href="https://github.com/codingbotPark" target = "_blank">깃허브</a>
    </footer>
</div>
```

<style>
.media-query-container{
    display:flex;
    flex-direction:column
}
.media-query-header{
    border-bottom:1px solid yellowgreen;
    padding-left:20px;
}
.media-query-footer{
    border-top:1px solid yellowgreen;
    padding:20px;
    text-align:center;
}
.media-query-content{
    display:flex;
}
.media-query-content .media-query-nav{
    border-right:1px solid yellowgreen;
}
.media-query-content .media-query-aside{
    border-left:1px solid yellowgreen;
}
.media-query-nav, .media-query-aside{
    flex-basis:150px;
    flex-shrink:0;
}
.media-query-main{
    padding:10px;
}
</style>

<div class = "media-query-container">
    <header class = "media-query-header">
        <h3>codingbotPark</h3>
    </header>
    <section class = "media-query-content">
        <nav class = "media-query-nav">
            <ul>
            <li>html</li>
            <li>css</li>
            <li>JS</li>
            </ul>
        </nav>
        <main class = "media-query-main">
            My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
        </main>
        <aside class = "media-query-aside">
            AD
        </aside>
    </section>
    <footer class = "media-query-footer">
        <a href="https://github.com/codingbotPark" target = "_blank">깃허브</a>
    </footer>
</div>

<br>

이러한 Holy Grail layout 을 모바일일 때의 형태로 바꾸면

<br>

```html
<style>
.media-query-container-1{
    display:flex;
    flex-direction:column
}
.media-query-header-1{
    border-bottom:1px solid yellowgreen;
    padding-left:20px;
}
.media-query-footer-1{
    border-top:1px solid yellowgreen;
    padding:20px;
    text-align:center;
}
.media-query-content-1{
    display:flex;
}
.media-query-content-1 .media-query-nav-1{
    border-right:1px solid yellowgreen;
}
.media-query-content-1 .media-query-aside-1{
    border-left:1px solid yellowgreen;
}
.media-query-nav-1, .media-query-aside-1{
    flex-basis:150px;
    flex-shrink:0;
}
.media-query-main-1{
    padding:10px;
}

@media(max-width:500px){
    .media-query-content-1{
        flex-direction:column;
    }
    /* 테두리삭제 */
    .media-query-content-1 .media-query-nav-1 ,
    .media-query-content-1 .media-query-aside-1{
        border:none;
    }
}

</style>

<div class = "media-query-container-1">
    <header class = "media-query-header-1">
        <h3>codingbotPark</h3>
    </header>
    <section class = "media-query-content-1">
        <nav class = "media-query-nav-1">
            <ul>
            <li>html</li>
            <li>css</li>
            <li>JS</li>
            </ul>
        </nav>
        <main class = "media-query-main-1">
            My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
        </main>
        <aside class = "media-query-aside-1">
            AD
        </aside>
    </section>
    <footer class = "media-query-footer-1">
        <a href="https://github.com/codingbotPark" target = "_blank">깃허브</a>
    </footer>
</div>
```
`@media(max-width:500px)` 을 추가했다  
페이지의 크기가 500px이하일 때 `flex-direction:column;` 이 지정, `border:none;`(테두리삭제)

<style>
.media-query-container-1{
    display:flex;
    flex-direction:column
}
.media-query-header-1{
    border-bottom:1px solid yellowgreen;
    padding-left:20px;
}
.media-query-footer-1{
    border-top:1px solid yellowgreen;
    padding:20px;
    text-align:center;
}
.media-query-content-1{
    display:flex;
}
.media-query-content-1 .media-query-nav-1{
    border-right:1px solid yellowgreen;
}
.media-query-content-1 .media-query-aside-1{
    border-left:1px solid yellowgreen;
}
.media-query-nav-1, .media-query-aside-1{
    flex-basis:150px;
    flex-shrink:0;
}
.media-query-main-1{
    padding:10px;
}

@media(max-width:500px){
    .media-query-content-1{
        flex-direction:column;
    }
    /* 테두리삭제 */
    .media-query-content-1 .media-query-nav-1 ,
    .media-query-content-1 .media-query-aside-1{
        border:none;
    }
}

</style>

<div class = "media-query-container-1">
    <header class = "media-query-header-1">
        <h3>codingbotPark</h3>
    </header>
    <section class = "media-query-content-1">
        <nav class = "media-query-nav-1">
            <ul>
            <li>html</li>
            <li>css</li>
            <li>JS</li>
            </ul>
        </nav>
        <main class = "media-query-main-1">
            My name is codingbotPark. nice to meet you. Hyper Text Markup Language (HTML) is a markup language for creating a webpage. In easier words, HTML is a kind of programming language that can make a new webpage. Webpages are usually viewed in a web browser. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
        </main>
        <aside class = "media-query-aside-1">
            AD
        </aside>
    </section>
    <footer class = "media-query-footer-1">
        <a href="https://github.com/codingbotPark" target = "_blank">깃허브</a>
    </footer>
</div>

media query 의 다른 많은 <a href = "https://www.w3schools.com/cssref/css3_pr_mediaquery.asp" target = "_blank" title = "참고자료">기능</a>들이 있다

<br>

## float
float는 삽화삽입, 레이아웃제작(옛) 등에 사용된다

```html
<style>
.float-img{
    width:200px;
    float:left;
    margin:20px;
}
</style>

<img alt = "codingbotPark" src = "https://avatars.githubusercontent.com/u/85085375?v=4" class = "float-img">
<p>
Your most Unhappy Customers are your greatest source of learning-Bill Gates / Sometimes when you innovate, you make Mistakes. It is best to admit them Quickly and get on with Improving your other Innovations-Steve Jobs / Our greatest weakness lies in Giving up. The most certain way to succeed is always to try just one more time-Thomas A. Edison
</p>
<p style="clear:both">
Action is the foundational key to all success-Pablo Picasso / Don't confuse fame with success-Erma Bombeck / All things are difficult before they are easy-Thomas Fuller
</p>
```
`float:left` , `clear:both` 을 추가했다  
`clear:both` 는 왼쪽, 오른쪽에 오는 `float` 효과를 무효시킨다  
(즉 `both`는 전에 온 `float` 효과를 무효시킨다)

<style>
.float-img{
    width:200px;
    float:left;
    margin:20px;
}
</style>

<img alt = "codingbotPark" src = "https://avatars.githubusercontent.com/u/85085375?v=4" class = "float-img">
<p>
Your most Unhappy Customers are your greatest source of learning-Bill Gates / Sometimes when you innovate, you make Mistakes. It is best to admit them Quickly and get on with Improving your other Innovations-Steve Jobs / Our greatest weakness lies in Giving up. The most certain way to succeed is always to try just one more time-Thomas A. Edison
</p>
<p style="clear:both">
Action is the foundational key to all success-Pablo Picasso / Don't confuse fame with success-Erma Bombeck / All things are difficult before they are easy-Thomas Fuller
</p>

삽화가 왼쪽으로 들어가고 본문이 바로 오는 것을 확인할 수 있다  
`float` 효과를 무효하는 본문은 삽화 밑에 오는 것을 확인할 수 있다  


### + Float 예제
Holy Grail layout형식을 float을 활용해 짜기

<img alt = "Holy Grail layout" src = "https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/2367/4744.png" height:350px>

<br>

<style>
.float-header{
    border-bottom:1px solid yellowgreen;
}
.float-nav{
    float:left;
    width:120px;
    border-right:1px solid yellowgreen;
}
.float-article{
    float:left;
    width:300px;
    border-left:1px solid yellowgreen;
    border-right:1px solid yellowgreen;
    margin-left:-1px;
    margin-right:-1px;
}
.float-aside{
    float:left;
    width:120px;
    border-left:1px solid yellowgreen;
}
.float-footer{
    clear:both;
    border-top:1px solid yellowgreen;
    text-align:center;
    padding:20px;
}
.float-container{
    width:600px;
    border:1px solid yellowgreen;
    margin:auto;
}
/* *{
    box-sizing:border-box;
} */
</style>

<div class = "float-container">

<header class = "float-header">
<h3>CSS</h3>
</header>

<nav class = "float-nav">
<ul>
<li>position</li>
<li>float</li>
<li>flex</li>
</ul>
</nav>

<article class = "float-article">
<h4>summary</h4>
Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
</article>

<aside class = "float-aside">
ad
</aside>

<footer class = "float-footer">
<a href = "https://github.com/codingbotPark/Web-programing/blob/main/css%EA%B0%9C%EB%85%90.md" target = "_blank">CSS깃허브</a>
</footer>

</div>

<br>

밑에있던 내용이 `float` 을 사용함으로써 위로올라와 옆으로 흐르는 점을 활용해서 `float` 을 레이아웃을 제작할 때 사용한다

`float` 을 사용함으로써 `nav - article` , `aside - article` 의 테두리가 끝까지 적용되지 않기 때문에 두 개의 태그에 둘다 준다
(예) article > nav 일 때와 article < nav 일 때의 상황 둘 다 대비)
=> 선이 겹치면서 테두리가 두꺼워진다
=> `margin-left:-1px;` , `margin-right:-1px;` 을 추가해서 테두리의 두께만큼 article을 이동시킨다

=> 웹페이지의 크기를 움직이다보면 float의 특성(위치할 공간이 없으면 밑으로 내려간다) 레이아웃이 이상해진다
=> 전체를 div태그로 감싸고 전체넓이에 맞는 넓이를 준다
=> 기본적으로 css box-model에서 폭을계산할 때 테두리를 포함한다
=> 이러한 테두리를 신경을 쓰면 복잡할 수 있다
=> `*{box-sizing:border-box;}` 는 이러한 폭을 계산할 때 박스를 포함해서 계산하도록 한다
(모든 엘리먼트에대해 박스크기를 지정할 때 테두리를 기준으로 한다)

컨테이너에 `margin:auto;`를 줌으로써 웹페이지의 중간에 오도록 했다

## background
특정 엘리먼트(element)의 배경이미지, 컬러를 지정할 수 있다

```html
<style>
.background-color{
    background-color:yellowgreen;
    color:white;
}
</style>

<div class = "background-color">
    yellowgreen
</div>
```

<style>
.background-color{
    background-color:yellowgreen;
    color:white;
}
</style>

<div class = "background-color">
    yellowgreen
</div>

<br>

```html
<style>
.background-img{
    background-image: url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');
    color:white;
    font-size:80px;
}
</style>

<div class = "background-img">
    가나가와 해변의 높은 파도 아래
</div>
```

<style>
.background-img{
    background-image: url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');
    color:white;
    font-size:80px;
}
</style>

<div class = "background-img">
    가나가와 해변의 높은 파도 아래
</div>

화면에 사진이 반복되는 것을 설정하려면  
`background-repeat:no-repeat;` 을 지정하면 반복이 안됨  
`background-repeat:repeat-x;` 을 지정하면 x 축으로 반복이 된다


스크롤을 내렸을 때 의 배경이 스크롤 되는 것을 설정하려면  
`background-attachment:scroll;` (기본값) 을 지정하면 배경사진, 배경 색이 같이 스크롤된다  
`background-attachmetn:fixed` 을 지정하면 배경색은 스크롤이 되지만 배경사진은 스크롤이 되지 않는다


배경의 크기를 설정하려면  
`background-size:가로 세로;` 을 지정하면 사진의 크기가 변한다  
사진이 반복되지 않을 때  
`background-size:cover` 을 지정하면 페이지를 사진이 채우게 된다  
`background-size:container` 을 지정하면 페이지 안에 사진전체가 들어가게된다  


배경사진의 위치를 설정하려면(반복이 안될 때)  
`background-position:left top;` , `background-position:right top;` , `background-position:right bottom;` , `background-position:center bottom;` 등으로 위치를 바꿀 수 있다


`background:색 url('이미지주소') no-repeat fixed center` 등으로 배경을 설정할 수 있다

이런 `background` 를 shorthand(축약형) 이라고 한다

<br>

## Filter
어떠한 그래픽 대상에게 효과를 줄 수 있다  
(예) 흑백사진으로 만들기 등)

<a href = "https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jsy930609&logNo=221671999277" target = "_blank" title = "참고자료">CSS filter</a>


<style>
.filter-img-1{
    filter:grayscale(100%);
}
.filter-text-1{
    filter:blur(3px);
}
</style>

<h3 class = "filter-text-1">The Great Wave</h3>
<img alt = "The Great Wave" src = "https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2" class = "filter-img-1" height="300px">

이미지가 흑백이 되고 텍스트가 흐릿해지는 것을 확인할 수 있다

<a href = "https://codepen.io/davidkpiano/pen/wMqXea" tareget = "_blank" title = "참고자료">filter를 사용한 예시</a>

<br>

## blend
필터는 하나의 그래픽 대상에게 효과를 줬는데 블랜드는 여러개 의 그래픽 대상을 조합시켜서 다른 효과를 줄 수 있다  

### background-blend-mode
배경의 효과들끼리 혼합할 수 있다

<a href = "https://webzz.tistory.com/377" target = "_blank" title = "참고자료">background-blend-mode</a>

```html
<style>
.blend-1{
    height:400px;
    border:5px solid yellowgreen;
    background-color:green;
    background-image:url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');

    background-blend-mode:color;
}
</style>

<div class = "blend-1"></div>
```
`background-blend-mode:color;`
이 배경 사진과 색을 혼합할 수 있다

<style>
.blend-1{
    height:400px;
    border:5px solid yellowgreen;
    background-color:gray;
    background-size:cover;
    background-image:url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');

    background-blend-mode:color;
}
</style>

<div class = "blend-1"></div>

<br>

```html
<style>
.blend-2{
    height:400px;
    border:5px solid yellowgreen;
    background-color:rgba(255,0,0,0.5);
    background-size:cover;
    background-image:url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');

    background-blend-mode:color;

    transition:background-color 5s;
}
.blend-2:hover{
    background-color:rgba(255,0,0,1);
    transition:background-color 5s;
}
</style>

<div class = "blend-2"></div>
```
색을 rgba(red, green, blue, alpha)에 alpha(투명도)를 변경, `transition:background-color 5s;` 을 추가했다  
`background-blend-mode` 일 때 배경의 투명도가 올라감에 따라 이미지가 변한다  
`transition` 을 줘서 이런 변화가 느리게 표현된다  

<style>
.blend-2{
    height:400px;
    border:5px solid yellowgreen;
    background-color:rgba(255,0,0,0.5);
    background-size:cover;
    background-image:url('https://mblogthumb-phinf.pstatic.net/MjAxODA1MTNfNTIg/MDAxNTI2MTY2NjUwMDIy.kXXYNwqNcZTdtrmo7tTiGPJV-uPsUd2Dswi7bKMjGY8g.Sx5UDiIgfRhSRYdgTBmrQIa7NxfynNTkBc_ObYoJTWYg.JPEG.brucelee55/The_Great_Wave_off_Kanagawa.jpg?type=w2');

    background-blend-mode:color;

    transition:background-color 5s;
}
.blend-2:hover{
    background-color:rgba(255,0,0,1);
    transition:background-color 5s;
}
</style>

<div class = "blend-2"></div>

<br>

### mix-blend-mode
컨텐트와 배경의 효과들을 혼합할 수 있다

<a href = "https://developer.mozilla.org/ko/docs/Web/CSS/mix-blend-mode" target = "_balnk" title = "참고자료">mix-blend-mode</a>

```html
<style>
.blend-3{
    height:400px;
    background-image:url('https://mblogthumb-phinf.pstatic.net/20150819_100/iamundine_1439970779216WcILD_JPEG/%BA%B0%C0%CC_%BA%FB%B3%AA%B4%C2_%B9%E3.jpg?type=w2');
    background-size:cover;
}
.blend-4{
    font-weight:bold;

    mix-blend-mode:difference;
}
</style>

<div class = "blend-3">
<div class = "blend-4">
Vincent Willem van Gogh 30 March 1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. He was not commercially successful, and his suicide at thirty-seven came after years of depression and poverty.
</div>
</div>
```
`mix-blend-mode:difference;` 을 추가했다

<style>
.blend-3{
    height:400px;
    background-image:url('https://mblogthumb-phinf.pstatic.net/20150819_100/iamundine_1439970779216WcILD_JPEG/%BA%B0%C0%CC_%BA%FB%B3%AA%B4%C2_%B9%E3.jpg?type=w2');
    background-size:cover;
}
.blend-4{
    font-weight:bold;

    mix-blend-mode:difference;
}
</style>

<div class = "blend-3">
<div class = "blend-4">
Vincent Willem van Gogh 30 March 1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. He was not commercially successful, and his suicide at thirty-seven came after years of depression and poverty.
</div>
</div>

<br>

## Transform
어떤 엘리먼트(element)의 크기, 회전, 비틀기 등을 설정할 수 있다  
엘리먼트(element)가 블록레벨(block-level) , 인라인블록(inline-block) 일 때 동작한다

요소(element)|효과
:---|:---
scale|크기를 변경 
skew|기울어짐을 변형
rotate|회전을 줌
translate|위치를 이동
perspective|3D효과를 위한 원근감을 부여함(부모요소에 적용)
matrix|원근감(perspective)을 제외한 모든 요소들을 한 번에 지정

<img alt = "css transform" src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F99448A455BE27CAF0B613F" height="350">

<br>

<a href = "https://poiemaweb.com/css3-transform" target = "_blank" title = "참고자료">transform1</a>  
<a href = "https://rgy0409.tistory.com/2990" target = "_blank" title = "참고자료">transform2</a>  
<a href = "https://codepen.io/vineethtrv/full/XKKEgM" target = "_blank" title = "참고자료">transform 효과</a>

```html
<style>
.transform-background{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
}
.transform-background > div{
    background-color:yellowgreen;
    color:gray;
    height:150px;
    width:150px;
    margin:5px;
    text-align:center;
    line-height:150px;
    transition:transform 0.5s;
}
.transform-rotate:hover{transform:rotate(45deg);}
.transform-rotateX:hover{transform:rotateX(45deg);}
.transform-rotateY:hover{transform:rotateY(45deg);}
.transform-rotateZ:hover{transform:rotateZ(45deg);}
.transform-scale:hover{transform:scale(2);}
.transform-scaleX:hover{transform:scaleX(2);}
.transform-scaleY:hover{transform:scaleY(2);}
.transform-skew:hover{transform:skew(45deg,45deg);}
.transform-skewX:hover{transform:skewX(45deg);}
.transform-skewY:hover{transform:skewY(45deg);}
.transform-translate:hover{transform:translate(45px);}
.transform-translateX:hover{transform:translateX(45px);}
.transform-translateY:hover{transform:translateY(45px);}
.transform-matrix:hover{transform:matrix(2,2,0,2,45,0);}
</style>

<div class = "transform-background">
<div class = "transform-rotate">rotate (45deg)</div>
<div class = "transform-rotateX">rotateX (45deg)</div>
<div class = "transform-rotateY">rotateY (45deg)</div>
<div class = "transform-rotateZ">rotateZ (45deg)</div>
<div class = "transform-scale">scale (2)</div>
<div class = "transform-scaleX">scaleX (2)</div>
<div class = "transform-scaleY">scaleY (2)</div>
<div class = "transform-skew">skew (45deg,45deg)</div>
<div class = "transform-skewX">skewX (45deg)</div>
<div class = "transform-skewY">skewY (45deg)</div>
<div class = "transform-translate">translate (45px)</div>
<div class = "transform-translateX">translateX (45px)</div>
<div class = "transform-translateY">translateY (45px)</div>
<div class = "transform-matrix">matrix (2,2,0,2,45,0)</div>
</div>
```

`matrix` 는 원근감(perspective)을 제외한 나머지 `(scaleX, skewX, skewY, scaleY, translateX, translateY)` 를 한번에 지정할 수 있다  
각도에는 <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS/angle#units" target = "_blank" title = "참고자료">4가지</a>가 있다

<style>
.transform-background{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
}
.transform-background > div{
    background-color:yellowgreen;
    color:gray;
    height:150px;
    width:150px;
    margin:5px;
    text-align:center;
    line-height:150px;
    transition:transform 0.5s;
}
.transform-rotate:hover{transform:rotate(45deg);}
.transform-rotateX:hover{transform:rotateX(45deg);}
.transform-rotateY:hover{transform:rotateY(45deg);}
.transform-rotateZ:hover{transform:rotateZ(45deg);}
.transform-scale:hover{transform:scale(2);}
.transform-scaleX:hover{transform:scaleX(2);}
.transform-scaleY:hover{transform:scaleY(2);}
.transform-skew:hover{transform:skew(45deg,45deg);}
.transform-skewX:hover{transform:skewX(45deg);}
.transform-skewY:hover{transform:skewY(45deg);}
.transform-translate:hover{transform:translate(45px,45px);}
.transform-translateX:hover{transform:translateX(45px);}
.transform-translateY:hover{transform:translateY(45px);}
.transform-matrix:hover{transform:matrix(2,2,0,2,45,0);}
</style>

<div class = "transform-background">
<div class = "transform-rotate">rotate (45deg)</div>
<div class = "transform-rotateX">rotateX (45deg)</div>
<div class = "transform-rotateY">rotateY (45deg)</div>
<div class = "transform-rotateZ">rotateZ (45deg)</div>
<div class = "transform-scale">scale (2)</div>
<div class = "transform-scaleX">scaleX (2)</div>
<div class = "transform-scaleY">scaleY (2)</div>
<div class = "transform-skew">skew (45deg,45deg)</div>
<div class = "transform-skewX">skewX (45deg)</div>
<div class = "transform-skewY">skewY (45deg)</div>
<div class = "transform-translate">translate (45px,45px)</div>
<div class = "transform-translateX">translateX (45px)</div>
<div class = "transform-translateY">translateY (45px)</div>
<div class = "transform-matrix">matrix (2,2,0,2,45,0)</div>
</div>

<br>

### transform-origin
효과가 적용되는 기준을 정할 수 있다

<img alt = "transform-origin" src = "https://www.html5alive.com/html5alive/wp-content/uploads/2018/04/Artboard-1@2x.png" height="350">

요소(element) | 값(value)
---|---
left|0%
center|50%
right|100%
top|0%
bottom|100%

<a href = "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin" target = "_blank" title = "참고자료">transform-origin</a>

```html
<style>
.transform-background-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
}
.transform-background-1 > div{
    background-color:yellowgreen;
    color:gray;
    height:150px;
    width:150px;
    margin:5px;
    text-align:center;
    line-height:150px;
    transition:transform 0.5s;
}
.transform-background-1 > div:hover{
    transform:rotate(45deg) scale(1.2);
} 
.transform-origin-center{transform-origin:center;}
.transform-origin-top-left{transform-origin:top left;}
.transform-origin-50px-50px{transform-origin:50px 50px;}
.transform-origin-bottom-right-60px{transform-origin:bottom right 60px;}
</style>

<div class = "transform-background-1">
<div class = "transform-origin-center">center</div>
<div class = "transform-origin-top-left">top left</div>
<div class = "transform-origin-50px-50px">50px 50px</div>
<div class = "transform-origin-bottom-right-60px">bottom right 60px</div>
</div>
```
div태그에 `rotate(45deg)` 와 `scale(1.2)` 을 지정했다  
`transform` 은 중복사용이 안되기 때문에 하나의 `transform` 에 이어적는다

<style>
.transform-background-1{
    background-color:gray;
    display:flex;
    flex-flow:row wrap;
}
.transform-background-1 > div{
    background-color:yellowgreen;
    color:gray;
    height:150px;
    width:150px;
    margin:5px;
    text-align:center;
    line-height:150px;
    transition:transform 0.5s;
}
.transform-background-1 > div:hover{
    transform:rotate(45deg) scale(1.2);
} 
.transform-origin-center{transform-origin:center;}
.transform-origin-top-left{transform-origin:top left;}
.transform-origin-50px-50px{transform-origin:50px,50px;}
.transform-origin-100-100{transform-origin:100% 100%;}
</style>

<div class = "transform-background-1">
<div class = "transform-origin-center">center</div>
<div class = "transform-origin-top-left">top left</div>
<div class = "transform-origin-50px-50px">50px 50px</div>
<div class = "transform-origin-100-100">100% 100%</div>
</div>

<br>

<a href = "https://www.minimamente.com/project/magic/" target = "_blank" title = "참고자료">transform관련효과1</a>  
<a href ="http://ianlunn.github.io/Hover/" target = "_blank" title = "참고자료">transform관련효과2</a>

<br>

## Transition
css에서 값이 변경, 즉 전환이 될 때를 설정할 수 있다

요소(elemetn) | 역할
---|---
transition | 적용시킬효과, 시간을 함께 지정
transition-property | transition이 적용될 속성을 정함
transition-timing-function | transition의 진행속도를 조절
transition-duration | transition이 끝날 때까지 걸리는 시간을 정함
transition-delay | transition이 시작하는 시간을 늘림


<a href = "http://tcpschool.com/css/css3_transform_transition" target = "_blank" title = "참고자료">transition1</a>  
<a href = "https://www.codingfactory.net/10953" target = "_blank" title = "참고자료">transition2</a>
 
```html
<style>
.transition{
    font-size:3rem;
    display:inline-block;

    transition-property:font-size transform;
    transition:transform 1s,font-size 1s;
}
.transition:active{
    transform:translate(20px,20px);
    font-size:2rem;
}
</style>

<a href = "https://www.youtube.com/channel/UChK2DhvPSG3sY0jIYYngVBA" target = "_blank" class = "transition">츄 유튜브 보기</a>
```
`transition:transform 1s,font-size 1s;` 을 추가했다  
`font-size` , `transform` 효과가 1초동안 변한다

<style>
.transition{
    font-size:3rem;
    display:inline-block;

    transition-property:font-size transform;
    transition:transform 1s,font-size 1s;
}
.transition:active{
    transform:translate(20px,20px);
    font-size:2rem;
}
</style>

<a href = "https://www.youtube.com/channel/UChK2DhvPSG3sY0jIYYngVBA" target = "_blank" class = "transition">츄 유튜브 보기</a>

<br>

```html
<style>
.transition-1{
    font-size:3rem;
    background-color:yellowgreen;
    padding:100px;
    text-align:center;

    transition-property:padding;
    transition-timing-function:ease-in-out;
    transition-delay:0.5s;
    transition-duration:1s;

}
.transition-1:hover{
    padding:150px;
}
</style>

<div class = "transition-1">point to this</div>
```
`transition-` 을 추가했다

<style>
.transition-1{
    font-size:3rem;
    background-color:yellowgreen;
    padding:100px;
    text-align:center;

    transition-property:padding;
    transition-timing-function:ease-in-out;
    transition-delay:0.5s;
    transition-duration:1s;

}
.transition-1:hover{
    padding:150px;
}
</style>

<div class = "transition-1">point to this</div>

진행(padding의 크기가 커짐)속도가 `ease-in-out` 에 따른다  
transition이 시작되는 시간을 `0.5` 초를 늘림  
transition이 `1` 초동안 실행됨

<br>

<a href = "https://cubic-bezier.com/#0,1.25,1,1.23" target = "_blnak" title = "참고자료">transition효과1</a>  
<a href = "https://matthewlein.com/tools/ceaser/" target = "_blank" title = "참고자료">transition효과2</a> 

<br>

## link, import
외부의 소스를 사용할 수 있다(주로 css파일을 연결할 때 사용한다)  
웹페이지를 만들다보면 여러개의 웹페이지가 생기고, 여러개의 웹페이지가 공통적인 css를 가질 때가 있다  

이런 중복을 제거함으로써
* 유지보수가 더 편리해진다
* 사용자, 제공자에게 경제적으로 이익이다
* 가독성이 좋아진다

웹브라우저는 <a href = "https://hahahoho5915.tistory.com/33" target = "_blank" title = "참고자료">케시</a> 라는 개념이 있기 때문에 `link` 를 사용하는 것이 더 경제적이다  
(웹 케시 = 한 번 다운로드 받은 css를 입시정장 폴더에 저장)

<a href = "http://tcpschool.com/html-tags/link" target = "_blank" title = "참고자료">link</a>  
<a href = "https://developer.mozilla.org/ko/docs/Web/CSS/@import" target = "_blank" title = "참고자료">import</a>

`link` 태그는 html태그로 css를 로드할 때 사용한다
```html
<link rel = "stylesheet" type = "text/css" href = "외부소스주소">
```

`import` 지시어는 css안에서 다른 css를 로드할 때 사용한다
```html
<style>
@import url("외부소스주소");
</style>
```

<br>

## miniy
css코드의 크기를 작게 만들 수 있다  
웹페이지에 방문자가 많지 않다면 큰 차이가 없지만 많다면 영향이 있다

<a href = "http://adamburgess.github.io/clean-css-online/" target = "_blank" title = "참고자료">경량화 도구</a> 를 활용하여 얼마나 경량화의 효과가 있는지 확인할 수 있다

<br>

## preprocessor
<a href = "https://ziegler.tistory.com/70" target = "_blank" title = "참고자료">processor 설명<a>


<a href = "https://stylus-lang.com/docs/selectors.html" target = "_blank" title = "참고자료">processor</a>
<br>

## fontello.com
웹사이트에 아이콘과 같은 것들을 삽입할 때 이미지로 삽입할 수도 있지만 아이콘폰트라고 해서 특정한 문자가 특정한 이미지로 표현되게 하는 방식이 있다

<a href = "https://fontello.com/" target = "_blank" title = "참고자료">fontello</a>는 다른 아이

<a href = "https://fontello.com/" target = "_blank" title = "참고자료">fontello</a>에서 아이콘을 정하고 
