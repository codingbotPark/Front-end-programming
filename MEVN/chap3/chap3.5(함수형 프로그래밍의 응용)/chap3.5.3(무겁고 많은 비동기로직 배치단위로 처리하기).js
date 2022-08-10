// // capture-website모듈 활용
// // 좋지 않은 코드
// // 동기적으로 이루어진다
// // 그렇다고 Promise.all에 담아도 200개의 리스트가 넘어서 브라우저 메모리 초과 에러이다
// import captureWebsite from "capture-website";
// const process = (url,filename) => captureWebsite.file(url,filename,{
//     fullPage:true
// })

// async function main(){
//     const from = 1434;
//     const to =1492;
//     for(let i=from;i < to; i++){
//         for (const e of ["A","B","C","D"]){
//             const url = `https://codeforces.com/contest/${i}/problem/${e}`
//             await process(url, `./img/s${i}${e}.png`)
//         }
//     }
//     console.log("스크래핑이 완료되었씁니다")
// }

// main()

// 비용이 크고 개수가 많은 비동기 로직은 배치단위로 처리해야 한다
// fxjs를 사용한다
import * as L from "fxjs/Lazy"
import * as C from "fxjs/Concurrency"
import {go} from "fxjs"
import captureWebsite from 'capture-website'

const BATCH = 5;
const process = ([url, filename]) => captureWebsite.file(
    url,filename,{
        fullPage:true
})

async function main(){
    const list = []
    const from = 1442;
    const to = 1492;

    for (let i=from;i<to;i++){
        for (let e of ["A","B","C","D"]){
            const url = `https://codeforces.com/contest/${i}/problem/${e}`
            list.push([url, `./img/${i}${e}.png`])
        }
    }

    await go(
        list,
        L.map(process),
        C.takeAll(BATCH)
    )

    console.log("스크래핑 완료")
    return ret
}

main()
