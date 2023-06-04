//Debounce and Throttling

// Q1) create a button UI and debounce in it.
// --> show button pressed <X> times, every time button is pressed
// --> Increase "Trigger <Y> times" count after 800 ms of debouncing.


const btn = document.querySelector('.btn');
const pressCount = document.getElementById('presscount');
const triggerCount = document.getElementById('trigercount');
let count = 0;
let tgrCount = 0;
// btn.addEventListener('click', ()=> {
//     count++;
//     pressCount.innerText= count;
//     increaseTrigger();
// });

// const increaseTrigger =  _.debounce(()=>{
//     tgrCount++;
//     console.log('-------11111-------');
//     triggerCount.innerText= tgrCount;
// }, 800);


// Q2) create a button UI and debounce in it.
// --> show button pressed <X> times, every time button is pressed
// --> Increase "Trigger <Y> times" count after 800 ms of throttling.

const btn1 = document.querySelector('.btn');
const pressCount1 = document.getElementById('presscount');
const triggerCount1 = document.getElementById('trigercount');
let count1 = 0;
let tgrCount1 = 0;
btn.addEventListener('click', ()=> {
    count1++;
    pressCount.innerText= count1;
    increaseTrigger1();
});

const increaseTrigger1 =  _.throttle(()=>{
    tgrCount1++;
    console.log('-------11111-------');
    triggerCount.innerText= tgrCount1;
}, 800);