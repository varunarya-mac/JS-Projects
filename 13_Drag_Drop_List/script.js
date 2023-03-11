const draggableItem = document.getElementById("draggableitem");
const draggableList = document.getElementById("draglist");
const checkListBtn = document.getElementsByTagName("button")[0];

const top10List = [
  "Mukesh Ambani",
  "Gautam Adani",
  "Shiv Nadar",
  "Cyrus Poonawalla",
  "Radhakishan Damani",
  "Lakshmi Mittal",
  "Kumar Birla",
  "Dilip Shangvi",
  "Varun Arya",
  "Niharika Grover",
];

let elementsUI = [...top10List];
let startIndex = -1;
let endIndex = -1;

function createList() {
  draggableList.innerHTML = "";
  elementsUI.map((object, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-index", index);
    listItem.innerHTML = `
         <div class="number" id="number">${index + 1}</div>
         <div class="draggable-item" id="draggable-item" draggable="true">
             <p class="name" id="item__name">${object}</p>
             <i class="fa fa-bars"></i>
         </div>
         `;

    listItem.addEventListener("dragstart", handleDragStartEvent);
    listItem.addEventListener("dragenter", handleDragEnterEvent);
    listItem.addEventListener("dragleave", handleDragLeaveEvent);
    listItem.addEventListener("dragover", handleDragOverEvent);
    listItem.addEventListener("drop", handleDropEvent);

    draggableList.appendChild(listItem);
  });
}

createList();

function handleDragStartEvent() {
  startIndex = +this.getAttribute("data-index");
}

function handleDragEnterEvent() {
    this.classList.add('over');
}

function handleDragLeaveEvent() {

    this.classList.remove('over');
}

function handleDropEvent(item) {
  endIndex = +this.getAttribute("data-index");

  swapValues();
  createList();
}

function handleDragOverEvent(event) {
  event.preventDefault();
}

function swapValues() {
  [elementsUI[startIndex], elementsUI[endIndex]] = [
    elementsUI[endIndex],
    elementsUI[startIndex],
  ];
}

checkListBtn.addEventListener("click", () => {
  [...draggableList.children].forEach((child, index) => {
    const el = child.querySelector(".draggable-item");
    const name = child.querySelector(".name").innerText;
    if (name && name == top10List[index]) {
      el.classList.add("correct");
    } else el.classList.add("wrong");
  });
});
