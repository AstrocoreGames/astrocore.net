function CreateTodo() {
  let Todo = document.createElement("div");
  Todo.class = "TodoDiv";
  let Txt = document.createElement("p");
  Txt.innerHTML = document.getElementById("txt").value;
  Todo.appendChild(Txt);
  let Button = document.createElement("button");
  Button.innerHTML = "Delete";
  Button.onclick = function () {
    Todo.parentNode.removeChild(Todo);
  };
  Button.class = "TodoButton";
  Todo.appendChild(Button);
  document.getElementById("List").appendChild(Todo);
}
