const closeBtn = document.querySelector(".popup__button-close");
const profileEditBtn = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
closeBtn.addEventListener("click", () => popup.classList.remove("popup_opened"));
profileEditBtn.addEventListener("click", () => popup.classList.add("popup_opened"));