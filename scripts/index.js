import Card from "../scripts/Card.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const galleryContainer = document.querySelector(".gallery__grid");

// POP UP IMAGE //
const popupImage = document.querySelector(".popup-image");
const popupImageImg = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");

function openImagePopup(src, title) {
  popupImageImg.src = src;
  popupImageImg.alt = title;
  popupImageCaption.textContent = title;
  popupImage.classList.add("popup_open");
}


initialCards.forEach((cardData) => {
  const card = new Card(cardData, openImagePopup);
  galleryContainer.append(card.generateCard());
});

// EDIT PROFILE //
const popupEdit = document.querySelector(".popup-edit");
const formEdit = popupEdit.querySelector(".popup__form-edit");

formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const nameInput = formEdit.querySelector(".popup__input_name");
  const jobInput = formEdit.querySelector(".popup__input_profession");

  document.querySelector(".gallery__profile-name").textContent =
    nameInput.value;
  document.querySelector(".gallery__profile-profession").textContent =
    jobInput.value;

  popupEdit.classList.remove("popup_open");
});

//           POP UPS       //
import { openPopup, closePopup, handleOverlayClick } from "../scripts/utils.js";


document
  .querySelector(".gallery__button-edit")
  .addEventListener("click", () => {
    editFormValidator.resetValidation();
    openPopup(popupEdit);
  });

popupEdit
  .querySelector(".popup__button_close")
  .addEventListener("click", () => closePopup(popupEdit));

popupEdit.addEventListener("mousedown", handleOverlayClick);

//  ADD CARD //
const popupAdd = document.querySelector(".popup-add");
const formAdd = popupAdd.querySelector(".popup__form-add");

formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const titleInput = formAdd.querySelector(".popup__input_title");
  const urlInput = formAdd.querySelector(".popup__input_url");

  const newCardData = {
    name: titleInput.value,
    link: urlInput.value,
  };

  const card = new Card(newCardData, openImagePopup);
  galleryContainer.prepend(card.generateCard());

  formAdd.reset();
  closePopup(popupAdd);
});

document
  .querySelector(".gallery__button-add")
  .addEventListener("click", () => {
    addFormValidator.resetValidation();
    openPopup(popupAdd);
  });

popupAdd
  .querySelector(".popup__button_close")
  .addEventListener("click", () => closePopup(popupAdd));

popupAdd.addEventListener("mousedown", handleOverlayClick);

// FORM VALIDATION //
import FormValidator from "../scripts/FormValidator.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editForm = document.querySelector(".popup__form-edit");
const addForm = document.querySelector(".popup__form-add");

const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();