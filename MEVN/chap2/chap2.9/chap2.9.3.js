// 모듈화만이 중요한 것이 아닌, 느슨한 결합 또한 중요하다

const cook = {
    create:recipe => recipe.start()
}

const pasta = {
    start:() => console.log("파스타 요리가 시작됩니다")
}

const steak = {
    start: () => console.log("스테이크 요리가 시작됩니다")
}

cook.create(pasta)
cook.create(steak)

// cook이 메뉴를 받아 그저 실행하는 공간이 되게 하는 것처럼 만들어야 한다