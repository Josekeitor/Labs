let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")

function addTodo(e) {
    e.preventDefault()
    let postList = document.getElementById("listOfTodos")
    let text = document.getElementById("todoText")

    let newPost = document.createElement("div")
    let check = document.createElement("input")
    let label = document.createElement("label")
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "todo")

    label.innerText = text.value

    newPost.appendChild(check)
    newPost.appendChild(label)
    postList.appendChild(newPost)

    text.value = ""
}

function markTodos() {
    let todos = document.getElementsByName("todo")
    todos.forEach(markTodo)
}
function markTodo(todo) {
    todo.checked = true
}

function clearTodos() {
    let todos = document.getElementsByName("todo")
    todos.forEach(clearTodo)
}

function clearTodo(todo) {
    todo.checked = false
}

function deleteTodos() {
    let todos = document.getElementsByName("todo")
    todos.forEach(deleteTodo)
}

function deleteTodo(todo) {
    if (todo.checked) {
        todo.parentElement.remove()
    }
}




post.addEventListener("click", addTodo)
clear.addEventListener("click", clearTodos)
mark.addEventListener("click", markTodos)
del.addEventListener("click", deleteTodos)
