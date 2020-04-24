let bgImage = document.querySelector('.page-header--large');
let closedToggle = document.querySelector('.menu__toggle');

closedToggle.addEventListener('click', function() {
  if (bgImage.classList.contains('page-header--large-opened')) {
    bgImage.classList.add('page-header--large-closed');
    bgImage.classList.remove('page-header--large-opened');
  } else {
    bgImage.classList.remove('page-header--large-closed');
    bgImage.classList.add('page-header--large-opened');
  }
});
