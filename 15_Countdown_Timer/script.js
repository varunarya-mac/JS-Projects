( function () {
    const startBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");

const hour = document.getElementById("hourinput");
const mintue = document.getElementById("mininput");
const sec = document.getElementById("secinput");

let hourValue = 0;
let minValue = 0;
let secValue = 0;
let intervalId = undefined;

function setTimerValues() {
  if (secValue > 60) {
    minValue += Math.floor(secValue / 60);
    secValue = Math.floor(secValue % 60);
  }

  if (minValue > 60) {
    hourValue += Math.floor(minValue / 60);
    minValue = Math.floor(minValue % 60);
  }

  hour.value =  formattedValue(hourValue);
  mintue.value = formattedValue(minValue);
  sec.value = formattedValue(secValue);
}

function updateBtnState(value) {
  if (value === "start") {
    startBtn.innerText = "Pause";
    startBtn.classList.add("btn--pause");
    startBtn.classList.remove("btn--start");
  } else {
    clearInterval(intervalId);
    intervalId = undefined;
    startBtn.innerText = "Start";
    startBtn.classList.remove("btn--pause");
    startBtn.classList.add("btn--start");
  }
}

function formattedValue(value){
    return (value<10 ? `0${value}`:value);

}

function startTimer() {

   if(hourValue===0 && minValue===0 && secValue===0){
    alert('set timer value');
    return;
   } 

  if (intervalId) {
    updateBtnState("pause");
  } else {
    updateBtnState("start");
    intervalId = setInterval(() => {
      if (secValue > 0) {
        secValue--;
        sec.value  = formattedValue(secValue);
      } else if (minValue > 0) {
        minValue--;
        secValue = 60;
        sec.value = secValue;
        mintue.value = formattedValue(minValue);
      } else if (hourValue > 0) {
        hourValue--;
        minValue = 59;
        secValue = 60;
        sec.value = secValue;
        mintue.value = minValue;
        hour.value = formattedValue(hourValue);
      }
    }, 1000);
  }
}

function resetTimer() {
  updateBtnState("pause");

  hourValue = 0;
  minValue = 0;
  secValue = 0;
  sec.value = formattedValue(secValue);
  mintue.value = formattedValue(minValue);
  hour.value = formattedValue(hourValue);
}

hour.addEventListener("change", (e) => {
  console.log(e.target.value);
  hourValue = +e.target.value;
  hour.value = hourValue;
});
mintue.addEventListener("change", (e) => {
  // console.log(e.target.value);

  minValue = +e.target.value;
  setTimerValues();
  mintue.value = minValue;
  // console.log(hourValue,minValue,secValue);
});
sec.addEventListener("change", (e) => {
  // console.log(e.target.value);
  secValue = +e.target.value;
  setTimerValues();
  // console.log(hourValue,minValue,secValue);
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

})();

