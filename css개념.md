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
<div id = "margin-collapsing3-2">텍스트</div>
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

## 포지션
요소(element)들이 화면상의 어디에 위치할 것인가 를 결정
