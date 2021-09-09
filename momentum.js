const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// 현재시간을 가져오는 함수
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();  
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //이 정보들을 HTML에 0으로 했던 시계에 넣어야 한다
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
    //숫자가 한자리 일 때 0을 넣어주는 코드
} 

function init () {
    getTime(); 
    setInterval(getTime,1000);
    //1초마다 getTime함수를 실행시킨다
}

init();