const menuButton = document.getElementsByClassName('nav-mb')[0];
const menuInterface = document.getElementsByClassName('nav-dt')[0];
const exitButton = document.getElementsByClassName('exit')[0];
const articlesMain = document.getElementsByClassName('articles')[0];
import { getData } from './api.js';
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];
const POSTS = 6;
function getRandomNumber(limit, startFromZero = true) {
    if (startFromZero) {
        // Valor final + 1 e true se precisar contar a partir do zero.
        return Math.floor(Math.random() * limit);
    }
    else {
        // Valor final e false se precisar contar a partir do 1.
        return Math.floor(Math.random() * limit) + 1;
    }
}
async function generatePostContent() {
    getData()
        .then((result) => {
        let selectedPosts = [];
        for (let i = 0; i < POSTS; i++) {
            // Escolhe um numero aleatório para pegar um post aleatório.
            let randomPost = getRandomNumber(101, true);
            selectedPosts.push(result[randomPost]);
        }
        createPosts(selectedPosts);
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
function createPosts(selectedPosts) {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let monthName = MONTH_NAMES[month];
    let currentDate = `${year}-${month}-${day}`; // Para a propriedade de data do Html
    let currentDateText = `${monthName} ${day}, ${year}`; // Para o texto de data do Html
    for (let i = 0; i < POSTS; i++) {
        const articleCount = `post--${i + 1}`;
        const post = document.createElement('article');
        post.classList.add('post', 'post--dec', articleCount);
        articlesMain.appendChild(post);
        const postDate = document.createElement('time');
        postDate.dateTime = currentDate;
        postDate.textContent = currentDateText;
        postDate.classList.add('post__date', 'post__date--dec');
        post.appendChild(postDate);
        const postTitle = document.createElement('h3');
        postTitle.textContent = selectedPosts[i].title;
        postTitle.classList.add('post__title', 'post__title--dec');
        post.appendChild(postTitle);
        const randomIndex = getRandomNumber(6, false);
        const randomImg = `./assets/images/${randomIndex}.jpg`; //Imagem aleatória
        const postImg = document.createElement('img');
        postImg.src = randomImg;
        postImg.classList.add('post__img');
        post.appendChild(postImg);
        const postDesc = document.createElement('p');
        postDesc.textContent = selectedPosts[i].body;
        postDesc.classList.add('post__desc', 'post__desc--dec');
        post.appendChild(postDesc);
        const postButton = document.createElement('a');
        postButton.href = '#';
        postButton.textContent = 'FULL STORY';
        postButton.classList.add('post__button', 'post__button--dec');
        post.appendChild(postButton);
    }
}
generatePostContent();
menuButton.addEventListener('click', () => {
    menuInterface.style.display = 'none';
    menuInterface.style.display = menuInterface.style.display === 'none' ? 'flex' : 'none';
});
exitButton.addEventListener('click', () => {
    menuInterface.style.display = 'none';
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 1060) {
        menuInterface.style.display = 'none';
    }
    else {
        menuInterface.style.display = 'flex';
    }
});
