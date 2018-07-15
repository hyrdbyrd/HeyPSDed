document.querySelector('.burger-menu-container').addEventListener('click', e => {
    document.querySelector('.screen-navigation').classList.toggle('active_screen');
    document.querySelector('.burger-menu').classList.toggle('menu_active');
})