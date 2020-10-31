export const validateForm = (login, password) => {
  return login.length !== 0 && password.length !== 0;
};