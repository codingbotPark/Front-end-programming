# movie-web-by-NextJS
[nomadcoder's making movie web service by NextJS](https://nomadcoders.co/nextjs-fundamentals)


## 0 : INTRODUCTION
2강
아래의 명령어로 next를 사용할 수 있고
```terminal
npx create-next-app
```
ts를 함꼐 사용하고 싶다면 `--typescript` 옵션을 추가해줄 수 있다

```
npm run dev
```
위의 명령어로 실행시켜볼 수 있다

## 1 : FRAMEWORK OVERVIEW
0강
react는 라이브러리이기 때문에 설정해야 할 것이 많고, 내부까지 건드릴 수 있지만
nextjs는 프레임워크이기 때문에 설정해야할 것이 적어지고, 내부는 건드리기 어렵다

1강 
nextjs는 프레임워크이기 때문에 component의 이름은 중요하지 않다, 대신 page이름은 중요할 수 있다

중요한 것은 component는 `export default`여야 한다는 것이다, export하지 않으면 에러가 난다

2강
next의 가장 좋은 기능 중 하나는, 앱에 있는 페이지들이 미리 렌더링 되는 것이다
이것은 정적으로 생성된다

3강
next에서는 a태그를 사용하지 않고 Link컴포넌트를 사용
`useRouter` 를 `next/router`에서 import 할 수 있다

4강
nextjs에서 css를 적용시키는 방법은 여러가지 이고, 영상에서는 modules라 불리는 방법을 사용

`파일명.module.css` 파일을 만들어서 연결시킨다(연결시킬 때는 자바스크립트 객체변수처럼 class를 선언한다 = 무작위 텍스트가 붙어서 충돌을 막는다)

5강
css를 적용하는 다른 방법에는 styled jsx가 있다

```jsx
<style jsx>{`
nav {
    background-color:tomato;
}
a {
    text-decoration :none;
}
`}</style>
```

이 jsx는 독립적으로 사용된다

props로 들어오는 값도 사용이 가능하다

6강
Next가 모든 페이지를 렌더링할 수 있게하는 파일은 App component 이고, 이를 커스터마이징하기위해 `_app` 파일을 만들 수 있다

`AppProps`를 import해서 컴포넌트와 props타입지정

7강
복습

## 2 : PRACTICE PROJECT
1강
custom app component라는 layout패턴을 자주 사용한다

children는 리액트가 제공하는 props이고, 하나의 컴포넌트를 다른 컴포넌트 안에 넣을 수 있다

3강
`next.confing.js` 파일에서 redirection, rewrites를 할 수 있다

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/old-blog/:path",
        destination:"/new-blog/:path",
        permanent:false
      },
    ];
  }
}

module.exports = nextConfig
```
위처럼 설정한다면 `/old-blog/:path` 에 접속하면 `/new-blog/:path` 에 접속하게 된다
redirection을 활용해 이와같은 역할을 할 수 있다

이번에는 rewrites를 사용해 아래처럼 API키를 숨긴다(env에 `process.env.API_KEY`저장)
```js
const API_KEY = "process.env.API_KEY"
.
.
.
async rewrites(){ 
    return [
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
```
`fetch`할 때는 `/api/movies`를 하면 된다

3강
아래의 함수는 서버에서 돌아간다, 즉 apikey를 요기에 숨길 수도 있다
```js
export async function getServerSideProps(){

}
```

5강
URL에 변수를 넣어서 글릭됨에 따라 넘어가도록 하기 = **Dynamic Routes**

`index` 라는 페이지를 만들고 싶다면 page에 index파일을 만든다

'nextJS에서 이 URL에는 변수가 필요하다는' 의미를 파일이름을 `[변수].tsx` 로 알려줄 수 있다

a태그를 글씨만 감싸도록 하도록 만들고, 이미지를 눌렀을 때 처리는 따로 `router hook`을 사용해 처리한다

```ts
const router = useRouter();
  const onClick = (id:number,title:string) => {
    router.push({
      pathname:`/movies/${id}`,
      query:{
        title
      }
    }, `/movies/${id}`)
  }
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie: IMovieProps) => (
        
          <a>
            <div className="movie" onClick={() => onClick(movie.id, movie.title)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <a>{movie.original_title}{" "}</a>
                </Link>
                </h4>
            </div>
          </a>
```

`as`옵션을 사용해 URL을 마스킹할 수 있다

위에서 `pathname...` 인 부분을 Link에서도 `href`로 아래와 같이 사용할 수 있다

7강
catch-all URL을 사용해서 URL을 무한대로 catch한다 = SEO에 좋게하기 위해 파일 명을 `...[id].tsx`로 해준다

8강
404만들어준다(page폴더에 404만들기)