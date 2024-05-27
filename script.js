const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu_link');
const iconClose = document.querySelector('.close_icon');
const menuItems = document.querySelectorAll('.menu_item');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});


menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// changement du background

function scrollHeader(){
     const header = document.getElementById('header');
     this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* HERO type effect */
const typed = document.querySelector('.typed')

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}