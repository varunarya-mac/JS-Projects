const total = document.getElementById("totalamount");
const incomeTotal = document.getElementById("income");
const expenseTotal = document.getElementById("expense");
const textField = document.getElementById("text");
const amountField = document.getElementById("amount");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit");
const list = document.querySelector(".list");

let totalBlance = 0;
let incomeBlance = 0;
let expenseBlance = 0;
const localStorageData = localStorage.getItem('transactions');
let historyArr = localStorageData ? JSON.parse(localStorageData) : [];
init();
function updateUIWithNewValue() {
  const totalBlance = historyArr
    .map((item) => item.amount)
    .reduce((acc, value) => acc + value, 0);

  total.innerText =
    totalBlance >= 0 ? `£${totalBlance}` : `-£${totalBlance * -1}`;

  incomeBlance = historyArr
    .filter((item) => item.amount >= 0)
    .reduce((acc, item) => acc + item.amount, 0);
  incomeTotal.innerText = `£${incomeBlance}`;

  expenseBlance = historyArr
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);
  expenseTotal.innerText = `-£${expenseBlance * -1}`;
}

function updateHistory() {
  list.innerHTML = "";
  historyArr.forEach((item) => {
    const listItem = document.createElement("li");

    item.amount > 0
      ? listItem.classList.add("list-item", "inc")
      : listItem.classList.add("list-item", "exp");

    listItem.innerHTML = `<span>${item.text}</span> <span>£${Math.abs(
      item.amount
    )}</span>
      <button type="button" class="btn deleteBtn" onclick="deleteTransaction(${
        item.id
      })" >X</button>`;
    list.appendChild(listItem);
  });
}

function deleteTransaction(id) {
  historyArr = historyArr.filter((item) => item.id != id);
  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(historyArr));
}

function init() {
  
  updateUIWithNewValue();
  updateHistory();
}

function randomNum(){
    return Math.floor(Math.random()*1000000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = textField.value;
  const amount = +amountField.value;

  if (text && amount) {
    const obj = { id: randomNum(), text: text, amount: amount };
    historyArr.push(obj);
    updateLocalStorage();
    init();
    textField.value = '';
    amountField.value = '';

  }
});
