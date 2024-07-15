function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const iconMenu = document.getElementById('iconMenu');
    const iconClose = document.getElementById('iconClose');

    if (menu.classList.contains('active')) {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'inline';
    } else {
        iconMenu.style.display = 'inline';
        iconClose.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#menu a');
    for (const link of links) {
        link.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            menu.classList.remove('active');

            const iconMenu = document.getElementById('iconMenu');
            const iconClose = document.getElementById('iconClose');
            iconMenu.style.display = 'inline';
            iconClose.style.display = 'none';
        });
    }
});





