Vue.js로 프로젝트를 구축하는 데 Vue-cli(vue개발 환경 설정)를 통해 패키지 설정을 한다

1. 모듈 설치

```
npm i -g @vue/cli
```

위의 명령어로 모듈 설치

2. vue명령어로 프로젝트 생성

```
vue create 프로젝트이름 
```
위의 명령어로 프로젝트를 생성할 수 있고, `npm run serve`로 로컬 서버를 실행할 수 있다

> 나는 설치했을 때 버전이 높아서 `npm i -g @vue/cli@4.5.10` 으로 책과 버전을 맞춰줬다, 버전이 높으면 `npm run serve` 했을 때 `index.html`이 충돌이 난다고 에러가 뜬다


### webPack
vue-cli로 개발 환경을 구축했는데, vue-cli에는 webpack이 들어가있다, webpack으로 vue.js로 각각 블록단위로 개발하고 빌드 할 때는 html,css,js,vue,img 등을 번들링 해주는 도구다
