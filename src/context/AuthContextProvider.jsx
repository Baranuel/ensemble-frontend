import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  access_token: "",
  isLoggedIn: "",
  login: "",
  loading: false,
  setLoading: "",
});

function AuthContextProvider(props) {
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const [loading, setLoading] = useState(false);

  const isLoggedIn = !!token;

  const handleLogin = (token) => {
    localStorage.setItem("access_token", token);
    setToken(token);
  };

  const isLoading = (state) => {
    setLoading(state);
  };

  const ContextValue = {
    access_token: token,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    loading: loading,
    setLoading: isLoading,
  };

  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
