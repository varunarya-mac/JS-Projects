

const filter = document.getElementById('filter');
const post = document.querySelector('.post');
const loader = document.querySelector('.loader');
let defaultPage=1;
const defaultLimit = 5;


async function getPostList(limit , page) {
    loader.classList.add('show');
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        );
    const data = await res.json();
    loader.classList.remove('show');
    return data;

}


function filterList() {
    const filterValue = filter.value.toUpperCase();

    const postInfo = document.querySelectorAll('.post__info'); 


    postInfo.forEach((info)=> {

        const title = info.querySelector('.post__heading').innerText.toUpperCase();
        const des = info.querySelector('.post__description').innerText.toUpperCase();


        if(title.includes(filterValue) || des.includes(filterValue)) {
            info.style.display = 'block';
        }
        else {
            info.style.display = 'none';
        }

    })

}


function updatePostList(postListArray) {

    postListArray.forEach((element, index ) => {

        const postInfo = document.createElement('div');
        postInfo.classList.add('post__info');

        const postNumber = document.createElement('div');
        postNumber.classList.add('post__number');
        postNumber.innerText = element.id;

    const postHeading =  document.createElement('h4');
    postHeading.classList.add('post__heading');
    postHeading.innerText = element.title;

    const description = document.createElement('p');
    description.classList.add('post__description');
    description.innerText = element.body;

    postInfo.appendChild(postNumber);
    postInfo.appendChild(postHeading);
    postInfo.appendChild(description);

     post.appendChild(postInfo);   
    });

}


filter.addEventListener('input', filterList)


//Infinite scrolling event
window.addEventListener('scroll', ()=> {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if(scrollTop+clientHeight >= scrollHeight-5) {
        defaultPage++;
        loadUI(defaultPage);
    }
    
});


function loadUI(page= defaultPage) {
getPostList(defaultLimit, page).then((output)=> {
        console.log(page);
        updatePostList(output);
});
}



loadUI();
