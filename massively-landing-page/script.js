const menuButton = document.getElementsByClassName('nav-mb')[0];
const menuInterface = document.getElementsByClassName('nav-dt')[0];
const exitButton = document.getElementsByClassName('exit')[0];

menuInterface.style.display = 'none';

menuButton.addEventListener('click', () => {
    menuInterface.style.display = menuInterface.style.display === 'none' ? 'flex' : 'none';
});

exitButton.addEventListener('click', () => {
    menuInterface.style.display = 'none';
});