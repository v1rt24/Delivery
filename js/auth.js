import { band, band2 } from './modalScroll.js';
import { validateForm, getUserData, saveUserData } from './utils.js';

const
  buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  logInForm = document.querySelector('#logInForm'),
  userName = document.querySelector('.user-name'),
  cartButton = document.querySelector('.button-cart'),
  buttonOut = document.querySelector('.button-out')
;

// Открытие модального окна
export const modalAuthOpen = () => {
  modalAuth.classList.add('is-open');
  band();
};

// Закрытие модального окна
const modalAuthClose = () => {
  modalAuth.classList.remove('is-open');
  setTimeout(() => {
    band2();
  }, 300);
};

// Получение и Сохранение данных пользователя в localStorage
let login = null;

// Если пользователь авторизован
const authorized = () => {
  buttonAuth.style.display = 'none';
  userName.textContent = login.login;
  userName.style.display = 'inline';
  cartButton.style.display = 'block';
  buttonOut.style.display = 'block';

  // Выход из учётной записи
  const logout = () => {
    localStorage.removeItem('user');
    buttonAuth.style.display = 'block';
    userName.textContent = '';
    userName.style.display = 'none';
    cartButton.style.display = 'none';
    buttonOut.style.display = 'none';
    checkOut();

    // Удаление события выхода из учётной записи
    buttonOut.removeEventListener('click', logout);
  };

  buttonOut.addEventListener('click', logout);
};

// Если пользователь не авторизован
const noAuthorized = () => {
  // Обработка формы авторизации
  const logIn = evt => {
    evt.preventDefault();
    const form = evt.target;

    const dataForm = new FormData(form);

    let values = {};
    for (const [key, name] of dataForm) {
      if (!validateForm(name)) {
        alert('Авторизуйтесь в системе');
        return false;
      }
      values[key] = name.trim();
    }

    saveUserData(values);
    modalAuthClose();
    form.reset();

    checkOut();

    // Удаление события авторизации
    logInForm.removeEventListener('submit', logIn);
    buttonAuth.removeEventListener('click', modalAuthOpen);
    modalAuth.removeEventListener('click', eventCloseModal);
  };

  // Открытие модального окна
  buttonAuth.addEventListener('click', modalAuthOpen);

  // Закрытие модального окна
  const eventCloseModal = evt => {
    const target = evt.target;
    if (target.classList.contains('close-auth') ||
      target.classList.contains('is-open')) {
      modalAuthClose();
      logInForm.reset();
    }
  };
  modalAuth.addEventListener('click', eventCloseModal);

  // Отправка формы авторизации
  logInForm.addEventListener('submit', logIn);
};

// Проверка авторизации пользователя
const checkOut = () => {
  login = getUserData();

  if (login) {
    authorized();
  }
  else {
    noAuthorized();
  }
};

checkOut();


