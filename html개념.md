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

예) \<ul>태그 사용  
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

예) \<ol>태그 사용  
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

예) \<p>인식시켜야 하는 단락\</p> <p>인식시켜야 하는 단락</p>

+이 기본적인 p태그의 디자인을 css를 통해서 디자인 변경을 시킬 수 있다

<br>

## \<br>
**줄바꿈을 할 수 있다**

br태그는 void element 라고 해서 내용이 없는 태그라는 뜻이다  
예) a태그 = \<a>\</a>와 같이 감싸야 하지만 br태그 = \<br>만 하면 된다

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



















