## css 최적화

1. 값이 0이라면 0px이 아니라 0으로 하기
2. short hand 사용하기
3. 하위 선택자는 깔끔하게 만들기
4. repaint와 reflow를 최소화하기
> 자주 변경되는 DOM을 최하단에 위치시키는 것이 좋다
애니메이션은 tranform, opacity 속성 등을 설정(left, top등은 repain,reflow가 일어남)

5. 적절한 이미지 포멧 사용
6. 스타일을 재사용하기

## js 최적화
1. 이름 짓는 규칙 정하기
2. 배열 순회할 때 for in 반복문을 사용하지 않기(프로토타입 체인까지 검색해서 속도가 느리다)
3. DOM조작은 자제하기
> DOM조작은 그 자체만으로도 많은 비용이 든다, 따라서 DOM을 조작c최소화(DOM캐싱 하기)
4. 간단한 정규표현식 사용하기
> `ble | blue` 대신 `blu?e` 를 사용하기

## DeepDive
아래는 브라우저 구성 과정이다

![브라우저 구성 과정](https://miro.medium.com/max/1200/0*jBElrAMjF65vrh9B.jpeg)

여기서 **렌더링 엔진**은 html, css js의 내용을 토대로 브라우저 화면에 표시하는 일을 한다(크롬은 **웹킷**이라는 엔진을 사용한다)

![DOM트리 구축](https://images.velog.io/images/leedocs/post/28474fa2-8d08-4fbf-9f32-782d76e559ac/renderignEngine.png)

과정들을 알아보면

1. DOM 트리 구축
> 각 요소는 node로 설정이 되어 트리 형태로 저장, 이를 DOM트리라고 한다

2. 렌더트리와 렌더레이어 생성
>  CSS 파서에 의해 정해진 규칙 적용, CSSOM이라는 트리가 생성, 미리 만들어진 DOM트리 내에 있는 노드와 함께 렌더 객체가 생성,  렌더 객체에서 병렬적인 렌더트리가 생성되고 이 때 `display:none`, `font-size` 등 상속적인 스타일들이 부모노드에 위치하도록 설계하는 등 최적화를 해서 **렌더레이어가 완성**, **DOM트리와 렌더트리는 1:1 대응이 된다**, 렌더레이어가 완성될 때 GPU에서 처리되는 부분(canvas, filter, animation 등)은 각각 강제적으로 그래픽 레이어로 분리된다

3. 렌더레이어를 대상으로 Layout설정
> Global Layer는 브라우저의 사이즈가 증가하거나 폰트 사이즈가 커지면 변경된다

4. 렌더레이어를 대상으로 칠하기(paint)
> 픽셀마다 점을 찍듯 칠한다, 이를 레스터화라고 한다

5. 레이어 합치기 및 표기
> 각각 레어들로 부터 비트맵 생성, GPU에 텍스처로 업로드 된다

### reflow와 repaint
* reflow
렌더레이어에 포함된 요소 중 레이아웃의 변화가 생기면 layout부터 시작해 다시 설정하는 것
> height, width, scrollHeight, scrollLeft, scrollTop, scrollWidth, scrollTo(), padding, top, left 등을 수정하면 일어난다

* repaint
화면, 색깔 등의 변화가 생겼을 때 일어난다
> backgroundColor, color 등 색에 관한 요소를 수정하면 일어난다

### 많이 변경되는 사항을 reflow와 repaint가 일어나지 않도록 하기
그래픽 레이어에 담아둬서 최적화 할 수 있다

```css
@keyframes swim{
    from{
        top:0px
    }
    to {
        top:200px
    }
}
```
    
예를들어 y축을 옮겨야 할 때 위 코드 보다 `transform` 을 통해 움직여야 한다, `translateY` 를 하면 그 요소는 하드웨어 가속 대상이 되어 그 요소만 그래픽 레이어로 분할 된다(repaint, reflow X), 하지만 성능이 낮은 기기는 성능이 더 저하될 수 있다

보통 그래픽 레이어는 30개가 적당하다