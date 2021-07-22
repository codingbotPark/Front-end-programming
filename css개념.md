## CSS소개

css는 html없이는 있을 수 없다

HTML의 본질 = 정보

HTML에서 정보를 전달하는 일, 꾸미는 일을 할 수 있었는데 웹이 발전해나가면서 HTML은 정보를 표현하는 일에 전념하게 되고 CSS는 디자인을 담당하게 된다

HTML에서 CSS가 분화될 수 밖에 없었던 이유는 분화 시켰을 때 효과가 훨신 더 크다 라는 판단이 있어서 이다

```css
<style>
    {
        coler:re
    }
</style>
```
```html
<li>HTML</li>
<li>CSS</li>
<li>JS</li>
```
이런 행태를 띈다

정보와 디자인을 분리하면 
* 웹페이지를 해석해서 처리를 할 때 더 효율적으로 할 수 있다
* 과거(HTML과 CSS가 같이 사용될 때)에 비해 괸리가 쉬워진다
```html
<li><font color = "blue">HTML</li>
<li><font color = "blue">CSS</li>
<li><font color = "blue">JS</li>
```
=
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

## HTML과 CSS가 만나는 법
CSS를 실행하는 방법에는 세가지가 있다

[참고자료](https://www.codingfactory.net/10529)

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
적용을 원하는 HTML문서에 `<link rel = "stylesheet" href = "style.css">` 코드를 추가한다

여러 HTML문서에 link태그로 연결만 하면 적용할 수 있다

<br>

## 선택자와 선언
![선택자와 선언](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLz8IiWnEN-ijFqCQR7d6OHbGrE805GIz6g&usqp=CAU)

<br>

## 선택자의 종류

###아이디선택자

```html

```