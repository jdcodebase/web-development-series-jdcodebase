const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
let editId = null;

document.addEventListener("DOMContentLoaded", renderTodos());

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") return;

  const todos = getTodos();

  if (editId) {
    const todo = todos.find((todo) => todo.id === editId);

    if (!todo) return;

    todo.text = text;
    editId = null;

    form.querySelector(".add-update-btn").innerText = "Add";
  } else {
    todos.push({
      id: Date.now(),
      text,
    });
  }

  savedTodos(todos);
  input.value = "";

  renderTodos();
});

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function savedTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  getTodos().forEach(addToUI);
}

function addToUI(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";
  todoDiv.dataset.id = todo.id;

  const p = document.createElement("p");
  p.className = "todo-content";
  p.textContent = todo.text;

  const btns = document.createElement("div");
  btns.className = "btns";

  const editBtn = document.createElement("button");
  editBtn.className = "edit btn";
  editBtn.type = "button";
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete btn";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";

  btns.append(editBtn, deleteBtn);
  todoDiv.append(p, btns);
  todoList.appendChild(todoDiv);
}

todoList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("delete")) {
    const todoDiv = event.target.closest(".todo");
    const id = Number(todoDiv.dataset.id);

    deleteTodo(id);
  }

  if (event.target.classList.contains("edit")) {
    const todoDiv = event.target.closest(".todo");
    const id = Number(todoDiv.dataset.id);

    editTodo(id, todoDiv);
  }
});

function deleteTodo(id) {
  let todos = getTodos();
  todos = todos.filter((todo) => todo.id !== id);

  savedTodos(todos);
  renderTodos();
}

function editTodo(id, todoDiv) {
  const p = todoDiv.querySelector(".todo-content");

  input.value = p.textContent;
  editId = id;

  form.querySelector(".add-update-btn").innerText = "Update";
}
