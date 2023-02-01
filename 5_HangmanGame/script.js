const word = document.getElementById("word");
const wrongUI = document.getElementById("wrongletter");

const body = document.querySelectorAll(".body");
const popup = document.querySelector(".popupcontainer");
const popupMsg = document.querySelector(".popupmsg");
const playAgainBtn = document.getElementById('play');
const notification = document.querySelector(".notification");

const wordsArr = ["Apple", "India", "wrong", "test"];

let containLetters = [];
const wrongLetterArr = [];

let selectedWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

function displayWord() {
  word.innerHTML = selectedWord
    .split("")
    .map((l) => {
      return `<span class='letter'>
            ${containLetters.includes(l) ? l : ""}
        </span>`;
    })
    .join("");

  const finalWord = word.innerText.replace(/\n/g, "");
  if (finalWord === selectedWord) {
    popupMsg.innerText = "Congratulation! you won!";
    popup.style.display = "flex";
  }
}

function updateWrongLettersUI() {
  wrongUI.innerHTML = `
    ${(wrongLetterArr.length > 0) ? '<p>Wrong letters</p>': ''}
    ${wrongLetterArr.length > 0 ? `<span> ${wrongLetterArr} </span>` : ''}`;

    body.forEach((bodyPart, index) => {
      if (index < wrongLetterArr.length) {
        bodyPart.style.display = "block";
      } else {
        bodyPart.style.display = "none";
      }

      if (wrongLetterArr.length === body.length) {
        popupMsg.innerText = "You lost the game!";
        popup.style.display = "flex";
      }
    });
  
}

function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

//listen keydown events
window.addEventListener("keypress", (event) => {
  if (
    (event.key >= "a" && event.key <= "z") ||
    (event.key >= "A" && event.key <= "Z")
  ) {
    if (selectedWord.includes(event.key)) {
      if (!containLetters.includes(event.key)) {
        containLetters.push(event.key);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetterArr.includes(event.key)) {
        wrongLetterArr.push(event.key);
        updateWrongLettersUI();
      } else {
        showNotification();
      }
    }
  }
});


playAgainBtn.addEventListener('click', ()=> {
    wrongLetterArr.splice(0);
    containLetters.splice(0);
    selectedWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    displayWord();
    updateWrongLettersUI();
    popupMsg.innerText = "";
    popup.style.display = "none";
    
})


displayWord();
