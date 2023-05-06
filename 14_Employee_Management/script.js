(async function () {
  const addBtn = document.getElementById("addbtn");
  const submitBtn = document.getElementById("submitbtn");
  const form = document.querySelector(".formcontainer");
  const formValues = document.querySelector(".form");
  const list = document.getElementById("list");
  const icon = document.getElementById("icon");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const mobile = document.getElementById("mobile");
  const dob = document.getElementById("dob");
  let listArr = [];

  let selectedIndex = 0;

  async function init() {
    const result = await fetch("./data.json");
    listArr = await result.json();
    updateList();
    showDetail();
  }

  function updateList() {
    list.innerHTML = "";
    listArr.forEach((item) => {
      const element = document.createElement("div");
      element.classList.add("list__item");
      element.setAttribute("id", item.id);
      const name = `${item.firstName} ${item.lastName}`;
      element.innerHTML = `${name} <i class='removeBtn'>❌</i>`;
      list.append(element);
    });
  }

  function showDetail() {
    if (listArr.length === 0) {
      icon.setAttribute("src", "");

      username.innerText = "";
      email.innerText = "";
      mobile.innerText = "";
      dob.innerText = "";
      return;
    }
    const user = listArr[selectedIndex];

    icon.setAttribute("src", user.imageUrl);
    const name = `${user.firstName} ${user.lastName} (${user.age})`;
    username.innerText = name;
    email.innerText = user.email;
    mobile.innerText = user.contactNumber;
    dob.innerText = user.dob;
  }

  addBtn.addEventListener("click", () => {
    form.classList.add("show");
  });

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV" && selectedIndex != event.target.id) {
      selectedIndex = listArr.findIndex((item) => item.id == event.target.id);
      showDetail();
    } else if (event.target.tagName === "I") {
      console.log(event.target.parentNode.id);
      listArr = listArr.filter((item) => item.id != event.target.parentNode.id);
      console.log(listArr.length);
      updateList();
      selectedIndex = 0;
      showDetail();
    }
  });

  formValues.addEventListener("submit", (e) => {
    e.preventDefault();

    form.classList.remove("show");
    const formData = new FormData(formValues);
    const values = [...formData.entries()];

    const obj = {};
    obj.id = Math.floor(Math.random() * 100000) + 1;
    obj.firstName = values[0][1];
    obj.lastName = values[1][1];
    obj.email = values[4][1];
    obj.contactNumber = values[3][1];
    obj.imageUrl = "https://cdn-icons-png.flaticon.com/512/0/93.png";
    obj.age = values[2][1];
    obj.dob = values[3][1];
    obj.salary = 10;
    obj.address = "Address10";
    listArr.push(obj);
    updateList();
  });
  init();
})();
