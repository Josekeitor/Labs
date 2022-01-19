let post = $("#ButtonPost");
let clear = $("#ButtonClear");
let mark = $("#ButtonMark");
let del = $("#ButtonDelete");

function addTodo(e) {
    e.preventDefault();
    let postList = $("#listOfTodos");
    let text = $("#todoText");

    let newPost = $("<div>");
    let check = $("<input>");
    let label = $("<label>");
    check.attr("type", "checkbox");
    check.attr("name", "todo");
    label.text(text.val());

    newPost.append(check);
    newPost.append(label);
    postList.append(newPost);

    text.val("");
}

function markTodos() {
    let todos = $("[name=todo]");
    todos.each(markTodo);
}

function markTodo(indx, todo) {
    $(todo).prop("checked", true);
}

function clearTodos() {

    let todos = $("[name=todo]");
    todos.each(clearTodo);
}

function clearTodo(indx, todo) {
    $(todo).prop("checked", false);
}

function deleteTodos() {
    let todos = $("[name=todo]");
    todos.each(deleteTodo)
}

function deleteTodo(indx, todo) {
    if ($(todo).prop("checked")) {
        $(todo).parent().remove();
    }
}




post.on("click", addTodo);
clear.on("click", clearTodos);
mark.on("click", markTodos);
del.on("click", deleteTodos);

