const synth = window.speechSynthesis;
const voicelist = document.getElementById("voicelist");
const gridContainer = document.querySelector(".grid");
const toggleBtn = document.getElementById('toggle');
const msgBox = document.querySelector('.message__box');
const msgBoxCancel = document.querySelector('.cancel__btn');
const customMsg = document.getElementById('message');
const readCustomMsg = document.getElementById('readBtn');
const defaultData = [
  {
    image: "./img/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/food.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/angry.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/outside.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/home.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/school.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/grandma.jpg",
    text: "I Want To Go To Grandmas",
  },
];

function initializeApp() {
  createBoxes();
}

function createBoxes() {
  defaultData.forEach((data) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
            <img src=${data.image} alt=${data.text}>
            <p>${data.text}</p>
        `;

    box.addEventListener('click', () => {
        setMessage(data.text);
    })    
    gridContainer.appendChild(box);
  });
}

const message = new SpeechSynthesisUtterance();


//set message text
function setMessage(text){
  message.text = text;
  speechSynthesis.speak(message);
} 
// // Speak text
// function speakText() {
//     speechSynthesis.speak(message);
// }

//Toggle button event
toggleBtn.addEventListener('click', ()=> {

  msgBox.classList.toggle('show');

})

msgBoxCancel.addEventListener('click', ()=> {
  msgBox.classList.remove('show');

})

voicelist.addEventListener('change', (event)=> {

  message.voice = voices.find(voice => voice.name === event.target.value )

})


readCustomMsg.addEventListener('click', ()=> {
  setMessage(customMsg.value);
});

let voices = [];
// wait on voices to be loaded before fetching list
window.speechSynthesis.onvoiceschanged = function () {
  
   voices = window.speechSynthesis.getVoices();
    voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} (${voice.lang})`;

    voicelist.appendChild(option);
  });
};

initializeApp();
