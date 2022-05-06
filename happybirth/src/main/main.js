const imgT = document.getElementById("firstImg");
const comment = document.getElementById("comment");

imgT.addEventListener("click",function(){
    // console.log("Gd")
    imgT.src = '../assets/나.png'
    comment.innerHTML = "선물은 나다!"
})
