export default class Card {
  constructor({ name, link }, handleImageClick) {
    this._name = name;
    this._link = link;
    this._handleImageClick = handleImageClick;
  }

  _handleLike() {
    this._likeButton.classList.toggle("gallery__button_like_active");
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDelete();
    });

    this._image.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
    });
  }

  generateCard() {
    this._element = document.createElement("div");
    this._element.classList.add("gallery__card");

    this._image = document.createElement("img");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._image.classList.add("gallery__image");

    this._deleteButton = document.createElement("button");
    this._deleteButton.classList.add("gallery__button_delete");

    const cardLabel = document.createElement("div");
    cardLabel.classList.add("gallery__content");

    const title = document.createElement("p");
    title.textContent = this._name;
    title.classList.add("gallery__paragraph");

    this._likeButton = document.createElement("button");
    this._likeButton.classList.add("gallery__button_like");

    cardLabel.append(title, this._likeButton);
    this._element.append(this._image, this._deleteButton, cardLabel);

    this._setEventListeners();

    return this._element;
  }
}
