import Card from "../scripts/Card.js";

import FormValidator from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";

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


const userInfo = new UserInfo({
  nameSelector: ".gallery__profile-name",
  jobSelector: ".gallery__profile-profession",
});

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

const popupEditProfile = new PopupWithForm(".popup-edit", (data) => {
  userInfo.setUserInfo(data);
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".popup-add", (data) => {
  const card = new Card(data, (src, title) => popupWithImage.open(src, title));
  cardSection.addItem(card.generateCard());
});
popupAddCard.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, (src, title) => popupWithImage.open(src, title));
      cardSection.addItem(card.generateCard());
    },
  },
  ".gallery__grid"
);

cardSection.renderItems();

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidator(validationConfig, document.querySelector(".popup__form-edit"));
const addFormValidator = new FormValidator(validationConfig, document.querySelector(".popup__form-add"));
editFormValidator.enableValidation();
addFormValidator.enableValidation();

document.querySelector(".gallery__button-edit").addEventListener("click", () => {
  const currentData = userInfo.getUserInfo();
  popupEditProfile._form.querySelector(".popup__input_name").value = currentData.name;
  popupEditProfile._form.querySelector(".popup__input_profession").value = currentData.job;
  editFormValidator.resetValidation();
  popupEditProfile.open();
});

document.querySelector(".gallery__button-add").addEventListener("click", () => {
  addFormValidator.resetValidation();
  popupAddCard.open();
});


