# HTML
HTML = Hyper Text Markup Language
Hyper Text = 웹브라우저를 통해서 어떤 왭 페이지를 보면 '링크'를 보게 된다. 이 '링크'라는 기능이 Hyper Text이다.
Markup = HTML은 이 Markup이라는 문법적인 형식, 특성에 따른다
Language = 컴퓨터 프로그래밍 언어

## 역사
* HTML이전의 선행기술에는 MarkUp언어들의 시조라 할 수 있는 **GML** , 태그에 사용되는 꺾쇠와 같은 것들이 사용된 **SGML** 등이 있다
* '팀 버너스 리'라는 사람이 '유럽 입자 물리연구소'에서 비공식적으로 웹을 만드는 작업을 하면서 선행기술인 **SGMLguid** 을 익숙하게 사용하고 있었다
* 1990년도에 '팀 버너스 리'가**SGMLguid** 에서 **\<a>** 태그를 추가하여 **HTML** 을만들었다

[위키백과<HTML역사>](https://ko.wikipedia.org/wiki/HTML#%EC%97%AD%EC%82%AC)


<br>

# 태그
Tag = HTML에서 가장 중요한 문법, 프로그래밍 언어를 규정하는 가장 중요한 특징, HTML에서 MarkUp과 밀접한 관계

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
[위키백과<링크>](https://ko.wikipedia.org/wiki/%EB%A7%81%ED%81%AC)

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
순서가 필요없는 목록을 만든다  

### ol (ordered list)
순서가 있는 목록을 만든다

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

## \<input>, \<form>
### \<input>
사용자로부터 정보를 입력받는다

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
사용자가 입력한 정보를 서버로 전송할 수 있다

```html
<form action = "전송할 ">
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
<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd"></p>
<p><input type = "submit" name = "address"></p>
</form>

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
<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id" value = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd" value = "password"></p>
<p><input type = "submit" name = "address"></p>
</form>

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

<form action = "전송할 주소">
<p>아이디 = <input type = "text" name = "id" value = "id"></p>
<p>비밀번호 = <input type = "password" name = "pwd" value = "password"></p>
<p>메모 = <textarea cols = "50" rows = "10">기본값</textarea></p>
<p><input type = "submit" name = "address"></p>
</form>

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

<form action = "전송할 주소">
<select name = "color">
    <option value = "green">초록색</option>
    <option value = "blue">파란색</option>
    <option value = "red">빨간색</option>
</select>
<input type = "submit">
</form>

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

<form action = "전송할 주소">
<select name = "color" multiple>
    <option value = "green">초록색</option>
    <option value = "blue">파란색</option>
    <option value = "red">빨간색</option>
</select>
<input type = "submit">
</form>

<br>

이 때 콤보박스를 활용해도 되지만 **체크박스** 가 더 좋을 수 있다

<br>

## radio
**체크박스를 만들 수 있다**

```html
<input type = "radio">
<input type = "radio">
```
<input type = "radio">
<input type = "radio">

<br>

```html
<input type = "radio" name = "color">
<input type = "radio" name = "color">
```
같은 이름을 주면 하나의 버튼만 선택된다

<br>

<input type = "radio" name = "color">
<input type = "radio" name = "color">

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

<p>
<input type = "radio" name = "color1">
<input type = "radio" name = "color1">
</p>
<p>
<input type = "radio" name = "color2">
<input type = "radio" name = "color2">
</p>

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

초록색 = <input type = "radio" name = "color" value = "green">
파란색 = <input type = "radio" name = "color" value = "blue">
빨간색 = <input type = "radio" name = "color" value = "red">
</p>
<p>
초록색 = <input type = "checkbox" name = "color" value = "green">
파란색 = <input type = "checkbox" name = "color" value = "blue">
빨간색 = <input type = "checkbox" name = "color" value = "red">
</p>

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
<form action = "전송할 주소">
초록색 = <input type = "radio" name = "color" value = "green1" checked>
파란색 = <input type = "radio" name = "color" value = "blue1">
빨간색 = <input type = "radio" name = "color" value = "red1">
</p>
<p>
초록색 = <input type = "checkbox" name = "color" value = "green2" checked>
파란색 = <input type = "checkbox" name = "color" value = "blue2">
빨간색 = <input type = "checkbox" name = "color" value = "red2">
</p>
<input type = "submit">
</form>

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

<form action = "전송할 주소">
    <input type = "text" name = "id"> 
    <input type = "hidden" name = "hide" value = "H">
    <input type = "submit">
</form>

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

<br>

## method
데이터를 전송하는 방법들에는 get방식과 post방식 등이 있다

get 방식 = url을 통해서 데이터를 전송하는 방식  
post 방식 = url이 아닌 방식으로 데이터를 숨겨서 전송하는 방식  

[get방식과 post방식의 차이](https://mommoo.tistory.com/60)

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

<form action = "전송할 주소" method = "post">
<input type = "text" name = "id">
<input type = "password" name = "pwd">
<input type = "submit">
</form>

<br>

















