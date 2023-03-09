const menuButton = document.getElementsByClassName('nav-mb')[0];
const menuInterface = document.getElementsByClassName('nav-dt')[0];
const exitButton = document.getElementsByClassName('exit')[0];


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