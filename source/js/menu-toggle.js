let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', function() {
  if (menu.classList.contains('menu__toggle--closed')) {
    menu.classList.remove('menu__toggle--closed');
    menu.classList.add('menu__toggle--opened');
  } else {
    menu.classList.add('menu__toggle--closed');
    menu.classList.remove('menu__toggle--opened');
  }
});
