## SEO
SEO = Search Engine Optimization이다 SEO를 높이는 방법은

* 캐노니컬 태그 설정
> link다음에 캐노니컬 태그를 붙인다

* 태그와 메타 설정
> img태그에 alt, head에 메타데이터, title도 페이지마다 다르게

* 페이지 속도 개선
> [속도확인](https://pagespeed.web.dev/)

* 구조화
> 태그들이 HTML5의 기본에 맞춰 설계되어야 한다

## 코드설명
#### html

내비게이션 anchor를 할 수 있다
```html
<a href="#test">이동</a>
.
.
.
<div id="test">여기로</div>
```
이동을 누르면 '여기로' 이동한다


#### css

```css
.animate-text {
    opacity: 0;
    transform: translateY(-70px); 
    transition: all 3.7s cubic-bezier(.23,1,.030,1.005);
}

.come-in {
    opacity: 1; 
    transform: translateY(0);
} 
```
위의 코드로 fadein-down 으로 나오는 것을 구현

## NCP, 깃허브를 이용한 배포