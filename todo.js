const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"

function paintToDo(text){
    const ul = document.createElement("ul");;
    const delBtn = document.createElement("button");
    delBtn.value = "X"
    const span = document.createElement("span");
    span.innerText = text
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem()
    if (toDos !== null){

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();