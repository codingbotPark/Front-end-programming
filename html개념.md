>유튜브 <a href = "https://www.youtube.com/watch?v=OGFgdro160I&list=PLuHgQVnccGMDUzDDCKW-pCZQY-MMCX5yB">생활코딩</a> 유튜브와 여러자료들을 참고

<br>

# HTML
HTML = Hyper Text Markup Language  
Hyper Text = 웹브라우저를 통해서 어떤 웹 페이지를 보면 **링크 (Hyper Text)** 를 보게 된다  
Markup = HTML은 이 Markup이라는 문법적인 형식, 특성에 따른다  
Language = 컴퓨터 프로그래밍 언어

## 역사
* HTML이전의 선행기술에는 MarkUp언어들의 시조라 할 수 있는 **GML** , 태그에 사용되는 꺾쇠와 같은 것들이 사용된 **SGML** 등이 있다
* '팀 버너스 리'라는 사람이 '유럽 입자 물리연구소'에서 비공식적으로 웹을 만드는 작업을 하면서 선행기술인 **SGMLguid** 을 익숙하게 사용하고 있었다
* 1990년도에 **'팀 버너스 리'** 가 **SGMLguid** 에서 **\<a>** 태그를 추가하여 **HTML** 을만들었다

<a href = "https://ko.wikipedia.org/wiki/HTML#%EC%97%AD%EC%82%AC" target = "_blank" title = "참고자료">위키백과<HTML역사></a>


<br>

