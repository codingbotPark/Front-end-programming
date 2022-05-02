

function calculate(command,a,b){
    console.log(calObj[command](a,b))
}

calObj = {
    add : (a,b) => a+b,
    substract : (a,b) => a-b,
    divide : (a,b) => a/b,
    multiply : (a,b) => a*b,
    remainder : (a,b) => a%b
}

calculate("add",1,2)

