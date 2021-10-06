let email = {},
  password = {};
let signInButton;

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function (password) {
  return password.length > 1;
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  // 1) Haal in deze functie de password-input en de password-toggle op. Doe dit met .js- prefixed classnames.
  const passwordInput = document.querySelector('.js-password');
  const passwordToggle = document.querySelector('.js-toggle-password');
  const passwordOptions = ['password', 'text'];
  // 2) We gaan luisteren of er geklikt wordt op de checkbox.
  passwordToggle.addEventListener('change', function () {
    console.log('toggled');
    // 3) Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
    passwordInput.type = passwordOptions[+this.checked];
    // if (passwordToggle.checked) {
    //   passwordInput.type = 'text';
    // } else {
    //   passwordInput.type = 'password';
    // }
  });
}

// Todo: Maak een functie getDOMElements die de globale variabelen correct invult:
function getDOMElements() {
  // Todo: Haal voor het email en het password object een: errorMessage, een input en een field op.
  // Todo: Voeg dit toe aan het bijhorende object.
  email.field = document.querySelector('.js-email-field');
  email.input = document.querySelector('.js-email-input');
  email.errorMessage = document.querySelector('.js-email-message');

  password.field = document.querySelector('.js-pw-field');
  password.input = document.querySelector('.js-pw-input');
  password.errorMessage = document.querySelector('.js-pw-message');

  // Todo: Haal ook de button op. Dit mag direct in de variabele zitten en moet niet in een object komen.
  signInButton = document.querySelector('.js-sign-in-button');

  //   console.log(email);
  //   console.log(password);
}

const addErrors = function (inputObject) {
  inputObject.errorMessage = 'Field is empty';
};

function enableListeners() {
  email.input.addEventListener('blur', function () {
    if (isEmpty(email.input.value)) {
      addErrors(email, 'This field is required');
    }
  });

  signInButton.addEventListener('click', function (e) {
    e.preventDefault();

    console.log('signing in...');
    // wat er getypt wordt in het input field:
    console.log(email.input.value);
    if (isValidEmailAddress(email.input.value)) {
      console.log('ok');
      email.field.classList.remove('has-error');
      email.errorMessage.innerHTML = '';
    } else {
      email.field.classList.add('has-error');
      email.errorMessage.innerHTML = 'Field required';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  getDOMElements();
  enableListeners();
  handleFloatingLabel();
  handlePasswordSwitcher();
});
