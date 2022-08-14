
## 핵심개념 , VUEX
vue.js에서 중요한 
* Virtual DOM
* 라이프 사이클
* composition API
* 부모와 자식간의 통신
* ref
* reactive
* 디렉티브와 바인딩
* vuex
에 관한 내용

### Virtual DOM
vue.js에는 뷰인스턴스로 관리하는 DOM에 대해 가상돔이라는 가상 객체를 만들어 기존의 DOM과 업데이트된 DOM을 빠르게 비교해 바꾸는 작업을 한다
> 양방향 바인딩을 적용할 수 있어 데이터 중심으로만 생각해도 된다, 즉 **데이터가 갱신되었을 때 DOM이 알아서 갱신, 입력폼 등 DOM의 데이터가 갱신되어도 실제 데이터가 변경된다**

1. 뷰인스턴스
vue가 dom을 관리하도록 부리는 일꾼, DOM에 뷰인스턴스를 붙여 vue.js로 관리할 수 있다
> vue-cli프로젝트에서는 main.js가 이 영역을 설정한다

.vue 확장자로 이루어진 코드들은 아래의 3개로 구성된다

2. 컴포넌트 기반

```
<template>
<scrip>
<style>
```

### 라이프사이클, composition API
1. 라이프 사이클
HTML 페이지를 로드할 때 라이프사이클에는 다음과 같은 3가지가 있다

* DOMContentLoaded = HTML,DOM 트리 생성 완료, img나 css등의 정적 자원은 로드되지 않음
* load = HTML, img, css 등 모든 정적 자료가 로드
* beforeunload/unload = 사용자가 페이지를 떠나기 전(close이벤트 발생 전)

이처럼 Vue에도 라이프사이클이 있다, 이 라이프사이클에 맞게 함수를 설정하고 로직을 구현해야 한다

* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed

이 중 중요한 두 가지를 알아본다

#### created
컴포넌트가 생성된 단계, DOM에 vue인스턴스가 붙지 않아 DOM에 관한 함수는 불가하다, AJAX요청으로 데이터를 fetch 하는데 주로 쓰인다

#### mounted
DOM에 인스턴스까지 붙은 상태(DOM조작 가능)

> 부모 컴포넌트의 create가 된 후, 자식 컴포넌트의 create,mounted가 일어나고 부모의 mounted가 시작된다

2. composition API
Vue.js 3.0의 composition API에서 라이프사이클을 아래와 같이 매핑된다

created = setup
mounted = onMounted

compositionAPI등장으로 재사용과 모듈화가 편리해졌고, this.date, this.props로 받는 것이 아닌 <=> contest, props로 받을 수 있어 좀 더 명시적으로 되었다

### 디렉티브와 데이터 바인딩
Vue.js는 MVVM패턴이 들어간 프레임 워크라 양방향 바인딩이 되야한다, 즉 화면에 보이는 데이터와 브라우저 메모리 상의 데이터가 일치해야 한다

> 데이터가 변했을 때 뷰에 반영되는 것은 같지만, 뷰에서 이벤트가 일어났을 때 양방향 바인딩이 처리되는 점이 단반향과 다르다

이러한 바인딩을 도와주는 것이 **지시자** 라고 불리는 디렉티브이다, v-show, v-if등이 디렉티브이다

> v-show는 `display:none` 과 같은 느낌이고 v-if는 주석처리를 하는 느낌이기 때문에 조건이 많이 변할 때 v-show, 많이 변하지 않을 땐 v-if가 좋다

### 부모와 자식 컴포넌트 간의 통신
컴포넌트 단위로 개발을 하는데, 부모와 자식간의 통신을 할 수 있다, 부모에서 넘겨주는 속성들을 props, properties라고 한다