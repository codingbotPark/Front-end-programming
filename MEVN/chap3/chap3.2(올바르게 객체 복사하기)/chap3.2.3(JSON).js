const a = {
    "b" : 1,
    "c":{
        "d":2
    }
}

let b = JSON.parse(JSON.stringify(a))
b.c.d = 4
console.log(a)