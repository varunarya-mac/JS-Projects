// Polyfills for Debounce


const debounce = (cb, waitTime) => {
    let timer;
    // If any arguments wants to pass in function
    return function (...args) {

        if( timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb();
        }, waitTime);
    }
}


// e.g.


const btn = document.querySelector('.btn');
const pressCount = document.getElementById('presscount');
const triggerCount = document.getElementById('trigercount');
let count = 0;
let tgrCount = 0;
btn.addEventListener('click', ()=> {
    count++;
    pressCount.innerText= count;
    increaseTrigger();
});

const increaseTrigger =  debounce(()=>{
    tgrCount++;
    triggerCount.innerText= tgrCount;
}, 800);

