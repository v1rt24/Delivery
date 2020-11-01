export const validateForm = (data) => {
  return data.trim().length !== 0;
};

export const getUserData = () => {
  return  JSON.parse(localStorage.getItem('user')) || null;
};

export const saveUserData = userData => {
  localStorage.setItem('user', JSON.stringify(userData));
};