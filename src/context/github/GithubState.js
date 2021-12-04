import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// We declare a global state that we are going to be able to use everywhere in the app
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // We declare a reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // ----------------------
  // Every action thata involves the state is declared below
  // ----------------------

  // Search Users
  const searchUsers = (text) => {
    setLoading();
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        dispatch({
          type: SEARCH_USERS,
          payload: res.data.items,
        });
      });
  };

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // We return a context provider with the values that are going to be passed
  // We reflect the children inside it to tell react that there is going to be stuff inside there
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
