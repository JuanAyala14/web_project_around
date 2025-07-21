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

const contain = document.querySelector(".gallery__grid");

// create initial cards
function createCard(cardData) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("gallery__card");

  const image = document.createElement("img");
  image.src = cardData.link;
  image.alt = cardData.name;
  image.classList.add("gallery__image");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("gallery__button_delete");
  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  const cardLabel = document.createElement("div");
  cardLabel.classList.add("gallery__content");

  const title = document.createElement("p");
  title.textContent = cardData.name;
  title.classList.add("gallery__paragraph");

  const likeButton = document.createElement("button");
  likeButton.classList.add("gallery__button_like");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("gallery__button_like_active");
  });

  image.addEventListener("click", function () {
    openImagePopup(cardData.link, cardData.name);
  });

  cardLabel.append(title, likeButton);
  cardElement.append(image, deleteButton, cardLabel);

  return cardElement;
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  contain.append(card);
});

// edit profile
const popupEdit = document.querySelector(".popup-edit");
const formEdit = popupEdit.querySelector(".popup__form-edit");

formEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = formEdit.querySelector(".popup__input_name");
  const jobInput = formEdit.querySelector(".popup__input_profession");
  const profileName = document.querySelector(".gallery__profile-name");
  const profileProfession = document.querySelector(
    ".gallery__profile-profession"
  );

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  popupEdit.classList.remove("popup_open");
});

document
  .querySelector(".gallery__button-edit")
  .addEventListener("click", function () {
    popupEdit.classList.add("popup_open");
  });

popupEdit
  .querySelector(".popup__button_close")
  .addEventListener("click", function () {
    popupEdit.classList.remove("popup_open");
  });

// add cards
const popupAdd = document.querySelector(".popup-add");
const formAdd = popupAdd.querySelector(".popup__form-add");

formAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titleInput = formAdd.querySelector(".popup__input_title");
  const urlInput = formAdd.querySelector(".popup__input_url");

  const newCardData = {
    name: titleInput.value,
    link: urlInput.value,
  };

  const newCard = createCard(newCardData);
  contain.prepend(newCard);

  formAdd.reset();
  popupAdd.classList.remove("popup_open");
});

document
  .querySelector(".gallery__button-add")
  .addEventListener("click", function () {
    popupAdd.classList.add("popup_open");
  });

popupAdd
  .querySelector(".popup__button_close")
  .addEventListener("click", function () {
    popupAdd.classList.remove("popup_open");
  });

const popupImage = document.querySelector(".popup-image");
const popupImageImg = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");
const popupImageClose = popupImage.querySelector(".popup__button_close");

function openImagePopup(src, title) {
  popupImageImg.src = src;
  popupImageImg.alt = title;
  popupImageCaption.textContent = title;
  popupImage.classList.add("popup_open");
}

popupImageClose.addEventListener("click", function () {
  popupImage.classList.remove("popup_open");
});
