const form = document.getElementById("form");

// JS for the personal details

const fullNameInput = document.getElementById("full-name");
const addressInput = document.getElementById("address");

const nameValidationDisplay = document.getElementById("name-validation-display");
const addressValidationDisplay = document.getElementById("address-validation-display");

function inputValidation() {
    const fullName = fullNameInput.value;
    const address = addressInput.value;

    const fullNameRegex = /^([a-zA-Z]+\s){1,}[a-zA-Z]+$/;

    if (fullNameRegex.test(fullName)) {
        showSuccess(fullNameInput, nameValidationDisplay);
    } else {
        showError(fullNameInput, nameValidationDisplay, "Please enter at least 2 name");
    }

    if (address == "") {
        showError(addressInput, addressValidationDisplay, "Please enter an address");
    } else {
        showSuccess(addressInput, addressValidationDisplay);
    }
}

function showError(input, validationDisplay, message) {
    input.classList.add("error");
    input.classList.remove("success");
    validationDisplay.innerHTML = message;
}

function showSuccess(input, validationDisplay) {
    input.classList.add("success");
    input.classList.remove("error");
    validationDisplay.innerHTML = `<i class="fa-solid fa-check"></i>`;
}

function resetAllInputs() {
    resetInput(fullNameInput, nameValidationDisplay);
    resetInput(addressInput, addressValidationDisplay);
    resetInput(cardNumber, cardNumberValidationDisplay);
    resetInput(cardExpiry, cardExpiryValidationDisplay);
    resetInput(cardCvv, cardCvvValidationDisplay);
    resetInput(cardHolderName, cardHolderNameValidationDisplay);
    radioValidationDisplay.innerHTML = ``;
}

function resetInput(input, validationDisplay) {
    input.classList.remove("success");
    input.classList.remove("error");
    validationDisplay.innerHTML = ``;
}

fullNameInput.addEventListener("input", inputValidation);
addressInput.addEventListener("input", inputValidation);

//JS for the card details

const cardNumber = document.getElementById("card-number");
const cardExpiry = document.getElementById("card-expiry");
const cardCvv = document.getElementById("card-cvv");
const cardHolderName = document.getElementById("cardholder-name");

const cardNumberValidationDisplay = document.getElementById("card-number-validation-display");
const cardExpiryValidationDisplay = document.getElementById("card-expiry-validation-display");
const cardCvvValidationDisplay = document.getElementById("card-cvv-validation-display");
const cardHolderNameValidationDisplay = document.getElementById("cardholder-name-validation-display");

function cardInputValidation() {
    const cardNumberValue = cardNumber.value;
    const cardExpiryValue = cardExpiry.value;
    const cardCvvValue = cardCvv.value;
    const cardHolderNameValue = cardHolderName.value;

    const cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const cardExpiryRegex = /^\d{2}\/\d{2}$/;
    const cardCvvRegex = /^\d{3}$/;
    const cardHolderNameRegex = /^([a-zA-Z]+\s){1,}[a-zA-Z]+$/;

    if (cardNumberRegex.test(cardNumberValue)) {
        showSuccess(cardNumber, cardNumberValidationDisplay);
    } else {
        showError(cardNumber, cardNumberValidationDisplay, "Invalid card number");
    }

    if (cardExpiryRegex.test(cardExpiryValue)) {
        showSuccess(cardExpiry, cardExpiryValidationDisplay);
    } else {
        showError(cardExpiry, cardExpiryValidationDisplay, "Invalid expiry date");
    }

    if (cardCvvRegex.test(cardCvvValue)) {
        showSuccess(cardCvv, cardCvvValidationDisplay);
    } else {
        showError(cardCvv, cardCvvValidationDisplay, "Invalid CVV");
    }

    if (cardHolderNameRegex.test(cardHolderNameValue)) {
        showSuccess(cardHolderName, cardHolderNameValidationDisplay);
    } else {
        showError(cardHolderName, cardHolderNameValidationDisplay, "Please enter your name");
    }
}

cardNumber.addEventListener("input", cardInputValidation);
cardExpiry.addEventListener("input", cardInputValidation);
cardCvv.addEventListener("input", cardInputValidation);
cardHolderName.addEventListener("input", cardInputValidation);

// JS for the radio buttons

const radioButtons = document.getElementsByClassName("money-option");

const radioValidationDisplay = document.getElementById("radio-validation-display");

function radioValidation() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (!radioButtons[i].checked) {
            radioValidationDisplay.innerHTML = "Please select an option";
        }
    }
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("input", function () {
        radioValidationDisplay.innerHTML = `<i class="fa-solid fa-check"></i>`;
    });

    radioButtons[i].addEventListener("click", function () {
        for (let j = 0; j < radioButtons.length; j++) {
            if (i != j) {
                radioButtons[j].checked = false;
            }
        }
    });
}

function resetRadioButtons() {
    const checkedRadioButton = document.querySelector('input[type="radio"]:checked');
    checkedRadioButton.checked = false;

    for (var ii = 0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
            elements[ii].value = "";
        }
    }
}

const thankYouMessage = document.getElementById('thank-you-popup');
const thankYouMessageClose = document.getElementById('close-thank-you-popup');

thankYouMessageClose.addEventListener('click', function () {
    thankYouMessage.style.opacity = `0`
    thankYouMessage.style.transform = `scale(0)`;
    formMain.style.opacity = `1`
    window.setTimeout(function () {
        thankYouMessage.style.display = "none";
    }, 700)
});

const submitButton = document.getElementById("submit-button");
var elements = document.getElementsByTagName("input");

submitButton.addEventListener("click", function () {
    if (fullNameInput.classList.contains("success") && addressInput.classList.contains("success") && cardNumber.classList.contains("success") && cardExpiry.classList.contains("success") && cardCvv.classList.contains("success") && cardHolderName.classList.contains("success") && radioValidationDisplay.innerHTML == `<i class="fa-solid fa-check"></i>`) {
        resetAllInputs();
        resetRadioButtons();

        thankYouMessage.style.display = "initial";
        window.setTimeout(function () {
            thankYouMessage.style.opacity = `1`
            thankYouMessage.style.transform = `scale(1)`;
            formMain.style.opacity = `0.5`
        }, 0)
    } else {
        alert("Please fill out all fields correctly before submitting.");
        radioValidation();
        cardInputValidation();
        inputValidation();
    }
});
