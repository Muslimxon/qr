document.addEventListener('DOMContentLoaded', () => {
    const mainMenuButton = document.getElementById('main-menu');
    const barButton = document.getElementById('bar');
    const mainMenuContent = document.querySelector('.main-menu-content');
    const barContent = document.querySelector('.bar-content');

    function showMainMenu() {
        mainMenuButton.classList.add('active');
        barButton.classList.remove('active');
        mainMenuContent.classList.add('active');
        barContent.classList.remove('active');
    }

    function showBar() {
        barButton.classList.add('active');
        mainMenuButton.classList.remove('active');
        barContent.classList.add('active');
        mainMenuContent.classList.remove('active');
    }

    mainMenuButton.addEventListener('click', showMainMenu);
    barButton.addEventListener('click', showBar);

    // Initialize content visibility
    showMainMenu();
});

// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });