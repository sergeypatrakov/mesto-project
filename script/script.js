const closeButton = document.querySelector('.popup__button-close');
const profileEditButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');

closeButton.addEventListener('click', () => popup.classList.remove('popup_opened'));
profileEditButton.addEventListener('click', () => popup.classList.add('popup_opened'));