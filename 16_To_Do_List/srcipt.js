const textArea = document.getElementById("textarea");
const addBtn = document.getElementById("submit");
const list = document.getElementById("list");

let listArray = [];

initialiseApp();

function initialiseApp() {
  const itemList = localStorage.getItem("todolist");
  if (itemList) {
    listArray = JSON.parse(itemList);
    updateList();
  }
}

addBtn.addEventListener("click", () => {
  listArray.push({ id: Date.now(), value: textArea.value });
  textArea.value = "";
  updateList();
  updateStorage();
});

function updateStorage() {
  localStorage.setItem("todolist", JSON.stringify(listArray));
}

function deleteItem(event) {
  const id = event.target.getAttribute("data-index");
  const index = listArray.findIndex((item) => item.id == id);
  if (index >= 0) {
    listArray.splice(index, 1);
    updateList();
    updateStorage();
  }
}

function updateList() {
  list.innerHTML = "";
  for (let obj of listArray) {
    const listitem = document.createElement("li");
    listitem.classList.add("listitem");
    const text = document.createElement("p");
    text.innerText = obj.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_item");
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute("data-index", obj.id);
    deleteBtn.addEventListener("click", deleteItem);
    listitem.appendChild(text);
    listitem.appendChild(deleteBtn);

    list.appendChild(listitem);
  }
}
