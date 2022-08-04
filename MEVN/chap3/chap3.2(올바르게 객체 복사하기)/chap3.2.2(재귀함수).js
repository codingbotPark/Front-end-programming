const copy = o => {
    let out = {}
    let value,key
    for(key in o){
        value = o[key]
        out[key] = (typeof value === "object" && value != null)? copy(value) : value
    }
    return out
}

const a = {
    "b":1,
    "c":{
        "d":2
    }
}

let b = copy(a)
b.c.d = 4
console.log(a)