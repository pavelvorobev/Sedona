const menuToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const feedbackForm = document.querySelector('.feedback__form');
const feedbackButton = document.querySelector('.feedback__button');
const popupError = document.querySelector('.popup-error');
const popupSuccess = document.querySelector('.popup-success');
const buttonError = document.querySelector('.popup__button--error');
const buttonSuccess = document.querySelector('.popup__button--success');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
});

buttonError.addEventListener('click', function() {
  popupError.style.display = "none";
  feedbackForm.reportValidity();
});

buttonSuccess.addEventListener('click', function() {
  popupSuccess.style.display = "none";
});

feedbackButton.addEventListener('click', function(e) {
  if(!feedbackForm.checkValidity()) {
    e.preventDefault();
    popupError.style.display = "block";
  }
});

feedbackForm.addEventListener('submit', function(e) {
  e.preventDefault();
  feedbackForm.reset();
  popupSuccess.style.display = "block";
});
