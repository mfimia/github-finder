import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// We declare a global state that we are going to be able to use everywhere in the app
const AlertState = (props) => {
  const initialState = null;
  // We declare a reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // ----------------------
  // Every action that involves the state is declared below
  // ----------------------

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  // We return a context provider with the values that are going to be passed
  // We reflect the children inside it to tell react that there is going to be stuff inside there
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
