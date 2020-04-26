let menuColor = document.querySelector('.page-header__menu');
let toggle = document.querySelector('.menu__toggle');

toggle.addEventListener('click', function() {
  if (menuColor.classList.contains('page-header__menu--opened')) {
    menuColor.classList.add('page-header__menu--closed');
    menuColor.classList.remove('page-header__menu--opened');
  } else {
    menuColor.classList.remove('page-header__menu--closed');
    menuColor.classList.add('page-header__menu--opened');
  }
});
