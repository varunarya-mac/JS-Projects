const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const time = document.getElementById('timestamp');

function toggleVideoState() {
    if(video.paused)
    video.play();
    else 
    video.pause();
    updateIcon();
}

function updateIcon() {
    if(video.paused) {
       playBtn.innerHTML = '<i class="fa-play fa-2x fa-solid"></i>'; 
    }
    else { 
    playBtn.innerHTML = '<i class="fa-pause fa-2x fa-solid"></i>'; 
    }
}

function updateProgressBar() {

    progress.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if (minutes<10) minutes = '0' + minutes;
    
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds<10) seconds = '0' + seconds;
    time.innerText = `${minutes}:${seconds}`; 
    
}


function setCurrentTime() {
    video.currentTime = +(progress.value * video.duration) / 100;
}

video.addEventListener('click', toggleVideoState);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgressBar);

stopBtn.addEventListener('click', e => {
    video.pause();
    video.currentTime = 0; 
})
playBtn.addEventListener('click', toggleVideoState); 

progress.addEventListener('change', setCurrentTime);
