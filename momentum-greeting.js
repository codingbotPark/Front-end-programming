const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

//이름을 저장
function saveName(text) {
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue); 
    saveName(currentValue);
}

function askForName() {//유저의 이름을 묻기
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null){//유저가 없는 경우
        askForName();    
    } else {//유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();