const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const menuButton = document.getElementById('menu_button')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    console.log(menu.classList.contains("is-active"))
    if (menu.classList.contains('is-active') == true) {
        menuButton.value = "HIDE";
        menuButton.style.background = "white";
        menuButton.style.color = "#111B0C";
    } else {
        menuButton.value = "MENU";
        menuButton.style.background = "#111B0C";
        menuButton.style.color = "white";
    }
})
