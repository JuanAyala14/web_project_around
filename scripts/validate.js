const formElement = document.querySelector(".popup__form");
const formInputs = formElement.querySelectorAll(".popup__input");

const showError = (formElement, input, errorMessage) => {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideError = (formElement, input) => {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__error_visible");
};

const checkInputValidity = (formElement, input) => {
  if (!input.validity.valid) {
    showError(formElement, input, input.validationMessage);
  } else {
    hideError(formElement, input);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button_save");

  // Estado inicial del botón
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

const resetValidation = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button_save");

  inputList.forEach((input) => hideError(formElement, input));
  toggleButtonState(inputList, buttonElement);
  formElement.reset();
};

enableValidation();
