const add = document.getElementById("addcard");
const cardContainer = document.querySelector(".card__container");

const left = document.querySelector(".left_arrow");
const right = document.querySelector(".right_arrow");

const cardsEl = [];
const cards = [
  {
    Q: "Question 1",
    A: "Answer 1",
  },
  {
    Q: "Question 2",
    A: "Answer 2",
  },
  {
    Q: "Question 3",
    A: "Answer 3",
  },
];


let activeCardIndex = 0;

loadCard();

function loadCard() {

  cards.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardFront = document.createElement("div");
    cardFront.innerText = data.Q;
    cardFront.classList.add("card__front");
  
    const cardback = document.createElement("div");
    cardback.innerText = data.A;
    cardback.classList.add("card__back");
  
    card.appendChild(cardFront);
    card.appendChild(cardback);
  
    if(index === 0) card.classList.add('active');

    cardsEl.push(card);
    cardContainer.appendChild(card);
  });

 

}

add.addEventListener("click", () => {
  cardsEl[activeCardIndex].classList.toggle("flip");
});

left.addEventListener("click", () => {
  cardsEl[activeCardIndex].className = "card left";

  if (activeCardIndex === 0) {
    activeCardIndex = 0;
  } else {
    activeCardIndex--;
  }
  // loadCard();

  cardsEl[activeCardIndex].className = 'card active';  

});

right.addEventListener("click", () => {
  cardsEl[activeCardIndex].className = "card right";

  if (activeCardIndex === cards.length - 1) {
    activeCardIndex = cards.length - 1;
  } else {
    activeCardIndex++;
  }
  // loadCard();
  cardsEl[activeCardIndex].className = 'card active';  

});
