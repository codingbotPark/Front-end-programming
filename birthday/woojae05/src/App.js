import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';


import test from "./images/test.jpg";

// https://velog.io/@yujuck/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81

function App() {

  const [pages,setPages] = useState([
    {
      id:0,
      comment:"테스트입니다",
      img:test,
    },{
      id:1,
      comment:"테스트입니다",
      img:test,
    },{
      id:2,
      comment:"테스트입니다",
      img:test,
    },
  ])

  const [screenHeight,setScreenHeight] = useState(window.innerHeight)
  const [previousLocation,setPreviousLocation] = useState(0)

  // 스로틀링 한지 안 한지
  const [throttle,setThrottle] = useState(false);
  
  // --------

  // 스로틀링
  let trigger = true
  function handleScroll(){
    //실행시킬 수 있을 때
    if (trigger) {
      trigger = false
      console.log("함수실행")
      // 1초 동안 함수 실행 못하게 하기
      setTimeout(() => {
        trigger = true
      },1000) // 1초마다 실행 ㄱㄴ
    }
  }

  // --------

  // 기본적인 스로틀링의 state값은 false
  useEffect(() => {

  },)

  // useEffect로 

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  return (
    <div className="App"
    >
      {
        pages.map((page) => (
          <div className='container'key={page.id}>
            <h1 className='comment'>{page.comment}</h1>
            <img src={page.img} className="img"/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
