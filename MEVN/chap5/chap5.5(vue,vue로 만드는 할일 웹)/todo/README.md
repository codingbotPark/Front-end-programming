# todo

1. 모듈 설치
```
npm i material-design-icons-iconfont axios vuex@next vue-router@4
```
위의 모듈들을 설치

2. app.vue nav바 만들기
```
<template>
  <nav>
    <router-link :to="{name : 'Home'}" class="logo">
      <span class="material-icons">eco</span>
    </router-link>
    <router-link>
      할 일
    </router-link>
  </nav>
  <router-view />
</template>
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
