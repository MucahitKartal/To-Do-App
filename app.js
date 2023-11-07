const addButton = document.getElementById("add");
const input = document.querySelector("#input");
const day = document.querySelector(".day");
const ul = document.querySelector("ul");

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.textContent = dayNames[new Date().getDay()];

window.addEventListener("load", () => {
  ul.innerHTML = localStorage.getItem("todo");
});
addButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("Enter a To-Do");
  } else {
    //? Todo lar eklenince oluşacak elemanlar
    const li = document.createElement("li");
    const p = document.createElement("p");
    const task = document.createElement("span");
    const deleteButton = document.createElement("button");

    //? Todo lar
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(task);
    li.appendChild(deleteButton);

    const text = document.createTextNode(input.value);
    const x = document.createTextNode("X");

    p.classList.add("circle");
    li.classList.add("li");
    task.classList.add("task");
    deleteButton.classList.add("delete");
    //! 1.yol
    // task.appendChild(text)
    // deleteButton.appendChild(x)
    //? Task icin span ve button olusturma 2.yol
    task.innerText = input.value;
    deleteButton.textContent = "x";
    input.value = "";
  }

  localStorage.setItem("todo", ul.innerHTML);
  input.focus();
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("circle")) {
    e.target.classList.toggle("pchecked");
    e.target
      .closest("li")
      .querySelector("span")
      .classList.toggle("span-checked");
  } else if (e.target.classList.contains("li")) {
    e.target.querySelector("p").classList.toggle("pchecked");
    e.target.querySelector("span").classList.toggle("span-checked");
  } else if (e.target.classList.contains("task")) {
    e.target.classList.toggle("span-checked");
    e.target.previousElementSibling.classList.toggle("pchecked");
  }
  localStorage.setItem("todo", ul.innerHTML);
});
