export const initialState = { theme: "light", login: !!localStorage.getItem("token") };

export const actions = {
    SET_THEME_LIGHT: "SET_THEME_LIGHT",
    SET_THEME_DARK: "SET_THEME_DARK",
    SET_LOGIN: "SET_LOGIN",
    SET_LOGOUT: "SET_LOGOUT"
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.SET_THEME_DARK:
            return ({...state, theme: "dark"})
        case actions.SET_THEME_LIGHT:
            return  ({...state, theme: "light"})
        case actions.SET_LOGIN:
            return  ({...state, login: true})
        case actions.SET_LOGOUT:
            return  ({...state, login: false})
        default: {
            return state}
    }
}