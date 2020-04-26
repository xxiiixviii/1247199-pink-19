let bg = document.querySelector('.page-header');
let openedToggle = document.querySelector('.menu__toggle');

openedToggle.addEventListener('click', function() {
  if (bg.classList.contains('page-header--opened')) {
    bg.classList.add('page-header--closed');
    bg.classList.remove('page-header--opened');
  } else {
    bg.classList.remove('page-header--closed');
    bg.classList.add('page-header--opened');
  }
});
