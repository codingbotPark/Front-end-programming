// index.js 가 엔트리 파일이 된다

import hello_word from "./hello.js";
import world_word from "./world";
import css from "./style.css"
document.querySelector("#root").innerHTML = hello_word  
console.log("css",css)