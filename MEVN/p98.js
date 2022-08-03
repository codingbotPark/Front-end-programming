// https://grafolio.naver.com/category/painting#category_popular_creator
// 그라폴리오 라는 웹사이트에서 크롤링을 한다,
// 크롤링에는 웹드라이버를 통해 사용자가 마우스를 누르듯이 하는 방법, 서버에 요청을 보내는 방법으로 크게 두 가지가 있다
// 그라폴리오에서는 무한스크롤이 설정되어 있어 그냥 서버에 요청을 보내는 방식으로는 무리가 있다
// 그래서 웹 드라이버를 활용해 크롤링을 한다

const Nightmare = require('nightmare')
const vo = require('vo')
const nightmare = Nightmare({
    show:true
})

const BASE_URL = `https://grafolio.naver.com/category/painting`
const GRAPOLIO_URL = `${BASE_URL}#category_popular_creator`

// 제너레이터
function *run(){
    // 그라폴리오 url로 접속해 스크롤 하는 부분, 무한 스크롤이 되어 있기 때문
    yield nightmare.goto(GRAPOLIO_URL)
    let prevHeight, currHeight = 0
    while (prevHeight !== currHeight){
        prevHeight = currHeight
        currHeight = yield nightmare.evaluate(() => document.body.scrollHeight)
        yield nightmare.scrollTo(currHeight,0),wait(3000)
    }

    // a태그를 가지고 thumb클래스를 가진 DOM선택 후, href요소들을 가져와 .map으로 다른 문자열을 가진 배열로 만든다
    const a = yield nightmare
    .evaluate(() => Array.from(document.querySelectorAll('a.thumb')))
    .map(e => (`https://grafolio.naver.com${e.getAttribute('href')}`))
    console.log(a)
    yield nightmare.end()
}

// vo로 비동기적인 로직을 파이프라인에 적용
vo(run)(() => console.log('스크래핑이 완료되었습니다'))
