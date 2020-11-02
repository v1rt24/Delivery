// Для валидации данных
export const validateForm = (data) => {
  return data.trim().length !== 0;
};

// Получение данных из localStorage
export const getUserData = key => {
  return JSON.parse(localStorage.getItem(key)) || null;
};

// Запись данных в localStorage
export const saveUserData = (key, userData) => {
  localStorage.setItem(key, JSON.stringify(userData));
};

// Удаление данных из localStorage
export const deleteUserData = key => {
  localStorage.removeItem(key);
};