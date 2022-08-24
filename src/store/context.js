import React from "react";

const AppContext = React.createContext({
  token: null,
  isLoggedIn: false,
  currentDist: null,
  currentState: null,
  data: [],
  login: (token) => {},
  logout: () => {},
  setDist: (val) => {},
  setState: (val) => {},
  setData: (data) => {},
});

export default AppContext;
