export const getTokenFromStorage = () => {
    const localData = localStorage.getItem("token");
    return localData ? localData : null;
}

export const setTokenInStorage = (token) => {
    localStorage.setItem("token", token);
}

export const removeTokenFromStorage = () => {
    localStorage.removeItem("token");
}