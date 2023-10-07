export const getTokenFromStorage = () => {
  const localData = localStorage.getItem("dh_token");
  return localData ? localData : null;
};

export const setTokenInStorage = (token) => {
  localStorage.setItem("dh_token", token);
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem("dh_token");
};
