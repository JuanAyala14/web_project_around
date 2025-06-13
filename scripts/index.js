let container = document.querySelector(".popup");
let popupContainer = container.querySelector(".popup__container");
let formElement = popupContainer.querySelector(".popup__form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = formElement.querySelector(".popup__input_name");
  let jobInput = formElement.querySelector(".popup__input_profession");
  let profileName = document.querySelector(".gallery__profile-name");
  let profileAbout = document.querySelector(".gallery__profile-profession");
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  container.classList.remove("popup_open");
}
formElement.addEventListener("submit", handleProfileFormSubmit);

let editButton = document.querySelector(".gallery__button-edit");
editButton.addEventListener("click", function () {
  container.classList.add("popup_open");
});
let closeButton = document.querySelector(".popup__button_close");
closeButton.addEventListener("click", function () {
  container.classList.remove("popup_open");
});
