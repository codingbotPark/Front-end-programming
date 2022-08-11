express의 핵심적인 3가지 특징인 
1. 쉬운 미들웨어 설정
2. 쉬운 라우팅
3. 쉬운 정적 자원 제공 서버

```
npm install express
```

로 express 모듈 설치

* 미들웨어
**미들웨어는 어떤 로직 계층을 중간에 넣는 것**이다, 이를 활용해 어떤 요청을 할 때 미들웨어를 추가해 인증, 로거 작업을 쉽게 구현할 수 있다(자동차의 톨게이트 같은 역할)

* morgan을 이용해 로거 설정
```
npm i morgan
```
으로 morgan설치

`app.use`로 morgan을 집어 넣어서 간단하게 로깅 미들웨어를 설정할 수 있다

* 손쉬운 라우팅
라우팅이란 사용자가 각기 다른 유형의 요청, URL에 따라 다른 콘텐츠를 보여주는 것이다

HTTP메서드에는 get, post, pu, patch, delete가 있다

* path모듈
Node.js의 path라는 모듈은 파일, 디렉터리에 관한 path들을 조작할 수 있는 모듈이다

많이 사용되는 path 메서드는 `join` 과 `resolve` 이다

> `resolve` = 받은 매개변수들을 통해 절대 경로를 반환
`join` = 받은 매개변수들을 연