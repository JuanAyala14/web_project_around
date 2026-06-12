
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__caption");
  }

  open(src, title) {
    this._image.src = src;
    this._image.alt = title;
    this._caption.textContent = title;
    super.open();
  }
}