# 문법
![html 요소](https://lh3.googleusercontent.com/proxy/4zM5B1IheDwd4WZhx5sPotBuXsusMXiv_BT0x95pzt73ysrkWpasWBVNn-oqjC-W91oPc9JoO7hVOjBjJslLOr17suZIVnL1zNUX5fvl)  
  
태그 = Tag = HTML에서 가장 중요한 문법, 프로그래밍 언어를 규정하는 가장 중요한 특징, HTML에서 MarkUp과 밀접한 관계  

<br>

## \<html>
**웹페이지의 시작과 끝**

웹페이지는 <html>으로 시작해서 </html>으로 끝난다

### + <! doctype>
DOCTYPE = Document type declaration  
자신이 작성한 HTML코드가 어떤 방식의 HTML코드로 작성 됐는지를 선언하는, 브라우저에게 알려주는 문자

HTML이 세월의 흐름에 따라 태그가 추가, 삭제, 의미가 바뀌기도 한다. 그래서 웹부라우저는 그 태그가 어떤 표준에 따라서 인식해야하기 때문에 브라우저에게 표준을 알려주기 위해 사용된다

<br>

## \<head>
**웹 페이지 정보, 외부 파일을 링크할 때 사용**  
링크 = 컴퓨터상에서 어떤 대상의 연결이나 그와 연관한 복사본을 가리킨다  
<a href = "https://ko.wikipedia.org/wiki/%EB%A7%81%ED%81%AC" target = "_blank" title = "참고자료">위키백과<링크></a>  

<br>

## \<body>
**브라우저에 실제 표시되는 내용**

<br>

## \<h>
**섹션, 문단의 제목을 나타냄**  
숫자가 작을수록 글자의 크기가 커짐(높은 등급)  

단순히 글자의 크기가 크게 보일 뿐만 아니라, 봇(컴퓨터, 검색엔진)이 문서를 파악하기 위해 사용되기 때문에 상황에 맞게 \<h>을 잘 써주는 것이 중요하다
```html
<h1>제목</h1>
```
=> 제목은 굵고 큰 문자로 나타나고 줄바꿈이 나타난다

<br>

### \<strong>
내용이 <strong>강조</strong> 된다
```html
<strong>강조할내용</strong>  
```
=> 강조할 내용이 <strong>진하게</strong> 나타난다

가능한 이유는 만든 html파일 페이지를 웹프라우저에게 주면 웹브라우저는 html파일 안에 있는 내용을 하나하나 읽게된다. 이 때 \<strong> 즉 '시작태그'를 읽게되면 \</strong> 즉 '닫히는 태그' 까지 강조된다.

<br>

## \<a>
**하이퍼링크를 걸어주는 태그**  
HTML에서 Hyper Text에 해당하는 링크를 만들기 때문에 그만큼 중요함
```html
<a href = "링크">링크를걸고싶은내용</a>  
```
=> 링크로 표시됨  
=> 링크를 걸고 싶을 때는 2가지 정보가 필요함  
1 = '링크를걸고싶은내용' 이 링크라는 사실을 알려주기 위한 a태그  
2 = 링크

<br>

### +target
링크를 눌렀을 때 새로운 탭이 생성되고 페이지가 열리게 된다
```html
<a href = "링크" target = "_blank">링크를걸고싶은내용</a>
```
<a href = "https://www.naver.com/" target = "_blank">네이버</a> 
<a href = "https://www.google.co.kr/" target = "_blank">구글</a>

<br>

### +title
마우스 포인터를 링크에 올려놓으면 내용이 툴팁(tooltip)이라는 형태로 미리 표시된다  
```html
<a href = "링크" target = "_blank" title = " 미리표시">링크를걸고싶은내용</a>
```
<a href = "https://github.com/" target = "_blank" title = "깃허브">깃허브</a>
<a href = "https://papago.naver.com/" target = "_blank" title = 
"파파고">파파고</a>

<br>

## \<li> \<ul> \<ol>
### li(list item)
\<ol>과 \<ul>의 항목들을 나열할 때 사용된다

### ul (unordered list)
**순서가 없는 목록**을 만든다  

### ol (ordered list)
**순서가 있는 목록**을 만든다

\<ul>태그 사용  
```html
<ul>  
  <li>내용1\</li>  
  <li>내용2\</li>  
</ul>  
```
<ul>
  <li>내용1</li> 
  <li>내용2</li>
</ul>

\<ol>태그 사용  
```html
<ol>  
  <li>내용1\</li>  
  <li>내용2\</li>  
</ol>	
```
<ol>
  <li>내용1</li>
  <li>내용2</li>
</ol>

<br>

## \<p>
**브라우저에게 단락을 인식시키게 한다**

```html
<p>인식시켜야 하는 단락1</p> <p>인식시켜야 하는 단락2</p>
```
<p>인식시켜야 하는 단락1</p> <p>인식시켜야 하는 단락2</p>

+이 기본적인 p태그의 디자인을 css를 통해서 디자인 변경을 시킬 수 있다

<br>

## \<br>
**줄바꿈을 할 수 있다**

br태그는 void element 라고 해서 내용이 없는 태그라는 뜻이다  
```html
<p>감싸야하는 </p> <=> <br>
```

+br태그는 단지 시각적인 것 뿐이지만 p태근느 단락이라는 정보를 표현할 수 있기 때문에 단락을 표현하고 싶다면 p태그를 사용하는 것이 더 좋은 방법이다

<br>

## \<img>
**img태그 안에 이미지 소스의 url을 통해 표현하고 싶은 사진을 웹사이트에 표현할 수 있다**

img태그는 html2부터 시작된 태그이다
```html
<img scr = "이미지 소스의 url">
```
### +alt (alternative text)
사진이 손상되었을 경우 '대체 택스트'로 나타날 수 있다
```html
<img scr = "이미지 소스의 url" alt = "이미지의 대체 텍스트">
```
### +width, length
이미지의 넓이와 높이를 지정할 수 있다

이미지의 넓이와 높이를 둘 다 지정하게 된다면 사진이 왜곡될 수 있기 때문에 넓이나 높이 중 하나만 지정함으로서 지정된 넓이와 높이의 비율에 맞는 높이와 넓이가 지정된다
```html
<img scr = "이미지 소스의 url" alt = "이미지의 대체 텍스트" width = "지정할 넓이" length = "지정할 높이">
```
## \<td>, \<tr>, \<table>
### \<td> (table data)
표에 넣을 내용들을 각각 td태그에 넣는다
```html 
<td>이름</td> <td>나이</td> <td>키</td>  
<td>박병관</td> <td>17</td> <td>168</td>
<td>박성한</td> <td>17</td> <td>170</td>
```
### \<tr> (table row)
td태그에 넣은 내용들의 열을 tr태그로 나누어 준다
```html  
<tr>  
<td>이름</td> <td>나이</td> <td>키</td>  
</tr>  
<tr>  
<td>박병관</td> <td>17</td> <td>168</td>
</tr>  
```
### \<table>
table태그로 앞의 내용들을 전부 감싼다  
```html
<table>  
<tr>  
<td>이름</td> <td>나이</td> <td>키</td>  
</tr>  
<tr>  
<td>박병관</td> <td>17</td> <td>168</td>
</tr>  
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</table>  
```
<table>  
<tr>  
<td>이름</td> <td>나이</td> <td>키</td>  
</tr>  
<tr>  
<td>박병관</td> <td>17</td> <td>168</td>
</tr>  
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</table>  

<br>

### +border
표의 테두리를 만드려면 table태그 안에 border을 설정한다  
```html
<table border = "1">
<tr>
<td>이름</td> <td>나이</td> <td>키</td>
</tr>
<tr>
<td>박병관</td> <td>17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</table>
```
<table border = "1">
<tr>
<td>이름</td> <td>나이</td> <td>키</td>
</tr>
<tr>
<td>박병관</td> <td>17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</table>

<br>

### +\<thead>, \<tbody>, \<th>
테이블을 단순히 시각적인 것이 아닌 웹페이지에 있는 내용을 조금 더 가치있도록 만드려면 태그를 활용해서 구체적인 표현이 필요하다

```html
<table border = "1">
<thead>
<tr>
<th>이름</th> <th>나이</th> <th>키</th>
</tr>
</thead>
<tbody>
<tr>
<td>박병관</td> <td>17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</tbody>
</table>
```
<table border = "1">
<thead>
<tr>
<th>이름</th> <th>나이</th> <th>키</th>
</tr>
</thead>
<tbody>
<tr>
<td>박병관</td> <td>17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>17</td> <td>170</td>
</tr>
</tbody>
</table>

<br>

### +rowspan, colspan
표를 세로로, 가로로 병합 할 수 있다

```html
<table border = "1">
<thead>
<tr>
<th>이름</th> <th>나이</th> <th>키</th>
</tr>
</thead>
<tbody>
<tr>
<td>박병관</td> <td rowspan = "2">17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>170</td>
</tr>
</tbody>
</table>
```
<table border = "1">
<thead>
<tr>
<th>이름</th> <th>나이</th> <th>키</th>
</tr>
</thead>
<tbody>
<tr>
<td>박병관</td> <td rowspan = "2">17</td> <td>168</td>
</tr>
<tr>
<td>박성한</td> <td>170</td>
</tr>
</tbody>
</table>

<br>
  
## \<input>, \<form>
### \<input>
**사용자로부터 정보를 입력받을 수 있다**

```html
<p>아이디 = <input type = "text"></p>
<p>비밀번호 = <input type = "password"></p>
<p><input type = "submit"></p>
```
type으로 사용자로부터 입력받는 정보의 형태를 변환할 수 있다

<br>

이 때 사용자에게 입력받는 정보가 어디에 있는 서버로 전송할지에 대한 정보가 불충분 하다

<br>

### \<form>
**사용자가 입력한 정보를 서버로 전송할 수 있다**

```html
<form action = "">
<p>아이디 = <input type = "text" name = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd"></p>
<p><input type = "submit" name = "address"></p>
</form>
```
action안에 주소를 입력하면 사용자에게 입력된 정보가 주소로 전송된다  
name을 정해줘서 전송되는 정보의 이름을 정해준다  

<br>

```html
<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd"></p>
<p><input type = "submit" name = "address"></p>
</form>
```
  
<!--예시-->

<br>

### +value
기본값을 설정할 수 있다

```html
<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id" value = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd" value = "password"></p>
<p><input type = "submit" name = "address"></p>
</form>
```
<!--예시-->

<br>

### +textarea
여러줄을 입력할 수 있는 텍스트 필드를 만들 수 있다

```html
<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id" value = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd" value = "password"></p>
<p>메모 = <textarea cols = "50" rows = "10">기본값</textarea></p>
<p><input type = "submit" name = "address"></p>
</form>
```
cols는 가로, rows는 세로 의 길이를 변경할 수 있다

<br>

<!--예시-->

<br>

## \<select>, \<option>
**dropdown list(콤보박스)를 만들 수 있다**

```html
<form action = "전송할 주소">
<select name = "color">
    <option value = "green">초록색</option>
    <option value = "blue">파란색</option>
    <option value = "red">빨간색</option>
</select>
<input type = "submit">
</form>
```
value로 선택은 초록색, 파란색, 빨간색 을 하겠지만 선택후 서버로 전송되는 값을 변경할 수 있다

<br>

<!--예시-->

<br>

### +콤보박스 다중선택

```html
<form action = "전송할 주소">
<select name = "color" multiple>
    <option value = "green">초록색</option>
    <option value = "blue">파란색</option>
    <option value = "red">빨간색</option>
</select>
<input type = "submit">
</form>
```
multiple 을 추가하여 ctrl을 누르면 다중선택이 가능한 콤보박스를 만들 수 있다

<br>

<!--예시-->

<br>

이 때 콤보박스를 활용해도 되지만 **체크박스** 가 더 좋을 수 있다

<br>

## radio
**체크박스를 만들 수 있다**

```html
<input type = "radio">
<input type = "radio">
```
<!--예시-->
  
<br>

```html
<input type = "radio" name = "color">
<input type = "radio" name = "color">
```
같은 이름을 주면 하나의 버튼만 선택된다

<br>

<!--예시-->

<br>

```html
<p>
<input type = "radio" name = "color1">
<input type = "radio" name = "color1">
</p>
<p>
<input type = "radio" name = "color2">
<input type = "radio" name = "color2">
</p>
```
name값이 같은 것 끼리 그루핑이 되고 같은 그룹에 속하는 것 중 하나가 선택되면 나머지 선택이 해제되는 형태 

<br>

<!--예시-->

<br>

### +checkbox
name값이 같은 것끼리 다중선택이 가능하다 

```html
<p>
초록색 = <input type = "radio" name = "color" value = "green">
파란색 = <input type = "radio" name = "color" value = "blue">
빨간색 = <input type = "radio" name = "color" value = "red">
</p>
<p>
초록색 = <input type = "checkbox" name = "color" value = "green">
파란색 = <input type = "checkbox" name = "color" value = "blue">
빨간색 = <input type = "checkbox" name = "color" value = "red">
</p>
```
radio와 달리 checkbox는 이름이 같은 것 끼리 다중선택이 가능하다

<br>

<!--예시-->
  
<br>

### +checked
사용자가 웹 페이지를 열었을 때 기본적으로 항목이 선택되어있게 할 수 있다

```html
<form action = "전송할 주소">
초록색 = <input type = "radio" name = "color" value = "green" checked>
파란색 = <input type = "radio" name = "color" value = "blue">
빨간색 = <input type = "radio" name = "color" value = "red">
</p>
<p>
초록색 = <input type = "checkbox" name = "color" value = "green" checked>
파란색 = <input type = "checkbox" name = "color" value = "blue">
빨간색 = <input type = "checkbox" name = "color" value = "red">
</p>
<input type = "submit">
</form>
```
<!--예시-->

<br>

## hidden field
눈에 보이진 않지만 서버쪽으로 어떤 데이터를 전송할 수 있다

```html
<form action = "전송할 주소">
    <input type = "text" name = "id"> 
    <input type = "hidden" name = "hide" value = "H">
    <input type = "submit">
</form>
```
타입이 hidden인 hide는 UI가 없지만 H라는 데이터를 전송할 수 있다

<br>

<!--예시-->

<br>

## \<label>
UI요소를 정의할 수 있다  
정의를 해줘서 웹 페이지를 좀더 정보로서의 가치를 줄 수 있다

```html
<form action = "전송할 주소">
    <p>
        <label for = "id">아이디 =</label>
        <input id = "id" type = "text" name = "id" value = "id">
    </p>
    <p>
        <label for = "pw">비밀번호 =</label>
        <input id = "pw" type = "password" name = "pwd" value = "password">
    </p>
    <p>
        <label for = "mm">메모 =</label> 
        <textarea if = "mm" cols = "30" rows = "2">기본값</textarea>
    </p>
    <p>
        <label>
        <input type = "checkbox" name = "agree" value = "yes">동의
        </label>
    </p>
</form>
```
id를 활용해서 각각의 레이블들이 무엇의 레이블인지 나타낸다 (for = "", id = "")  
label로 checkbox를 묶어줘서 label을 눌러도 체크가 됨

<br>

<!--예시-->

<br>

## method
데이터를 전송하는 방법들에는 **get방식**과 **post방식** 등이 있다

get 방식 = url을 통해서 데이터를 전송하는 방식  
post 방식 = url이 아닌 방식으로 데이터를 숨겨서 전송하는 방식  

<a href = "https://mommoo.tistory.com/60" target = "_blank" title = "참고자료">get방식과 post방식의 차이</a>  

```html
<form action = "전송할 주소" method = "post">
<input type = "text" name = "id">
<input type = "password" name = "pwd">
<input type = "submit">
</form>
```
method에 전송할 방법을 넣는다
method를 정해주지 않으면 기본적으로 get방식으로 된다  

<br>

<!--예시-->

<br>

## file
**파일 업로드를 할 수 있다**

```html
<form action = "전송할 주소" method = "post" enctype = "multipart/form-data">
    <input type = "file" name = "profile">
    <input type = "submit">
</form>
```
file의 타입으로 파일을 선택하는 ui를 만들 수 있다

<br>

<!--예시-->

<br>








## 정보로서의 HTML
HTML이 처음 고안되었을 때는 단지 웹페이지를 표현하기 위한 언어였다. 그러나 웹이 폭발적으로 성장하면서 인류의 많은 정보들이 '웹 화' 된다. 그래서 HTML이라고 하는 것은 중요한 사회적 역할(인류의 지식을 담아내는 그릇같은 역할)을 담당하게된다. 이러한 역할을 더 잘 수행하기 위해 HTML은 정보를 담아내는 역할에 집중, 전념할 수 있게 여러가지 조치들이 취해지게 된다.

<br>

## \<font>
HTML은 세월의 흐름에 따라 태그가 추가, 의미변화, 퇴출이 발생한다  
font태그는 대표적인 퇴출된 태그 중 하나이다  

'이 태그가 왜 퇴출되었는가'를 통해서 HTML이 정보로서 중요하다 라는 내용에 접근해야한다

```html
<font size = "1">Hello</font> World
<font size = "2" color = green>Hello</font> World
<font size = "5" color = "blue">Hello</font> World
```
font태그로 감싸주면 문자를 꾸며줄 수 있다

<br>

<!--예시-->

이 font태그는 아무런 의미를 가지고 있지 않다는 문제점이 있다
이러한 문제점은 코드의 해석능력을 떨어뜨리고 HTML용량의 크기를 키웠다

이처럼 HTML에서 디자인과 관련된 태그들을 퇴출시키면서 css라고 하는 별도의 프로그래밍 언어를 고안

이를 보면 HTML이 정보에 집중하도록 하는 것이 굉장히 중요했다 는 것을 생각해볼 수 있다

<br>

## \<meta>
어떤 데이터를 설명할 수 있다

글의 본문에 표현되지는 않지만 웹 페이지를 설명하는 정보를 적을 수 있다

```html
<head>
    <meta charset = "utf-8">
</head>
<body>
    meta태그에 대한 내용입니다
</body>
```
charset = "ut-8" 은 웹프라우저가 작성한 내용을 읽고 화면에 표시하려고 하면 utf-8이라는 방식읽는다

이 정보들을 컴퓨터에 저장하는 것을 **인코딩(Encoding)** 이라고 한다  
이 저장되어있는 정보들을 꺼내서 화면에 표시하는 과정을 **디코딩(Decoding)** 이라고 한다

<a href = "https://webclub.tistory.com/354" target = "_blank" title = "참고자료">meta태그</a>
  
<br>

```html
<head>
    <meta charset = "utf-8">
    <meta name = "description" content = "생활코딩의 소개자료">
    <meta name = "keywords" content = "코딩,html">
    <meta name = "author" content = "박병관">
    <meta http-equiv = "refresh" content = "30">
</head>
<body>
    meta태그에 대한 내용입니다
</body>
```
`<meta name = "description" content = "생활코딩의 소개자료">`는 웹페이지 상에서는 표시가 되지 않지만 웹페이지에 대한 어떤 요약된 자료로 사용될 수 있다

`<meta name = "keywords" content = "코딩,html">`도 마찬가지로 웹페이지를 분류하는데 영향을 줄 수 있다

`<meta name = "author" content = "박병관">`는 웹페이지의 저자를 표시할 수 있다

`<meta http-equiv = "refresh" content = "30">`는 이 웹페이지를 30초마다 새로고침 할 수 있다

이런식으로 meta태그는 웹 페이지의 내용은 아니지만 내용을, 웹페이지를 설명하는 역할을 하는 태그이다

이러한 태그들을 잘 작성하면 웹 페이지가 가치있는정보가 될 수 있다

<br>

## semantic
html5가 되면서 각각의 어떤 정보들을 명확하게 표현해주는 태그들이 등장한다 이러한 태그들을 semantic태그라고 표현한다

```html
<header>
    <h1>제목</h1>
</header>

<nav>
<ol>
    <li>
        <a href = "연결할 웹 페이지">1번째 내용의 제목</a>
    </li>
    <li>
        <a href = "연결할 웹 페이지">2번째 내용의 제목</a>
    </li>
    <li>
        <a href = "연결할 웹 페이지">3번째 내용의 제목</a>
    </li>
    <li>
        <a href = "연결할 웹 페이지">4번째 내용의 제목</a>
    </li>
</ol>
</nav>

<section>
    <article>
        본문의 내용 1
    </article>
    <article>
        본문의 내용 2
    </article>
</section>

<footer>
    <ul>
    <li>
        <a href = "연결할 웹 페이지">1 번째 하단내용</a>
    </li>
    <li>
        <a href = "연결할 웹 페이지">2 번째 하단내용</a>
    </li>
    </ul>
</footer>
```
header태그는 '가장 중요한 정보들이 있는'부분이 이부분이다 라는 의미만 가지고 있는 태그이다

nav태그는 '웹페이지 상에서 내비게이션 역할'을 하는 부분이다 라는 의미만 가지고 있는 태그이다

article태그는 본문이라는 것을 의미론적으로 표현할 수 있다

footer태그는 '웹페이지의 하단에 위치하는 정보' 라는 의미만 가지고 있는 태그이다

<a href = "https://opentutorials.org/module/1892/10954" target = "_blank" title = "참고자료">생활코딩<의미론적태그></a>

<br>
<br>
<br>
  
# 검색엔진 최적화
검색엔진 = SEO = Search Engine Optimization 

검색엔진이 동작하는 방법은 만약 어떤 웹사이트를 만들어 공개한다면 검색엔진을 만드는 회사들이 소프트웨어를 웹사이트에 보낸다. 이 소프트웨어가 사이트에 브라우저처럼 접속해서 사이트에 있는 html파일을 해석, 기준에 따라 분류한다. 사용자가 검색했을 때 검색한 것에 가장 적합한 컨텐츠를 제공한다.

이 검색엔진 최적화라는 것은 이 검색엔진들이 사이트를 잘 해석할 수 있도록, 사이트가 사용자들에게 검색되었을 때 상위에 노출될 수 있도록 하는 여러가지 노력들을 말한다

<br>

검색엔진을 최적화 하기 위해서는 무엇을 해야 할까?

결론적으로 html코드를 의미론적으로 타당한 태그로 잘 설명하는 것이 검색엔진 최적화의 기본이다 (적정한 수준의 검색엔진 최적화의 균형을 잡는게 중요하다)
 
### <a href = "http://static.googleusercontent.com/media/www.google.com/ko//intl/ko/webmasters/docs/search-engine-optimization-starter-guide-ko.pdf" target = "_blank" title = "">구글의 검색엔진 최적화 가이드</a>

#### 명확하고 독창적인 타이틀의 사용  
자신의 컨탠츠를 잘 대표하는 title태그를 작성하는 것은 중요하다  

title태그 권장사항
* 페이지 콘텐츠를 정확하게 설명하는 제목
* 페이지마다 고유한 title태그 작성
* 간결하면서 내용을 포함한 제목 작성

<br>

#### "description" 메타 태그 활용하기
meta태그안에 포함돼 있는 내용들은 검색할 때 중요한 검색대상이 된다  

descrition 태그 권장사항
* 페이지의 내용을 정확하게 요약하기
* 각 페이지마다 내용에 맞는 고유한 설명 사용 

<br>

#### 페이지의 url구조를 개선하기
url의 주소를 조금 더 알아보기 좋은 형태로 만들면 검색엔진 최적화에도 도움이 되고, 유저도 자신이 방문한 웹 페이지가 어떤 정보를 갖고 있는지도 알기쉽고, url을 다른사람에게 공유했을 때 받은 사람이 어떤 내용을 담고 있는지 예측하는 데에도 도움이 된다  

url 구조를 위한 권장사항
* URL에 단어 사용
* 단순 디렉토리 구조 만들기
* 특정 문서에 도달하기 위한 한 가지 형태의 url제공(canonical, 리다이렉션)

<br>

#### 사이트 내에서 이동하기 쉽게 만들기
검색엔진입장에서 페이지의 전체 데이터가 링크로 잘 조직화되어 있어야 사이트에 있는 정보를 잘 가져갈 수 있다

* 홈페이지를 기반으로 한 이동 경로 계획하기
* '사이트 이동 경로'의 사용으로 방문자에게 편리를 제공하기(브레드 크럼)
* 사용자가 url의 일부를 제거하는 경우 발생할 상황을 고려
* 실제 사용자와 검색엔진을 위한 두 종류의 사이트맵(사이트의 구조) 준비하기

사이트 내 쉬운 이동을 위한 권장사항
* 자연스러운 계층 구조 만들기
* 이동 경로를 위해 텍스트 링크를 사용

<br>

#### 우수한 품질의 콘텐츠와 서비스 제공
검색 엔진을 위한 것이 아닌 사용자를 위한 콘텐츠 작성

<br>

#### 보다 나은 앵커 텍스트(a) 작성
앵커 텍스트를 위한 권장사항 
* 내용을 함축하는 텍스트 선택
* 간결한 텍스트 작성 
* 링크를 눈에 띄기 쉽게 포맷하기

<br>

#### 이미지 사용 최적화
* 이미지 관련 정보는 'alt' 속성을 이용해 제공
* 보편적인 이미지 파일 포맷의 사용과 이미지를 위한 특정 디렉토리 설정

이미지 사용을 위한 권장사항
* 간결하면서 설명적인 파일 이름과 alt텍스트의 활용
* 이미지 사이트맵 제공

<br>

#### 제목 태그의 적절한 활용
제목테그는 웹 페이지에서 중요한 의미를 가진다

<br>

#### robots.txt를 효과적으로 활용하기
웹 페이지에 접근하는 봇들(크롤러)에게 접근에 대해 요청할 수 있는데 그 때 사용하는 것이 robots.txt파일이다

robots.txt 권장 사항
* rovots.txt를 보안 도구로 사용하지 않기
* 민감한 콘텐츠는 보다 안정한 방법 사용하기
* 웹마스터를 위한 무료 도구 사용하기

<br>

#### 페이지랭크
똑같은 단어를 두 개의 사이트가 동시에 가지고 있을 때 어떤 사이트를 먼저 검색 결과에 노출하는 것의 기준이 페이지랭크 이다

<br>
<br>
<br>

# 추가사항
  
<br>

## 웹개발자 도구
F12 > Toggle device toolbar 으로 각 디바이스크기로 웹 페이지를 볼 수 있다

F12 > Network 는 웹서버에 설치되어있는 html을 웹서버로부터 받아서 화면에 표시해준다

<br>

## 모바일 지원
데스크탑 = 화면을 넓게씀
모바일폰 = 화면을 좁게씀
이것을 브라우저가 알아서 처리

```html
<head>
    <meta name = "viewport" content = "width=device-width,initial-scale=1.0">
</head>
<body>

</body>
```
`<meta name = "viewport" content = "width=device-width">`에서
`width=device-width`는 화면의 폭을 디바이스의 폭만큼 지정할 수 있다
`initial-scale=1.0`는 화면을 확대, 축소 하지 않은 상태(1.0)에서 시작할 수 있다

<br>

## 새로운 제출 양식들
HTML5에 들어오면서 사용자들이 웹을 사용하는 것과 관련된 편의 기능들이 대폭 향상 된다 

그 중에서 사용자가 어떤 정보를 서버 쪽으로 전송할 때 사용하는 form과 관련해서도 개선이 있었다

다양한 타입을 사용함으로써 모바일에서 편리해진다(맞는 UI) 

#### number

```html
<form action = "전송할 주소">
    <input type = "number">
</form>
```
사용자가 입력을 할 때 숫자만 입력하게 할 수 있는 기능

```html
<form action = "전송할 주소">
    <input type = "number" min = "10" max = "15">
    <input type = "submit">
</form>
```
min과 max를 정해줘서 입력값을 제한할 수 있다
사용자가 유효하지 않은 값을 입력하게 되면 제출을 거부한다

<br>

#### color
사용자가 쉽게 색을 선택할 수 있다

<br>

#### date
날짜를 입력하는 화면이 뜬다

```html
<form action = "전송할 주소">
    <input type = "date" name = "datev">
    <input type = "submit">
</form>
```

<br>

#### datetime (지원 X)
서버로 데이터가 전송될 때 **국제표준시**라고 하는 방식으로 전송된다

<br>

#### datetime-local (지원 X)
서버로 데이터가 전송될 때 현재 살고 있는 지역에 해당하는 시간으로 전송이 된다

<br>

#### email
이메일 정보만 입력할 수 있도록한다

```html
<form action = "전송할 주소">
    <input type = "email" name = "emailv">
    <input type = "submit">
</form>
```
이메일형식이 아닐 때 제출을 거부

<br>

#### month
월을 지정하는 것

```html
<form action = "전송할 주소">
    <input type = "month" name = "monthv">
    <input type = "submit">
</form>
```

<br>

#### range
숫자의 범위를 지정, 사용자가 움직이면서 지정할 수 있게 하는 것

```html
<form action = "전송할 주소">
    <input type = "range" name = "rangev" min = "0" max = "10"> 
    <input type = "submit">
</form>
```
슬라이더가 나타나고 min값과 max값을 지정할 수 있다

<br>

#### search
특별한 기능은 없지만 검색기능을 찾거나 할 때 좋다

```html
<form action = "전송할 주소">
    <input type = "search" name = "searchv">
    <input type = "submit">
</form>
```
정보로서의 기능을 높인다

<br>

#### tel
전화번호와 관련

```html
<form action = "전송할 주소">
    <input type = "tel" name = "telv">
    <input type = "submit">
</form>
```

<br>

#### time
date는 날짜 라고 한다면 time은 시간을 의미한다

```html
<form action = "전송할 주소">
    <input type = "time" name = "timev">
    <input type = "submit">
</form>
```

<br>

#### url
url정보를 입력할 때 쓰는 것 

```html
<form action = "전송할 주소">
    <input type = "url" name = "urlv">
    <input type = "submit">
</form>
```
url이 아닐 때 제출을 거부

<br>

#### week
주를 입력할 때 쓰는 것

```html
<form action = "전송할 주소">
    <input type = "week" name = "weekv">
    <input type = "submit">
</form>
```

<br>

<a href = "https://opentutorials.org/module/1892/11038" target = "_blank" title = "참고자료">생활코딩<HTML5의 입력양식></a>

<br>

## 새로운 속성들

```html
<form action = "전송할 주소" autocomplete = "on">
    <input type = "text" name = "id">
    <input type = "password" name = "password" autocomplete = "off">
    <input type = "submit">
</form>
```
자동완성기능 = auto complete
명시적으로 활성화, 비활성화 할 수 있다

기본적으로 `<form action = "전송할 주소" autocomplete = "on">`에 의해서 전체적으로 자동완성이 이루어 지는데 ` <input type = "password" name = "password" autocomplete = "off">`에 의해서 비밀번호는 자동완성을 비활성화된다

```html
<form action = "전송활 주소">
    <input type = "text" name = "id" placeholder = "id를 입력해주세요" autofocus>
    <input type = "password" name = "password" placeholder = "비밀번호를 입력해주세요">
    <input type = "submit">
</form>
```
placeholder는 사용자가 입력을 시작하기 전까지 표시되는 글

autofocus는 웹페이지가 열였을 때 자동으로 사용자의 커서가 첫번째 입력양식에 포커싱 되도록 할 수 있다

<br>

## 입력 값 체크
사용자가 입력한 값들을 체크하는 것을 유효성검사, 밸리데이션(validation)이라고 한다

HTML5에서는 이러한 입력 값 체크와 관련된 개선이 있었다
이런 기능을 활용하면 JS없이 HTML코드만으로 유효성검사를 할 수 있다

```html
<form action = "전송할 주소">
    <input type = "text" name = "id" placeholder = "아이디를 입력해주세요" required pattern = "">
    <input type = "email" name = "email" placeholder = "이메일 입력">
    <input type = "submit">
</form>
```
required는 입력이 꼭 필요한사항을 만들 수 있다  
이 타입의 값과 다른 값이 입력됐을 때 제출을 거부하는 것도 유효성검사라 할 수 있다

pattern이라는 속성의 속성 값으로 **정규표현식**이라는 것이 들어온다  

<br>

### 정규표현식
정규표현식은 html과 다른 목적, 문법을 가지고 있다  
정규표현식이 하는 역할은 어떠한 문자에서 패턴을 찾아내서 그 패턴이 문자에 있는지 확인하는 역할을 한다

<a href = "https://opentutorials.org/module/1892/11090" target = "_blank" title = "참고자료">생활코딩<입력 값 체크></a>
<a href = "https://opentutorials.org/course/909/5143" target = "_blank" title = "참고자료">생활코딩<정규표현식></a>

**[a-zA-Z]** = 첫번째 문자는 알파벳이여야 한다  
=> 정규표현식에서 **[] 는 문자 한 개를 의미한다**  
=> **[a-zA-Z][a-zA-Z]** 는 두 개의 알파벳을 받는다

<br>

**[a-zA-Z].** = 첫번째 문자는 알파벳, 두번째 문자는 아무 것이나 상관없다  
=> 정규표현식에서 **. 는 모든 문자를 의미한다**

<br>

[a-zA-Z].+ = 첫번째 문자는 알파벳, 두번째 문자는 아무 것이나 상관없음, 어떠한 문자건 하나 이상의 문자가 있어야 한다  
=> 정규표현식에서 **+ 는 하나 이상의 문자를 의미한다**
+  마지막 문자는 숫자여야 한다 = [a-zA-Z].+[0-9]



* HTML쪽에서 아무리 제한을 걸어도 실제 데이터를 전송하는 것을 기술적으로 막을 수는 없다

* 결국에는 사용자가 입력한 정보를 받는 서버쪽에서 반드시 사용자가 입력한 정보에대헤서 테스트를 해서 데이터로 받아들여야 한다

* 폼 밸리데이션(form validation)은 그냥 사용자에게 편의를 제공한다의 느낌으로 활용해야 한다

