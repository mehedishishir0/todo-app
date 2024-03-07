let textBox = document.querySelector("#item");
let todoBox = document.querySelector("#todo-box");
let main = document.querySelector(".box");
let from = document.querySelector("#from")
from.addEventListener("submit", (event) => {
 event.preventDefault()
    todoChack();
});

function todoChack() {
  if (textBox.value === "") {
    alert("please write something");
  } else {
    todolist(textBox.value);
    textBox.value = "";
  }
}

function todolist(valu) {
  let listconten = document.createElement("ul");
  listconten.id = "todo-box";
  listconten.innerHTML = `
  <li id="color">${valu}
  <i class="hover fas fa-times"></i>
</li>
`;

  listconten.querySelector(".hover").addEventListener("click", () => {
    listconten.remove();
  });

  listconten.querySelector("li").addEventListener("mouseover", () => {
    let color = randomColor();
    listconten.style.backgroundColor = color;
  });

  listconten.querySelector("li").addEventListener("mouseout", () => {
    listconten.style.backgroundColor = "#636e72";
  });

  main.append(listconten);
}

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let totalColor = `#${red.toString(16)}${blue.toString(16)}${green.toString(
    16
  )}`;
  return totalColor;
}

document.querySelector("#save").addEventListener("click", () => {
  todoChack();
});
