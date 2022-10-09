const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let total
let rains = []
let drops = []

const randomBetween = (min, max) => {
    return Math.random() * (max - min + 1) + min
}

// 빗줄기 클래스
class Rain{
    constructor(x,y,velocity){
        this.x = x
        this.y = y
        this.velocity = velocity
    }

    draw(){
        const {x,y,velocity} = this
        ctx.beginPath() // 그리겠따
        ctx.moveTo(x,y) // 어디부터 움직이겠따
        ctx.lineTo(x + velocity.x * 2 ,y + velocity.y * 2) // 어디까지 움직이겠다
        ctx.strokeStyle = '#8899a6'
        ctx.lineWidth = 1.5
        ctx.stroke() // 그리겠다
    }

    splash(){
        for (let i = 0 ;i<3;i++){
            const velocity ={
                x: -this.velocity.x + randomBetween(-2,2),
                y:-this.velocity.y + randomBetween(-2,2)
            }
            drops.push(new Drop(this.x, innerHeight,velocity))
        }
    }

    animate(){
        if (this.y > innerHeight){
            this.splash()
            this.x = randomBetween(0,innerWidth)
            this.y = -20
        }

        this.x += this.velocity.x
        this.y += this.velocity.y

        this.draw()
    }
}

class Drop {
    constructor(x,y,velocity){
        this.x = x
        this.y = y
        this.velocity = velocity
        this.gravity = 1.5
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = '#8899a6'
        ctx.fill()
    }

    animate(){
        this.velocity.y += this.gravity
        this.x +=  this.velocity.x
        this.y += this.velocity.y

        this.draw()
    }
}

// 초기화 작업
function init(){
    canvas.width = innerWidth
    canvas.height = innerHeight

    total = Math.floor(innerWidth * innerHeight / 40000)
    rains = []
    drops = []

    for  (let i = 0;i<total; i++){
        const x = randomBetween(0, innerWidth)
        const y = randomBetween(0,innerHeight)

        const velocity = {
            x:randomBetween(-1, 1),
            y:randomBetween(13,18)
        }

        rains.push(new Rain(x,y,velocity))
    }
}

// 렌더 함수
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    rains.forEach(rain => rain.animate())
    drops.forEach((drop,i) => {
        drop.animate()
        if (drop.y > innerHeight) drops.splice(i,1)
    })

    // 매 프레임마다 지우고 그리고를 한다
    window.requestAnimationFrame(render)
}

// resize 이벤트 
window.addEventListener('resize',() => init())

init()
render()