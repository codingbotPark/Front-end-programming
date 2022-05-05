

1강
* css, 인라인으로 캔버스 크기를 조절할 수 있는데, 기본적으로 인라인으로 들어온 크기만큼의 캔버스를 만들고, css에 지정된 크기에 따라 크기가 변화고 크기차이에 따라 같은 비율로 만들어진다(그 이유는 고해상도를 표현하기 위해)

* 캔버스는 css(전체 다 적용)이 아닌 순서대로 색칠하는 느낌으로 실행이 된다, 예를들면

```js
const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d')

context.fillReact(0,0,100,100)
context.fillStyle = "red"
context.fillReact(50,50,100,100)
```
두 개의 다른 색의 사각형이 생긴다
