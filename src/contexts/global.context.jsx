import { createContext, useMemo, useReducer } from "react";
import { actions, initialState, reducer } from "../services/reducer/reducer.service";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      login: state.login,
      setDarkTheme: () => {
        dispatch({ type: actions.SET_THEME_DARK });
      },
      setLightTheme: () => {
        dispatch({ type: actions.SET_THEME_LIGHT });
      },
      setLogin: () => {
        dispatch({ type: actions.SET_LOGIN });
      },
      setLogout: () => {
        dispatch({ type: actions.SET_LOGOUT });
      },
    }),
    [state.login, state.theme]
  );

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};