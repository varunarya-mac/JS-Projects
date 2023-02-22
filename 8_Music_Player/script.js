const container = document.querySelector(".music_container");
const songname = document.getElementById("songname");
const progress = document.getElementById("progress");

const image = document.getElementById("icon");
const forwardBtn = document.getElementById("forward");
const playBtn = document.getElementById("play");
const playBtnIcon = document.querySelector(".fa-play");
const backwardBtn = document.getElementById("backward");

const audio = document.getElementById("musicplayer");
const songs = ["hey", "summer", "ukulele"];
let index = 0;

const playSong = () => {
  songname.innerText= `${songs[index]}`;
  image.setAttribute('src', `Images/${songs[index]}.jpg`)
  audio.setAttribute("src", `Songs/${songs[index]}.mp3`);
  audio.play();
};

const forwardBtnPressed = () => {
  audio.pause();
  if (index === songs.length - 1) index = 0;
  else index++;

  
  if (!container.classList.contains("play")) {
    playBtnIcon.classList.add("fa-pause");
    playBtnIcon.classList.remove("fa-play");
    container.classList.add("play");
  } 
  playSong();
};

const backwardBtnPressed = () => {
  audio.pause();
  if (index === 0) index = songs.length - 1;
  else index--;

  if (!container.classList.contains("play")) {
    playBtnIcon.classList.add("fa-pause");
    playBtnIcon.classList.remove("fa-play");
    container.classList.add("play");
  } 
  playSong();
};

const updateUI = () => {
  if (container.classList.contains("play")) {
    audio.pause();
    playBtnIcon.classList.add("fa-play");
    playBtnIcon.classList.remove("fa-pause");
    container.classList.remove("play");
  } else {
    playBtnIcon.classList.add("fa-pause");
    playBtnIcon.classList.remove("fa-play");
    container.classList.add("play");
    playSong();
  }
};

function updateProgressBar(event) {
    const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.value = Math.floor(progressPercent);
}

progress.addEventListener('click', (e)=> {
    var value_clicked = e.offsetX * e.target.max / e.target.offsetWidth;
    
    audio.currentTime = +(value_clicked * audio.duration) / 100;
})

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', forwardBtnPressed);

playBtn.addEventListener("click", updateUI);
forwardBtn.addEventListener("click", forwardBtnPressed);
backwardBtn.addEventListener("click", backwardBtnPressed);
