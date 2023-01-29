const nav = document.querySelector('#sidenav');
const navBtn = document.querySelector('.btn-toggle');
const signupBtn = document.getElementById('signup');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

navBtn.addEventListener('click', ()=> {
    nav.classList.toggle('shownav');
})

signupBtn.addEventListener('click', ()=> {
    modal.classList.add('showmodal');
});

close.addEventListener('click', ()=> {
    modal.classList.remove('showmodal');
});


window.addEventListener('click', event => {
    event.target == modal ? modal.classList.remove('showmodal') : false;
})
